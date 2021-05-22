
type Winstreak = {
    id?: number
    timestamp?: Date
    streak: number
    score: number
}

type Pick = {
    id: number
    name: string
    beats: number
}

export type {Winstreak, Pick}