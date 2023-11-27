interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string,
    // startTrail: () => string
    // or
    startTrail(): string
    getCoupon(couponName: string, value: number): number
}

const Narcis: Admin = {dbId: 22, email: "n@n.com",
    userId: 2211,
    role: "admin",
    gitHubToken: "github",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "narcis10", off: 10) => {
        return 10
    }
}
Narcis.email = "n@nk.com"
// Narcis.dbId = 33 //Error due to `readonly`!

interface User {
    gitHubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}