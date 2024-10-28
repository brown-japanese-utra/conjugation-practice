/* This interface will be used to separate the different parts of the encounter out */
export interface Encounter {
  imageURL: string;
  dialogue: string;
  hiragana_answer: string;
  kanji_answer: string;
}

/* Index into this list in page.tsx to switch between which encounter you see*/
export const encounterList: Encounter[] = [
  {
    imageURL:
      "https://dragonball.guru/wp-content/uploads/2021/03/goku-profile-e1616173641804-400x400.png",
    dialogue:
      "Goku needs your help to fight Frieza! The door only responds to polite speech, but Goku was raised in the mountains and forgot how to speak politely!! The password is “the door opens” What do you say?!?!?!?",
    hiragana_answer: "ドアがあきます",
    kanji_answer: "ドアが開きます",
  },
];
