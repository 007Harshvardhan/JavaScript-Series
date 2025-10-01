const name="Harsh"

const repoCount=50

//console.log(name+ repoCount)

console.log(`HELLO MY NAME IS ${name} and my repo count is ${repoCount}`)

const gameName=new String('HarshVardhan')

console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName.charAt(3))

console.log(gameName.indexOf('r'))

const newString =gameName.substring(0,4);
console.log(newString)
 
const anotherString =gameName.slice(-8 , 3)
console.log(anotherString)

const newString1 ="    harsh.  "
console.log(newString1.trim())

const url="https://harsh.com/harsh520Singh"

console.log(url.replace('%20' , '_'))

console.log(url.includes('suman'))


console.log(gameName.split('_'))

