import { Box } from '@chakra-ui/react'
const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      {/* <FooterLink href="mailto:friadi.ricki@gmail.com" name="Contact Me"/> */}
      &copy; {new Date().getFullYear()} Ricki Friadi. All Rights Reserved.
    </Box>
  )
}

export default Footer
