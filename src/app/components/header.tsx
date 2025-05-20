"use client";

import { ActionIcon, Flex, Group, Text, useMantineColorScheme } from "@mantine/core";

export default function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Flex p={"md"} h={"100%"} w={"100%"} align={"center"} justify={"space-between"}>
      <Group gap={"xs"}>
        <Text size="xl">華江高中小工具</Text>
      </Group>
      <Group gap={"xs"}>
        <ActionIcon variant={"default"} size={"lg"} title={"Github"} component={"a"} href={"https://github.com/Nat1anWasTaken/hjsh-utilities"}>
          <span className={"material-symbols-outlined"}>code</span>
        </ActionIcon>
        <ActionIcon variant={"default"} size={"lg"} onClick={() => toggleColorScheme()} title={"Toggle color scheme"}>
          <span className={"material-symbols-outlined"}>{colorScheme == "light" ? "dark_mode" : "light_mode"}</span>
        </ActionIcon>
      </Group>
    </Flex>
  );
}
