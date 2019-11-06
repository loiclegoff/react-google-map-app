enum Categories {
    SE_NOURIR = 1,
    SE_LOGER = 2,
    SE_SOIGNER = 3,
    SE_RAFFRAICHIR = 4,
    S_ORIENTER = 5,
    S_OCCUPER_DE_SOI = 6,
    SE_REINSERER = 7
}

const API = process.env.ENTOURAGE_API as string

export const getPois = (setState: (data: any) => void, latitude: number, longitude: number, distance: number, categories?: Categories[]) =>{
    fetch(`${API}/pois?latitude=${latitude}&longitude=${longitude}&distance=${distance}&category_ids=1,2,3,4,5,6,7`)
        .then(response => response.json())
        .then(data => setState(data))
}