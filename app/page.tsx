"use client";

import { Button } from "@mantine/core";
import Link from "next/link";

export default function HomePage() {
  return (
    <Button.Group>
      <Link href={{ pathname: "/story", query: { frame: 0 } }}>
        <Button>Story 1</Button>
      </Link>
      <Link href={{ pathname: "/story", query: { frame: 15 } }}>
        <Button>Story 2</Button>
      </Link>
    </Button.Group>
  );
}
