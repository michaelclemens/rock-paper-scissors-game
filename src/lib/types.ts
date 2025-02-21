export enum GameEnums {
  original = 'original',
  bonus = 'bonus',
}
export type GameTypes = keyof typeof GameEnums

export enum PlayerEnums {
  user = 'user',
  house = 'house',
}
export type PlayerTypes = keyof typeof PlayerEnums

export enum OriginalSelectionEnums {
  rock = 'rock',
  paper = 'paper',
  scissors = 'scissors',
}
export enum BonusSelectionEnums {
  lizard = 'lizard',
  spock = 'spock',
}
export const SelectionEnums = { ...OriginalSelectionEnums, ...BonusSelectionEnums }
export type SelectionTypes = keyof typeof SelectionEnums

export enum ResultEnums {
  win = 'win',
  lose = 'lose',
  draw = 'draw',
}
export type ResultTypes = keyof typeof ResultEnums
