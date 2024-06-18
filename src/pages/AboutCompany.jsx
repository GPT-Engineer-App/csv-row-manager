import React from "react";
import { Container, VStack, Text } from "@chakra-ui/react";

const AboutCompany = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">About the Company</Text>
        <Text>Our company is dedicated to providing the best CSV editing tools available. We strive for excellence in every aspect of our business.</Text>
      </VStack>
    </Container>
  );
};

export default AboutCompany;
