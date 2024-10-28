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
import { useState } from "react";
import { Encounter, encounterList } from "./components/Encounter";

export default function HomePage() {
  /* States for encounter (which character and dialogue you see), 
  and input value for textbox */
  const [encounter, setEncounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  /* Function for checking if the user's input matches the answer */
  const checkAnswer = () => {
    if (
      inputValue == encounterList[encounter].hiragana_answer ||
      inputValue == encounterList[encounter].kanji_answer
    ) {
      console.log("Found the right answer!");
    } else {
      console.log("Got the wrong answer!");
    }
    setInputValue("");
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
    <>
      <Container size="sm" style={{ textAlign: "center" }}>
        <Stack align="center">
          <Image
            alt="character"
            src={encounterList[0].imageURL}
            style={{
              objectFit: "contain",
            }}
            h={rem(65)}
          ></Image>
          <Text>{encounterList[0].dialogue}</Text>
          <Group>
            <TextInput
              value={inputValue}
              onChange={(event) => setInputValue(event.currentTarget.value)}
            />
            <Button onClick={checkAnswer}>Submit</Button>
          </Group>
        </Stack>
      </Container>
    </>
  );
}
