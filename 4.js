const { chinese, english, russian } = require("./data/story_3")

const chineseWords = chinese.split("\n")
console.log(chineseWords)
const englishWords = english.split("\n")
console.log(englishWords)
const russianWords = russian.split("\n")
console.log(russianWords)

for (let i=0; i<chineseWords.length; i++){
    console.log(`${chineseWords[i]} - ${englishWords[i]} - ${russianWords[i]}`)
}