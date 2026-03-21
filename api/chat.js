import OpenAI from "openai";
import { createClient } from '@supabase/supabase-js';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });
  const { message, name, phone } = req.body;

  try {
    // 1. AI 답변 생성 (OpenAI 연동)
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "당신은 세이프가드 프로의 보험 상담 전문가입니다. 보험 설계사 이현을 대신해 고객에게 친절하고 전문적으로 답변하세요." },
        { role: "user", content: message }
      ],
    });
    const aiAnswer = response.choices[0].message.content;

    // 2. DB 수집 (Supabase 연동)
    if (name && phone) {
      await supabase.from("leads").insert([{ name, phone, content: message }]);
    }

    res.status(200).json({ answer: aiAnswer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
