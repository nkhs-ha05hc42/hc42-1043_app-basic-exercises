import { q9_7Model } from "./q9_7Model.mjs"

const get9_7_1 = async (req, res) => { 
    const result = await q9_7Model.select9_7_1() 
    res.send(JSON.stringify({ status: "success", list: result })) 
} 

export const q9_7Controller = { 
    get9_7_1,
} 