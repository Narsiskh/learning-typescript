function addtwo(num: number){
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let logInUser = (name: string, email: string, isPaid: boolean) => {}

addtwo(5)
getUpper("narcis")
signUpUser("narcis", "narsiskh.2013@gmail.com",true)
logInUser("narcis", "narsiskh.2013@gmail.com", false)

// function getValue(myVal: number): boolean{
//     if (myVal > 5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderMan", "ironMan"]
// const heros = [1 , 2, 3]

heros.map((hero)=> {
    return `hero is ${hero}`
})

function consoleError(errorMsg: never){
    throw new Error(errorMsg);
}