
const get8_2_1 = (req, res) => { 
    const data = {
        "code": "HC42-9821",
        "name": "情報太郎"
    }
    if(req.query.code != data.code){
        
        res.send(JSON.stringify({ status: "error", code: req.query.code, cause: "not found code!"}))
        return
    }

    res.send(JSON.stringify({ code: req.query.code, data: "情報太郎"}))
}

export const q8_2Controller = {
    get8_2_1,
}