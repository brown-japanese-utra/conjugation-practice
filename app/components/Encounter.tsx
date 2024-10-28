/* This interface will be used to separate the different parts of the encounter out */
export interface Encounter {
  imageURL: string;
  dialogue: string;
  hiragana_answer: string;
  kanji_answer: string;
}

/* Index into this list in page.tsx to switch between which encounter you see*/
export const encounterList: Encounter[] = [
  /* Goku */
  {
    imageURL:
      "https://dragonball.guru/wp-content/uploads/2021/03/goku-profile-e1616173641804-400x400.png",
    dialogue:
      "Goku needs your help to fight Frieza! The door only responds to polite speech, but Goku was raised in the mountains and forgot how to speak politely!! The password is “the door opens” What do you say?!?!?!?",
    hiragana_answer: "ドアがあきます",
    kanji_answer: "ドアが開きます",
  },
  /* Oni */
  {
    imageURL:
      "https://i.pinimg.com/236x/a6/2b/2e/a62b2eb7169e480ee9ad67f8aa1d8568.jpg",
    dialogue:
      "You have now arrived in Frieza's domain, but while Goku fights Frieza in his domain: Emperor's Glory, an oni appears to block your pathway. The oni is going to make an attack, but you see an opening: the sky turns dark and SHENRON IS SUMMONED !?>!?!?!?!?!? Wish now to destroy the oni's club! but beware, you must be polite because shenron has higher social status than you",
    hiragana_answer: "クラブをこわしてください",
    kanji_answer: "クラブを壊してください",
  },
];
