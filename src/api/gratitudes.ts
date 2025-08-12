import type { NextApiRequest, NextApiResponse } from "next";

export type Gratitude = {
  id: number;
  nickname: string;
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Gratitude[] | { error: string }>
) {
  try {
    const r = await fetch("https://mgsindikat.ru/pp/gratitude.json", {
      cache: "no-store",
    });
    const data = (await r.json()) as Gratitude[];
    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: "Upstream fetch failed" });
  }
}
