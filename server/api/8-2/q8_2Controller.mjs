
const get8_2_1 = (req, res) => { 
    const data = {
        "code": "HC42-9821",
        "name": "情報太郎"
    }
    if(req.query.code !== data.code){
        res.send(JSON.stringify({ status: "error", code: req.query.code, cause: "not found code!"}))
        return
    }

    res.send(JSON.stringify({ code: req.query.code, data: "情報太郎"}))
}

const post8_2_2 = (req, res) => {
    const data = {
        "code": "HC42-9821",
    }
    if(req.body.code === data.code){ 
        res.send(JSON.stringify({ status: "error", code: req.body.code, cause: "code already exists!"}))
        return
    }

    console.log(req.body)
    res.send(JSON.stringify({ status: "OK", postcode: "059-0012"}))
}

export const q8_2Controller = {
    get8_2_1,
    post8_2_2,
}