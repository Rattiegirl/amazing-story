const getDictionary = (story) => {

    
    const dictionary = {}
    const symbols = story.split("")
    for (let symbol of symbols) {
        if (dictionary[symbol]) {
            dictionary[symbol] += 1
        } else {
            dictionary[symbol] = 1
        }
    }
    const symbolobjects = []
    for (let symbol in dictionary) {
        console.log(symbol)
        symbolobjects.push({
            symbol: symbol,
            count: dictionary[symbol]
        })
    }
    const result = symbolobjects.sort((a, b) => {
        return (b.count - a.count)
    })

    return result

}

module.exports = {
    getDictionary : getDictionary
} 
