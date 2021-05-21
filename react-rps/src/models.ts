
type Winstreak = {
    id?: number
    timestamp?: Date
    streak: number
    score: number
}

type Pick = {
    name: string
}

type Coordinate = {
    x: number
    y: number
}

export type {Winstreak, Pick, Coordinate}