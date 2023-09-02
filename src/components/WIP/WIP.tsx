import { Text } from "components/Text";
import { Flex } from "..";
import { Image } from "components/Image";

const WIP = () => {
  return (
    <Flex flexDirection="column" gap={1} my={12}>
      <Image src="/road-barrier.png" width={64} height={64} />
      <Text variant="body2" fontWeight={700}>
        Work in progress...
      </Text>
    </Flex>
  );
};

export default WIP;
export { WIP };
