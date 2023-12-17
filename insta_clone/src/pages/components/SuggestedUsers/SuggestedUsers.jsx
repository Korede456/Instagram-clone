import { Text, Flex, VStack } from "@chakra-ui/react";
import { SuggestedHeader } from "./SuggestedHeader";

export const SuggestedUsers = () => {
  return (
    <VStack py={8} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.500" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
    </VStack>
  );
};
