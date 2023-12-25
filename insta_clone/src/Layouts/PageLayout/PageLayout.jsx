import { Box, Flex, Spinner } from "@chakra-ui/react";
import { Sidebar } from "../../pages/components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/Firebase";
import { Navbar } from "../../pages/components/Navbar/Navbar";

export const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";

  const checkingUserIsAuth = !user && loading;
if (checkingUserIsAuth){
  return <PageLayoutSpinner />
}

  return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}>
      {/* side bar on the left of each page */}

      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* Navbar */}
      {canRenderNavbar ? <Navbar /> : null}
      {/* page content */}

      <Box
        flex={1}
        w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
};
 const PageLayoutSpinner = () => {
  return (
    <Flex flexDir="column" h={"100vh"} alignItems={"center"}  justifyContent={"center"}>
      <Spinner size="xl" />
    </Flex>
  )
 }