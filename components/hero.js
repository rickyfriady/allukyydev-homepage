import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";
import Section from "./section";

const Hero = ({ title = "Title", subtitle }) => {
  return (
    <Section >
      <VStack  marginY={[4,8]}>
        <Heading as="h1" textDecoration="underline" textDecorationColor="teal.300" textDecorationThickness={4}>{title}</Heading>
        {subtitle ? (
          <Text
            fontSize={["lg", "xl"]}
            maxW="lg"
            textAlign="center"
          >
            {subtitle}
          </Text>
        ) : undefined}
      </VStack>
    </Section>
  );
};

export default Hero;