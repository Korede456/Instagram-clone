import { Link, Box, Text, Flex, VStack } from "@chakra-ui/react";
import { SuggestedHeader } from "./SuggestedHeader";
import { SuggestedUser } from "./SuggestedUser";

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
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser
        name="Dan Abranov"
        followers={1392}
        avatar='https://bit.ly/dan-abramov'
      />
      <SuggestedUser
        name="Ryan Florence"
        followers={567}
        avatar="https://bit.ly/ryan-florence"
      />
      <SuggestedUser
        name="Christian Nwanba"
        followers={759}
        avatar="https://bit.ly/code-beast"
      />

      <Box alignSelf={"start"} fontSize={12} color={"gray.500"} mt={5}>
        © 2023 Built By{" "}
        <Link
          href="https://www.youtube.com/@justthompson9987"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          Korede Thompson
        </Link>
      </Box>
    </VStack>
  );
};
