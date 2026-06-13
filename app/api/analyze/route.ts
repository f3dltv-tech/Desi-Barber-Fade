import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File;
    
    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const bytes = await image.arrayBuffer();
    const base64Image = Buffer.from(bytes).toString("base64");

    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: [
        {
          role: "user",
          parts: [
            { text: "Analyze this haircut image. First, identify the specific style (e.g., Skin Fade, Buzz Cut, Pompadour, Crop, etc.). Then, provide a short, professional description of how a client should ask a barber for this exact cut (focus on clippers guards, fade height, and top length). Write in a cool, modern, minimalist tone." },
            { 
              inlineData: { 
                mimeType: image.type, 
                data: base64Image 
              } 
            }
          ]
        }
      ]
    });

    return NextResponse.json({ result: response.text });
  } catch (error: any) {
    console.error("AI Analysis error:", error);
    return NextResponse.json({ error: "Failed to analyze image. Please try again." }, { status: 500 });
  }
}
