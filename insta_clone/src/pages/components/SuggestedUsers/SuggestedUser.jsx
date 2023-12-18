import { Avatar, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

export const SuggestedUser = ({ name, followers, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const handleFollow = () => {
    if (isFollowed === false) {
      setIsFollowed(true);
    } else {
      setIsFollowed(false);
    }
  };
  return (
    <Flex w={"full"} alignItems={"center"} justifyContent={"space-between"}>
      <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
        <Avatar name={name} src={avatar} />
        <VStack alignItems={"start"} spacing={2}>
          <Text fontSize={12} fontWeight={"bold"}>
            {name}
          </Text>
          <Text fontSize={11} color={"gray.500"}>
            {followers} followers
          </Text>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        fontWeight={"midium"}
        color={"blue.400"}
        cursor={"pointer"}
        p={0}
        bg={"transparent"}
        height={"max-content"}
        _hover={{ color: "white" }}
        onClick={handleFollow}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};
