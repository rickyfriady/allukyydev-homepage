import { Box, Icon } from "@chakra-ui/react";
import React from "react";
import {
  SiAndroid
} from "react-icons/si";

const skillAndroid = [
  { name: "Android studio", logo: SiAndroid, bar: 95 }
];

const SkillAndroid = () => {
  return (
    <>
      {skillAndroid.map((item, index) => (
        
        <Box
          alignSelf="center"
          alignContent={"center"}
          alignItems="center"
          justifyContent={"center"}
          justifyItems="center"
          justifySelf={"center"}
          display={"flex"}
          flexDir="column"
          key={index.toString()}
        >
          <Box
            display={"flex"}
            borderRadius={"full"}
            borderColor="white"
            bg={"gray.100"}
            w="4em"
            h="4em"
            alignSelf="center"
            alignContent={"center"}
            alignItems="center"
            justifyContent={"center"}
            justifyItems="center"
            justifySelf={"center"}
            borderWidth={2}
            my="2"
            borderStyle="solid"
          >
            
            <Icon
              as={item.logo}
              boxSize="2em"
              mx="2"
              color="black"
            />
          </Box>
          {item.name ? '' : ''}
        </Box>
      ))}
    </>
  );
};
export default SkillAndroid;