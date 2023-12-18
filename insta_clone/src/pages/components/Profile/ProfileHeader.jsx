import { Avatar, AvatarGroup, Flex } from "@chakra-ui/react"

export const ProfileHeader = () => {
  return (
    <Flex gap={{base:4, sm:10}} py={10} dirextion={{base:"column", sm:"row"}} >
        <AvatarGroup
        size={{base:"xl", md:"2xl"}}
        justifySelf={"center"}
        mx={"auto"}
        >
            <Avatar name="boi_thompson" src="/profilepic.png" alt="profile pic" />

        </AvatarGroup>
    </Flex>
  )
}
