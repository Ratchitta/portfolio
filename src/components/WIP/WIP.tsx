import { Box } from "@mui/material";
import { Text } from "@components/Text";
import { Flex } from "..";
import { Image } from "@components/Image";

const WIP = () => {
  return (
    <Flex>
      <Image src="/public/road-barrier.png" />
      <Text>Work in progress...</Text>
    </Flex>
  );
};

export default WIP;
