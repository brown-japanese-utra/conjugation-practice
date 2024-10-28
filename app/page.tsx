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
    if (inputValue == encounterList[encounter].answer) {
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
              width: "100%",
              height: "70%",
              maxWidth: "400px",
              maxHeight: "500px",
              objectFit: "contain",
            }}
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
