"use client";

import { Center, Space, Image, Text, Grid, Stack, Container, TextInput, Group, Button, rem } from "@mantine/core";
import { Suspense, useEffect, useState } from "react";
import { Frame, frameList } from "../components/Frame";
import { useSearchParams } from "next/navigation";

function StoryStuff() {
  /* States for frame (that will be the initial question or the correct/wrong answer screen), 
  and input value for textbox */
  const searchParams = useSearchParams();
  console.log("got params");
  const initialFrame = parseInt(searchParams.get("frame") ?? "0");
  const [frame, setFrame] = useState(initialFrame);
  const [inputValue, setInputValue] = useState("");
  const [isResultScreen, setIsResultScreen] = useState(false);
  const [score, setScore] = useState(0);
  const [attemptsLeft, setAttempts] = useState(3);

  // Check if we're client-side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  /* 
    Function for handling button click. Behavior depends on whether you're answering
    the initial question (frame 0/3/6, etc.) or seeing the result of the answer
  */
  const handleClick = () => {
    // If it's the result screen, make the button bring you to the initial question (wrong)
    // Or make the button send you to the next question (right)

    if (isResultScreen) {
      setIsResultScreen(false);

      // Sends you back to the initial question if you got the question wrong
      if (frameList[frame].type == "wrong") {
        setFrame(frame - 1);
      }
      // Got the question correct
      else {
        setFrame(frame + 1);
      }
      return;
    }

    // Otherwise, the button acts as a submit button and evaluates the user input

    // You got the question correct (send them to the right answer frame)
    if (inputValue == frameList[frame].hiragana_answer || inputValue == frameList[frame].kanji_answer) {
      setFrame(frame + 2);
      setScore(score + calculateScore());
      setAttempts(3);
    }
    // Incorrect answer (send them to the wrong answer frame)
    else {
      setFrame(frame + 1);
      setAttempts(Math.max(attemptsLeft - 1, 0));
    }

    setIsResultScreen(true); // Go to result screen upon submission
    setInputValue("");
  };

  const displayButtonText = () => {
    switch (frameList[frame].type) {
      case "wrong":
        return "Try Again";
      case "right":
        return "Next";
      case "question":
        return "Submit";
    }
  };

  function attemptText(): string {
    if (frame % 3 != 1) return "";
    let answer = frameList[frame - 1].prompt! + frameList[frame - 1].hiragana_answer!;
    switch (attemptsLeft) {
      case 0:
        return "Oh no! You ran out of tries, but luckily Bobo found the right answer: " + answer + "！ がんばってね！";
      case 1:
        return "You have 1 try left!";
      default:
        return "You have " + attemptsLeft + " tries left!";
    }
  }

  function calculateScore(): number {
    switch (attemptsLeft) {
      case 3:
        return 1000;
      case 2:
        return 500;
      case 1:
        return 100;
      default:
        return 0;
    }
  }

  /* Structure of the page:
  Container
    Stack
      Image
      Text
      Group
        Input
        Button
  */
  return (
    <Container size="sm" style={{ textAlign: "center" }}>
      <Text size="xl" ta="right">
        Score: {score}
      </Text>
      <Stack align="center">
        <Image fit="contain" alt="character" src={isClient ? frameList[frame].imageURL : "./"}></Image>
        <Text size="xl">{isClient ? frameList[frame].dialogue + " " + attemptText() : "ローディング中"}</Text>
        <Group>
          <Text size="xl" display={isResultScreen ? "none" : ""}>
            {frameList[frame].prompt}
          </Text>
          <TextInput
            value={isClient ? inputValue : "ローディング中"}
            onChange={(event) => setInputValue(event.currentTarget.value)}
            display={isResultScreen ? "none" : ""}
          />
          <Button onClick={handleClick}>{displayButtonText()}</Button>
        </Group>
      </Stack>
    </Container>
  );
}

export default function Story() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StoryStuff />
    </Suspense>
  );
}
