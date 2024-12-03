"use client";

import {
  Button,
  Card,
  Group,
  Image,
  Text,
  Badge,
  Center,
  Container,
} from "@mantine/core";
import Link from "next/link";

export default function HomePage() {
  return (
    <Center>
      <Container size="lg">
        <Link
          href={{ pathname: "/story", query: { frame: 0 } }}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Card shadow="sm" padding="xl">
            <Card.Section>
              <Image src="frames/frame-1-5.jpg" h={160} alt="No way!" />
            </Card.Section>

            <Text fw={500} size="lg" mt="md" td="none">
              Bobo&apos;s Day at School
            </Text>
          </Card>
        </Link>
        <Link
          href={{ pathname: "/story", query: { frame: 15 } }}
          style={{ textDecoration: "none" }}
        >
          <Card shadow="sm" padding="xl">
            <Card.Section>
              <Image src="frames/frame-2-3.jpg" h={160} alt="No way!" />
            </Card.Section>

            <Text fw={500} size="lg" mt="md">
              Bobo Plays a Video Game
            </Text>
          </Card>
        </Link>
        <Link
          href={{ pathname: "/story", query: { frame: 30 } }}
          style={{ textDecoration: "none" }}
        >
          <Card shadow="sm" padding="xl">
            <Card.Section>
              <Image src="frames/frame-3-10.jpg" h={160} alt="No way!" />
            </Card.Section>

            <Text fw={500} size="lg" mt="md">
              Bobo Does a Relay Race
            </Text>
          </Card>
        </Link>
      </Container>
    </Center>
  );
}
