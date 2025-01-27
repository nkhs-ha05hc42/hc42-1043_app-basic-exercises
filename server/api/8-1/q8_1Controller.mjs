const get8_1_1 = (req, res) => { 
    res.send( 
        JSON.stringify({ 
        code: req.query.code, 
        name: "情報太郎", 
        }), 
    ) 
}

const post8_1_2 = (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({ status: "OK", postcode: "059-0012"}))
}

export const q8_1Controller = {
    get8_1_1,
    post8_1_2,
}