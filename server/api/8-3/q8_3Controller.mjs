const get8_3_1 = (req, res) => { 
    const sampleObject = [
    { en: "apple", ja: "りんご"},
    { en: "lemon", ja: "レモン"},
    { en: "grape", ja: "ぶどう"}
    ]

    res.send(JSON.stringify(sampleObject))
}

export const q8_3Controller = {
    get8_3_1,
}