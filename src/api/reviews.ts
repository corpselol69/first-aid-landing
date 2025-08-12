import type { NextApiRequest, NextApiResponse } from "next";

export type Review = {
  id: number;
  author: string;
  text: string;
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Review[] | { error: string }>
) {
  try {
    const r = await fetch("https://mgsindikat.ru/pp/review.json", {
      cache: "no-store",
    });
    const rawText = await r.text();

    // чиним кривой JSON
    const fixedText = `[${rawText.trim().replace(/,\s*$/, "")}]`;
    const data = JSON.parse(fixedText) as Review[];

    res.status(200).json(data);
  } catch (err) {
    console.error("Ошибка API /reviews:", err);
    res.status(500).json({ error: "Upstream fetch failed" });
  }
}
