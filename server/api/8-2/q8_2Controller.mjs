
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

const put8_2_3 = (req, res) => {
    const data = {
        "code": "HC42-9823" ,
        "postcode": "059-0461",
        "address": "北海道登別市札内町"
    }
    if(req.body.code !== data.code){
        res.send(JSON.stringify({ status: "error", code: req.body.code, cause: "not found code!"}))
        return
    }

    const sampleMap = new Map()
    sampleMap.set("code", req.body.code)
    if(req.body.postcode !== data.postcode){
        sampleMap.set("postcode", req.body.postcode)
    }
    if(req.body.address !== data.address){
        sampleMap.set("address", req.body.address)
    }

    const sampleObject = Object.fromEntries(sampleMap.entries())
    console.log(sampleObject)
    res.send(JSON.stringify({ status: "OK", code: "HC42-9823"}))
}

export const q8_2Controller = {
    get8_2_1,
    post8_2_2,
    put8_2_3
}