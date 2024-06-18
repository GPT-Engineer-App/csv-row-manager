import React from "react";
import { Container, VStack, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">About Us</Text>
        <Text>Welcome to our CSV Editor application. Our mission is to provide an easy-to-use tool for editing CSV files directly in your browser.</Text>
      </VStack>
    </Container>
  );
};

export default About;
