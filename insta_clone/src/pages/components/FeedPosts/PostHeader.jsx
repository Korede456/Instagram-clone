import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const PostHeader = ({username, avatar}) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} alt={username} size={"sm"} />
        <Flex fontSize={"12px"} fontWeight={"bold"} gap={2}>
          {username}
          <Box color={"gray.500"}>- 1w</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"o.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};
