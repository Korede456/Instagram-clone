import { Avatar, Text, Flex, Button } from "@chakra-ui/react";
import { useLogout } from "../../../Hooks/useLogout";
import { useAuthStore } from "../../../Store/AuthStore";

export const SuggestedHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="boi_thompson" size={"lg"} src={authUser.profilePicURL} />
        <Text fontSize={12} fontWeight={"bold"}>
          {authUser.username}
        </Text>
      </Flex>
      <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"midium"}
        color={"blue.400"}
        cursor={"pointer"}
        onClick={handleLogout}
        isLoading={isLoggingOut}
      >
        Log out
      </Button>
    </Flex>
  );
};
