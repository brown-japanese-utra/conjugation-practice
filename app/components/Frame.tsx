/* This interface will be used to separate the different parts of the frame out */
export interface Frame {
  imageURL: string;
  dialogue: string;
  hiragana_answer?: string;
  kanji_answer?: string;
  prompt?: string;
  type: string;
}

/* Index into this list in page.tsx to switch between which frame you see*/
export const frameList: Frame[] = [
  /* Bobo is sleeping. Wake them up! */
  {
    imageURL: "frames/frame-0.jpg",
    dialogue:
      "It's 7 AM, time for Bobo to wake up! They fell asleep holding their phone. Help drop the phone to wake up Bobo! You should conjugate the verb in the present tense polite form!",
    hiragana_answer: "おとします",
    kanji_answer: "落とします",
    prompt: "スマホを",
    type: "question",
  },
  /* You got it wrong. Bobo stays asleep */
  {
    imageURL: "frames/frame-1.jpg",
    dialogue:
      "Oh no, Bobo didn't wake up! Think carefully, or Bobo may never get to school!",
    type: "wrong",
  },
  /* You got it right. Bo has woken up! */
  {
    imageURL: "frames/frame-2.jpg",
    dialogue:
      "Alright, it's time to get out of bed. It'll be another great day at 棒人間高校 today! Bobo gets ready for class.",
    type: "right",
  },
  /* Bobo needs your help opening the door */
  {
    imageURL: "frames/frame-3.jpg",
    dialogue:
      "It's time to leave, but Bobo forgot how to open their door. They always get so confused with how it works! Help Bobo open the door by conjugating a verb in present polite form.",
    hiragana_answer: "あけます",
    kanji_answer: "開けます",
    prompt: "ドアを",
    type: "question",
  },
  /* You got it wrong. Bobo runs into the door */
  {
    imageURL: "frames/frame-4.jpg",
    dialogue:
      "Whoops! Bobo ran straight into the door... with another attempt, you can save them!",
    type: "wrong",
  },
  /* You got it right. Bobo is able to leave! */
  {
    imageURL: "frames/frame-5.jpg",
    dialogue:
      "Bobo made it out of their house! They're looking forward to the school day.",
    type: "right",
  },
  /* Bobo is talking to their friend about how how their phone fell today */
  {
    imageURL: "frames/frame-6.jpg",
    dialogue:
      'Bobo is talking to their friend at school about how their phone fell on them this morning. Bobo is studying abroad, so they need some help remembering how to say "the phone fell" Conjugate the verb in past tense polite form!',
    hiragana_answer: "おちました",
    kanji_answer: "落ちました",
    prompt: "スマホが",
    type: "question",
  },
  /* You got it wrong. Bobo thinks it must be something else */
  {
    imageURL: "frames/frame-7.jpg",
    dialogue: "Bobo doesn't think that's quite right. Give it another try.",
    type: "wrong",
  },
  /* You got it right. Bobo succesfully conjugated the verb */
  {
    imageURL: "frames/frame-8.jpg",
    dialogue: "Great work! Bobo avoided conjugating the verb incorrectly.",
    type: "right",
  },
  /* Bobo is taking a test and the question is very specific */
  {
    imageURL: "frames/frame-9.jpg",
    dialogue:
      'Bobo has to take a test, and one of questions happens to be your speciality -- transtive and intransitive verbs! Help Bobo write, "the water boils" in present polite form.',
    hiragana_answer: "わきます",
    kanji_answer: "わきます",
    prompt: "お湯が",
    type: "question",
  },
  /* You got it wrong. Bobo thinks it's something else */
  {
    imageURL: "frames/frame-10.jpg",
    dialogue: "Bobo doesn't think that's quite right. Give it another shot.",
    type: "wrong",
  },
  /* You got it right. Bobo will get the question correct now */
  {
    imageURL: "frames/frame-11.jpg",
    dialogue: "Awesome! Bobo got the question correct!",
    type: "right",
  },
];
