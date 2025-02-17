const get8_3_1 = (req, res) => { 
    const sampleObject = [
    { en: "apple", ja: "りんご"},
    { en: "lemon", ja: "レモン"},
    { en: "grape", ja: "ぶどう"}
    ]

    res.send(JSON.stringify(sampleObject))
}

const get8_3_2 = (req, res) => { 
    const sampleObjectArray = [
    { en: "apple", ja: "りんご"},
    { en: "lemon", ja: "レモン"},
    { en: "grape", ja: "ぶどう"}
    ]

    for (const sampleObject of sampleObjectArray) {
        if(req.params.en === sampleObject.en){
            res.send(JSON.stringify({ en : req.params.en, ja: sampleObject.ja}))
            return
        }
    }

    res.send(JSON.stringify({ status: "error", en: req.params.en, cause: "not found!"}))
}

export const q8_3Controller = {
    get8_3_1,
    get8_3_2,
}