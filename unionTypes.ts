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

function getDbId(id: number | string){
    console.log(`DB`);
}
