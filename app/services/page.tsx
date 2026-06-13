"use client";

import { useState, useRef } from "react";
import { UploadCloud, Loader2, X, AlertCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function ServicesPage() {
  const [aiAnalysisFile, setAiAnalysisFile] = useState<File | null>(null);
  const [aiPreviewUrl, setAiPreviewUrl] = useState<string | null>(null);
  const [aiStatus, setAiStatus] = useState<"idle" | "analyzing" | "success" | "error">("idle");
  const [aiResult, setAiResult] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAiAnalysisFile(file);
      setAiPreviewUrl(URL.createObjectURL(file));
      setAiStatus("idle");
      setAiResult("");
    }
  };

  const clearImage = () => {
    setAiAnalysisFile(null);
    setAiPreviewUrl(null);
    setAiStatus("idle");
    setAiResult("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const runAiAnalysis = async () => {
    if (!aiAnalysisFile) return;
    
    setAiStatus("analyzing");
    try {
      const formData = new FormData();
      formData.append("image", aiAnalysisFile);
      
      const res = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Analysis failed");
      }
      
      setAiResult(data.result);
      setAiStatus("success");
    } catch (error) {
      setAiStatus("error");
    }
  };

  const services = [
    { name: "Buzz Cut", price: "$20", desc: "Clean, even, and sharp." },
    { name: "Signature Fade", price: "$35", desc: "Precision skin fade with perfect blending." },
    { name: "Beard Trim & Shape", price: "$20", desc: "Sculpted beard with straight razor finish." },
    { name: "The Combo", price: "$50", desc: "Signature Fade + Beard Trim & Shape." },
  ];

  return (
    <div>
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888] font-semibold">Our Services</h2>
        </div>
        
        <div className="grid gap-2 text-sm">
          {services.map((service, idx) => (
            <div key={idx} className="group relative flex justify-between items-center border-b border-[#1A1A1A] py-5 px-2 hover:bg-[#ffffff03] transition-colors">
               <h3 className="font-medium tracking-wide text-base">{service.name}</h3>
               <span className="font-mono text-[#888]">{service.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0C0C0C] border-y border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888] font-semibold">AI Style Match</h2>
          </div>
          
          <div className="mb-12 max-w-2xl text-[0.85rem] text-[#888] list-none border-l-[3px] border-[#1A1A1A] pl-6 py-2 leading-relaxed">
            <p>Upload an inspiration photo. Our AI will analyze the style and give you the exact terminology to tell your barber to get the perfect cut.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
              />
              {!aiPreviewUrl ? (
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-[#121212] border border-[#222] rounded-none h-80 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-[#888] transition-colors group"
                >
                  <UploadCloud size={32} className="text-[#555] group-hover:text-white transition-colors" />
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888] font-semibold group-hover:text-white">Select Photo</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative border border-[#222] rounded-none overflow-hidden h-80 bg-[#121212]">
                    <img src={aiPreviewUrl} alt="Style inspiration" className="w-full h-full object-cover opacity-80" />
                    
                    {aiStatus === "analyzing" && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
                        <Loader2 className="animate-spin text-white" size={32} />
                        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888] font-semibold">Analyzing...</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-4">
                     <button 
                       onClick={runAiAnalysis} 
                       disabled={aiStatus === "analyzing" || aiStatus === "success"}
                       className="flex-1 bg-[#FFFFFF] text-[#000000] font-semibold tracking-[0.1em] uppercase py-3 text-[0.8rem] hover:bg-[#888888] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                     >
                       {aiStatus === "success" ? "Analyzed" : "Analyze Style"}
                     </button>
                     <button 
                       onClick={clearImage}
                       disabled={aiStatus === "analyzing"}
                       className="px-6 border border-[#222] text-[#888] hover:text-white focus:border-[#888] transition-colors disabled:opacity-50"
                     >
                       <X size={20} />
                     </button>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-[#121212] border border-[#222] p-8 flex flex-col min-h-80">
              {aiStatus === "idle" && (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 opacity-50">
                   <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#555] font-semibold">Awaiting Image</span>
                </div>
              )}
              
              {aiStatus === "analyzing" && (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                   <div className="flex gap-1">
                     <span className="w-2 h-2 bg-[#555] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                     <span className="w-2 h-2 bg-[#555] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                     <span className="w-2 h-2 bg-[#555] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                   </div>
                </div>
              )}

              {aiStatus === "error" && (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 text-red-400">
                   <AlertCircle size={32} />
                   <span className="text-sm font-medium">Failed to analyze image.</span>
                </div>
              )}

              {aiStatus === "success" && (
                 <div className="flex-1 prose prose-invert prose-p:text-[#bbb] prose-p:leading-relaxed prose-headings:text-white prose-p:font-light max-w-none text-sm">
                   <div className="markdown-body">
                     <ReactMarkdown>{aiResult}</ReactMarkdown>
                   </div>
                 </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
