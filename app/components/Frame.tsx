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
  /* STORY ONE (BOBO GOES TO SCHOOL): おとす、あける、おちる、わく、わかす
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
  /* Bobo has had a long day. They want some nice tea. Help them boil some water */
  {
    imageURL: "frames/frame-12.jpg",
    dialogue:
      "Bobo has had a long day. They want to have some tea before heading to bed. Help them boil some water.",
    hiragana_answer: "わかします",
    kanji_answer: "沸かします",
    prompt: "お湯を",
    type: "question",
  },
  /* You got it wrong. Bobo thinks it's something else */
  {
    imageURL: "frames/frame-13.jpg",
    dialogue: "Bobo doesn't think that's quite right. Try again.",
    type: "wrong",
  },
  /* You got it right. Bobo can finally go to bed! */
  {
    imageURL: "frames/frame-1.jpg",
    dialogue:
      "Great work! Bobo enjoys their hot tea and can finally go to bed.",
    type: "right",
  },
  /* STORY TWO (BOBO PLAYS A VIDEO GAME): つける、たすける、あがる、きこえる、けす*/
  /* Bobo wants to play a game, help them turn on the computer */
  {
    imageURL: "frames/frame-3.jpg",
    dialogue:
      "Bobo wants to play a new video game they bought. Help Bobo turn on their computer.",
    hiragana_answer: "つけます",
    kanji_answer: "点けます",
    prompt: "コンピューターを",
    type: "question",
  },
  /* You got it wrong. The computer is still off */
  {
    imageURL: "frames/frame-2-1",
    dialogue: "Bobo's computer didn't turn on. Please try again.",
    type: "wrong",
  },
  /* You got it right. Bobo's computer is on */
  {
    imageURL: "frames/frame-2-2.jpg",
    dialogue:
      "Great work! Bobo enjoys their hot tea and can finally go to bed.",
    type: "right",
  },
  /* Bobo wants to save people to become a hero */
  {
    imageURL: "frames/frame-2-3.jpg",
    dialogue:
      "Bobo is now in the game. They want to go out and save people to start their journey as a hero. Help Bobo save people",
    hiragana_answer: "たすけます",
    kanji_answer: "助けます",
    prompt: "ひとを",
    type: "question",
  },
  /* You got it wrong. Bobo wasn't able to find anyone to rescue */
  {
    imageURL: "frames/frame-2-4.jpg",
    dialogue:
      "Oh no! You were incorrect. Bobo will be able to become a hero soon though!",
    type: "wrong",
  },
  /* You got it right. Bobo saves nearby villagers and gets applauded as a hero */
  {
    imageURL: "frames/frame-2-5.jpg",
    dialogue:
      "Amazing! Bobo was able to save nearby villagers and get applauded as a hero.",
    type: "right",
  },
  /* Help Bobo level up */
  {
    imageURL: "frames/frame-2-6.jpg",
    dialogue:
      "Unlike other protagonists, Bobo isn't able to do solo leveling. The game requires you to use your knowledge of transitive and intransitive verbs to say, 'the level rises' before you can fully level up (a very educational game)",
    hiragana_answer: "あがります",
    kanji_answer: "上がります",
    prompt: "レベルが",
    type: "question",
  },
  /* You got it wrong. Bobo couldn't level up */
  {
    imageURL: "frames/frame-2-4.jpg",
    dialogue: "Bobo failed to level up :(",
    type: "wrong",
  },
  /* You got it right. Bobo succesfully leveled up! */
  {
    imageURL: "frames/frame-2-8.jpg",
    dialogue: "Spot on! Bobo was able to level up :D",
    type: "right",
  },
  /* Help Bobo defeat the demon king */
  {
    imageURL: "frames/frame-0.jpg",
    dialogue:
      "Bobo is up against the final boss, the Demon King. They're too scared to fight him, but the villagers that Bobo saved earlier are cheering them on. Help Bobo be able to hear their voices.",
    hiragana_answer: "きこえます",
    kanji_answer: "聞こえます",
    prompt: "こえが",
    type: "question",
  },
  /* You got it wrong. The Demon King attacks Bobo */
  {
    imageURL: "frames/frame-0.jpg",
    dialogue:
      "Bobo isn't able to muster up the courage to fight back, so the Demon King is able to land a hit on them.",
    type: "wrong",
  },
  /* You got it right. Bobo gets fired up to fight the Demon King */
  {
    imageURL: "frames/frame-0.jpg",
    dialogue:
      "Incredible! Bobo was able to hear the villagers cheering them on, and is now fired up to fight the Demon King.",
    type: "right",
  },
  /* Turn off the light for Bobo so they can sleep */
  {
    imageURL: "frames/frame-0.jpg",
    dialogue:
      "It looks like Bobo fell asleep as they were playing their game. But, the lights are still on, which make wake up Bobo. Help turn off the lights",
    hiragana_answer: "けします",
    kanji_answer: "消します",
    prompt: "電気を",
    type: "question",
  },
  /* You got it wrong. Bobo wakes up */
  {
    imageURL: "frames/frame-0.jpg",
    dialogue:
      "You didn't turn off the lights correctly. Bobo groggily wakes up and tries to go back to sleep.",
    type: "wrong",
  },
  /* You got it right. Bobo gets fired up to fight the Demon King */
  {
    imageURL: "frames/frame-0.jpg",
    dialogue:
      "Well done! You turned the lights off and Bobo is able to sleep peacefully",
    type: "right",
  },
];
