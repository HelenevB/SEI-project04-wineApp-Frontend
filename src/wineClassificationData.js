// as Spooncular did not have an api for classification created an database of these straight from there documents
// added key value pairs for  type (for index display) & url so we had the right text to feed into the API 

const wineData = {
 wines: [
    {
        name: "Bordeaux",
        type: "red",
        url: "bordeaux"
    },
    {
        name: "Cabernet Sauvignon",
        type: "red",
        url: "cabernet_sauvignon"
    },

    {
        name: "Champagne",
        type: "champ",
        url: "champagne"
    },

    {
        name: "Chardonnay",
        type: "white",
        url: "chardonnay"
    },

    {
        name: "Chenin Blanc",
        type: "white",
        url: "chenin_blanc"
    },
    {
        name: "Rose",
        type: "rose",
        url: 'rose_wine'
    },

    {
        name: "Cotes Du Rhone ",
        type: "white",
        url: "cotes_du_rhone"
    },

    {
        name: "Malbec",
        type: "red",
        url: "malbec"
    },
    
    {
        name: "Pinot Grigio ",
        type: "white",
        url: "pinot_grigio"
    },

    {
        name: "Port",
        type: "red",
        url:"port"
    },

    {
        name: "Primitivo",
        type: "white",
        url: "primitivo"
    },


    {
        name: "Riesling",
        type: "white",
        url:  'riesling'
    },
    
    {
        name: "Rioja",
        type: "red",
        url: "rioja"
    },

 
    {
        name: "Sauvignon Blanc",
        type: "white",
        url: "sauvignon_blanc"
    },

    {
        name: "Shiraz",
        type: "red",
        url: "shiraz"
    },

    {   
        name: "Moscato",
        type: "red",
        url: "moscato"
    }

   
]

}

export default wineData;