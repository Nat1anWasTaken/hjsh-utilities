import { Button, Card, Flex, Text, Title } from "@mantine/core";

interface Tool {
  name: string;
  description: string;
  icon: string;
  href: string;
}

const availableTools = [
  {
    name: "成績計算器",
    description: "計算你的學期成績",
    icon: "calculate",
    href: "/tools/score-calculator"
  }
];

export default function ToolsSelectionPage() {
  return (
    <>
      <Title order={1}>華江高中小工具</Title>
      <Text size={"lg"}>一些可以幫你省一些工作量的小工具</Text>
      <Flex wrap={"wrap"} justify={"center"}>
        <Card padding={"xl"} withBorder>
          <Title order={4}>Test tool</Title>
          <Button></Button>
        </Card>
      </Flex>
    </>
  );
}
