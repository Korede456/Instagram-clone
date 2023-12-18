import { Avatar, Flex, Text, VStack } from "@chakra-ui/react";

export const SuggestedUser = ({ name, followers, avatar }) => {
  return (
    <Flex w={"full"} alignItems={"center"} justifyContent={"space-between"}>
      <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
        <Avatar name={name} src={avatar} />
        <VStack alignItems={"start"}>
          <Text fontSize={14} fontWeight={"bold"}>
            {name}
          </Text>
          <Text fontSize={12} color={"gray.500"}>{followers} followers</Text>
        </VStack>
      </Flex>
      <Text
        fontSize={14}
        fontWeight={"midium"}
        color={"blue.400"}
        cursor={"pointer"}
      >
        Follow
      </Text>
    </Flex>
  );
};
