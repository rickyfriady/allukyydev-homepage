import React from 'react'
import { Container, Heading, Highlight, SimpleGrid,Text, Center} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Hero from "../components/hero";
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import Skills from "../components/skills";
import SkillAndroid from "../components/skillandroid";



const About = () => (
  <Layout title="About Me">
  <Container maxW='container.full'>
  <Hero
        title="About Me"
        subtitle="This is all Information about me"
      />
  </Container>
  <Container  maxW='container.sm'>
  <Section delay={0.1} >
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2016 - 2016</BioYear>
          <Highlight query='Software Engineer' styles={{ px: '1', py: '1', bg: 'gray.300' }}>
          Student Software Engineer at Senior High School SMK Negeri 7 Pekanbaru
          </Highlight>
        </BioSection>
        <BioSection>
          <BioYear>2016 - 2020</BioYear>
          <Highlight query='Information System' styles={{ px: '1', py: '1', bg: 'gray.300' }}>
          Bachelor&apos;s Degree Information System Major at Universitas Riau
          </Highlight>
        </BioSection>
        </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Skill
        </Heading>
        <Center>
        <Heading marginBottom={[4,8]} >
        What can I do?
        </Heading>
        </Center>
      </Section>

            <Section delay={0.3}>
            <Heading as="h5" size={["lg","lg","md"]} paddingBottom={4} textDecoration="underline" textDecorationColor="teal.300" textDecorationThickness={4}>
              Web Development
            </Heading>
            <Text>I&apos;m proficient in building front-end apps using React and NextJS, and back-end (REST APIs) using ExpressJS and Laravel. The live website would be seamless and SEO optimized for better discovery!</Text>
              <SimpleGrid columns={5} spacing={2} paddingY={[2,4]}>
                <Skills/>
              </SimpleGrid>
            </Section>

            <Section delay={0.4}>
            <Heading as="h5" size={["lg","lg","md"]}  paddingBottom={4} textDecoration="underline" textDecorationColor="teal.300" textDecorationThickness={4}>
              Mobile Development
            </Heading>
              <Text>I&apos;m littel experienced in mobile app development using the Android Studio  for various app purposes in collage project.</Text>
              <SimpleGrid columns={5} spacing={2} paddingY={[2,4]}>
                <SkillAndroid/>
              </SimpleGrid>
            </Section>
  </Container>
  </Layout>
)

export default About
export { getServerSideProps } from '../components/chakra'