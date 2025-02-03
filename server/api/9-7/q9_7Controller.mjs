import { q9_7Model } from "./q9_7Model.mjs"

const get9_7_1 = async (req, res) => { 
    const result = await q9_7Model.select9_7_1() 
    res.send(JSON.stringify({ status: "success", list: result })) 
} 

const get9_7_2 = async (req, res) => { 
    const id = req.params.id 
    if (!id) { 
      return res.send(JSON.stringify({ status: "error" })) 
    } 
    const result = await q9_7Model.select9_7_2(id) 
    if (!result) { 
      return res.send(JSON.stringify({ status: "not found" })) 
    } 
    res.send(JSON.stringify({ status: "success", data: result })) 
} 

export const q9_7Controller = { 
    get9_7_1,
    get9_7_2,
} 