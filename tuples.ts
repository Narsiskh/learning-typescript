// const user: (string | number)[] = ["hc", 1 ]

// Type Order is important!
let tUser: [string, number, boolean]
tUser = ["hc", 131, true]


let rgb: [number, number, number] = [255, 123, 112]


type User = [number, string]

const newUser: User = [112, "Narcis"]

newUser[1] = "hc.com"
// newUser.push(true) //Error

