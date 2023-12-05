export type Requirements = {
  cpu: string;
  ram: string;
  storage: string;
}

export type Game = {
  id?: number,
  name: string,
  requirements: Requirements,
  price: number,
  genre: string,
  img: string
}

export type DLC = {
  relatedGame: Game,
  name: string,
  price: number
}
