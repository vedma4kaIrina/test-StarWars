export interface IPerson {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: 'male' | 'female' | 'n/a' | 'other',
  homeworld: string,
  films: Array<string>,
  species: Array<string>,
  vehicles: Array<string>,
  starships: Array<string>,
  created: string,
  edited: string,
  url: string
}

export interface IDataPersons {
  count: number;
  next: null | string;
  previous: null | string;
  results: Array<IPerson>;
}