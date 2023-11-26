// const User = {
//     name: "Narcis",
//     email: "narciskh.2013@gmail.com",
//     isActive: true
// }
//
// function createUser({name: string, isPaid: boolean}){}
//
// let newUser = {name: "Narcis", isPaid: false, email: "narciskh.2013@gmail.com"}
// createUser(newUser)
//
//
//
// function createCourse():{name: string, price: number}{
//     return {name: "Narcis", price: 399}
// }


// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }
//
// function creatUser(user: User) : User{
//     return {name: "", email: "", isActive: true}
// }
//
// creatUser({name: "", email: "", isActive: true})


type User = {
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean
    credCardDetails?: number
}

let myUser: User = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: false
}

type cardsNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: String
}

type cardDetails = cardsNumber & cardDate & {
    cvv: number
}

myUser.email = "h@gmail.com"
// myUser._id = "asa"

export {}