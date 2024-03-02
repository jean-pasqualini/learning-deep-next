import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setDraftMode({ enable: false })
    res.redirect("/flash?message=draft%20disabled")
}