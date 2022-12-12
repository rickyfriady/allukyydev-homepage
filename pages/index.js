import NextLink from 'next/link'
import {
  Grid,
  GridItem,
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridonItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub,IoLogoLinkedin,IoMailOutline } from 'react-icons/io5'
import rickiCv from "../public/images/links/ricki-cv.jpg";
import Image from 'next/image'
import TypedText from '../components/TypedText'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})


const Home = () => (
  <Layout>
    <Container maxW='container.md'>

      <Box display={{ md: 'flex' }} py='8' >
        <Box flexGrow={1} >
          <Heading as="h2" variant="page-title">
            Ricki Friadi
          </Heading>
          <p>Full Stack developer ( Web Dev / Mobile Dev )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="150px"
            h="150px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/rickifriadi.jpg"
              alt="Profile image"
              borderRadius="full"
              width='200%'
              height='200%'
              objectFit='cover'
            />
          </Box>
        </Box>
      </Box>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >          
            <TypedText/>
        
      </Box>
</Container>

<Container  maxW='container.sm'>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Summary
        </Heading>
        <Paragraph>
        I&apos;m a software developer with very passionate about technology and computers. Graduated with a Bachelors Degree of Information System Major at Universitas Riau. I am reliable, can work in a team, and can learn quickly my interests are in frontend development or backend development. In my free time, I enjoy music, gaming, and reading. As well, I love to travel and see new places and meet new people.{' '}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in pekanbaru, Riau, indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the Bachelor&apos;s Degree in the Graduate of Information System Major at Universitas Riau with a 3.69 GPA
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Sosial Media
        </Heading>
        <Grid textAlign="center" templateColumns='repeat(2, 1fr)' gap={2} paddingBottom={6}>
          <GridItem  h='10'>
          <Link href="https://github.com/rickyfriady" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @rickyfriady
              </Button>
            </Link>
          </GridItem>
          <GridItem  h='10'>
          <Link href="https://twitter.com/allukyyDev_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @allukyyDev_
              </Button>
            </Link>
          </GridItem>
          <GridItem  h='10'>
          <Link href="https://instagram.com/rickyfrdy" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @rickyfrdy
              </Button>
            </Link>
          </GridItem>
          <GridItem  h='10'>
          <Link href="https://www.linkedin.com/in/rickifriadi/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @rickifriadi
              </Button>
            </Link>
          </GridItem>
        </Grid>


        <SimpleGrid columns={[1, null, 2]} gap={6} paddingTop={[4,8]}>
          <GridonItem
            href="https://drive.google.com/file/d/1VsCBpIQMnBdyvfXV4FKqypjfX_IXn1JU/view?usp=sharing"
            title="My Curriculum Vitae"
            thumbnail={rickiCv}
          />
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="mailto:friadi.ricki@gmail.com" passHref scroll={false}>
            <Button variant="ghost"
        colorScheme="teal"
        leftIcon={<IoMailOutline/>}>
              Contact Me
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
