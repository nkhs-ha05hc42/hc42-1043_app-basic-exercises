const get1 = (req, res) => { 
    res.send( 
        JSON.stringify({ 
        code: req.query.code, 
        name: "情報太郎", 
        }), 
    ) 
}

export const q8_1Controller = {
    get1,
}