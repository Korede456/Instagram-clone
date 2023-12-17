import { Avatar, Text, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="asaprogrammer" size={"lg"} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"}>
          asaprogrammer
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to="/auth"
        fontSize={14}
        fontWeight={"midium"}
        color={"blue.400"}
        style={{
          textDecoration: "none",
        }}
        cursor={"pointer"}
      >
        Log out
      </Link>
    </Flex>
  );
};
