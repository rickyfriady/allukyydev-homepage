import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ricki homepage" />
        <meta name="author" content="Ricki Friadi" />
        <meta name="author" content="Allukydev" />
        <link rel="cat-icon" href="cat-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Ricki Friadi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@allukyyDev_" />
        <meta name="twitter:creator" content="@allukyyDev_" />
        <meta property="og:site_name" content="Ricki Friadi" />
        <meta name="og:title" content="Ricki Friadi" />
        <meta property="og:type" content="website" />
        <title>Ricki Friadi - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW='container.md' pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
