import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>CSV Editor</Box>
        <Flex alignItems="center">
          <RouterLink to="/about">
            <Button as={Link} colorScheme="teal" variant="ghost">
              About Us
            </Button>
          </RouterLink>
          <RouterLink to="/">
            <Button as={Link} colorScheme="teal" variant="ghost">
              Home
            </Button>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
