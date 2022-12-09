import { Box, Icon} from "@chakra-ui/react";
import React from "react";
import { FaLaravel, FaPhp } from "react-icons/fa";
import {
  SiGraphql,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiExpress,
  SiComposer
} from "react-icons/si";

const skill = [
  { name: "HTML", logo: SiHtml5, bar: 95 },
  { name: "CSS", logo: SiCss3, bar: 95 },
  { name: "Javascript", logo: SiJavascript, bar: 95 },
  { name: "PHP", logo: FaPhp, bar: 95 },
  { name: "Composer", logo: SiComposer, bar: 95 },
  { name: "MYSQL", logo: SiMysql, bar: 92 },
  { name: "Laravel", logo: FaLaravel, bar: 89 },
  { name: "NodeJs", logo: SiNodedotjs, bar: 80 },
  { name: "React", logo: SiReact, bar: 72 },
  { name: "MongoDb", logo: SiMongodb, bar: 90 },
  { name: "Express", logo: SiExpress, bar: 90 },
  { name: "GraphQL", logo: SiGraphql, bar: 73 },
  { name: "PostgreSQL", logo: SiPostgresql, bar: 80 },
  { name: "Typescript", logo: SiTypescript, bar: 80 },
];

const Skills = () => {
  return (
    <>
      {skill.map((item, index) => (
        
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
            flexWrap={"wrap"}
            borderRadius={"sm"}
            borderColor="white"
            bg={"gray.100"}
            w="3.5em"
            h="3.5em"
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
              color={"black"}
            />
          </Box>
          {item.name ? '' : ''}
        </Box>
      ))}
    </>
  );
};
export default Skills;