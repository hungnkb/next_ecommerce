import type { NextApiRequest, NextApiResponse } from 'next';

export async function GET(_req: NextApiRequest, res: NextApiResponse) {
  return Response.json({ data: 'okeeeeeeeeeeee' });
}
