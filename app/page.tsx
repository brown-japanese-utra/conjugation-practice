"use client";

import {
  Center,
  Space,
  Image,
  Text,
  Grid,
  Stack,
  Container,
  TextInput,
  Group,
  Button,
  rem,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { Frame, frameList } from "./components/Frame";

export default function HomePage() {
  /* States for frame (that will be the initial question or the correct/wrong answer screen), 
  and input value for textbox */
  const [frame, setFrame] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isResultScreen, setIsResultScreen] = useState(false);

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
    if (
      inputValue == frameList[frame].hiragana_answer ||
      inputValue == frameList[frame].kanji_answer
    ) {
      setFrame(frame + 2);
    }
    // Incorrect answer (send them to the wrong answer frame)
    else {
      setFrame(frame + 1);
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
      <Stack align="center">
        <Image
          alt="character"
          src={isClient ? frameList[frame].imageURL : "./"}
        ></Image>
        <Text size="xl">
          {isClient ? frameList[frame].dialogue : "ローディング中"}
        </Text>
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
