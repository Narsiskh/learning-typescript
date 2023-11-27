let score: number | string = 33

score = 44
score= "55"

type User = {
    name: string;
    id: number
}
type Admin = {
    userName: string;
    id: number
}

let Narcis: User | Admin = {name: "Narcis", id: 334}

Narcis = {userName: "Ns", id: 334}

// function getDbId(id: number | string){
//     // making some API calls
//     console.log(`DB id is: ${id}`);
// }

function getDbId(id: number | string){
    // id.toLowerCase() //Error
    if (typeof id === "string"){
        id.toLowerCase()
    }
}

getDbId(3)
getDbId("3")

//Array

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
// All should be string or number!
const data3: string[] | number[] = ["1", "2", "3"]
// You can have both number & string
const data4: (string | number )[] = ["1", 2, "3"]


let pi:3.14 = 3.14
// pi = 3.145 //Error

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
//seatAllotment = "crew" //Error
