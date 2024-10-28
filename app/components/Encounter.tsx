/* This interface will be used to separate the different parts of the encounter out */
export interface Encounter {
  imageURL: string;
  dialogue: string;
  answer: string;
}

/* Index into this list in page.tsx to switch between which encounter you see*/
export const encounterList: Encounter[] = [
  {
    imageURL:
      "https://i.pinimg.com/474x/af/d2/55/afd25562aaecf0a03847a70f8fdedd7b.jpg",
    dialogue: "Hi I'm Gojo",
    answer: "abc",
  },
];
