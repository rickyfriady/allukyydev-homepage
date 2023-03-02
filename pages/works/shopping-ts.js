import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Badge,
  Container,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const ShoppingTs = () => (
  <Layout title=" Shopping Cart React App">
    <Container paddingTop={[4, 8]}>
      <Title>
        Shopping Cart React App <Badge>2023</Badge>
      </Title>
      <P>
        Make a Shopping Cart App with React Typescript and ui framework with
        Tailwind
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://shoppingcart-react-ts.vercel.app/"
            target="_blank"
          >
            https://notes-react-mui.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span> Web Browser on Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Typescript + vite, Tailwind, Node js,</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/shoppingcart-react-ts-4.webp"
        alt="note-react-mui1"
      />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/works/shoppingcart-react-ts-2.png"
          alt="note-react-mui2"
        />
        <WorkImage
          src="/images/works/shoppingcart-react-ts-3.png"
          alt="note-react-mui2"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default ShoppingTs
export { getServerSideProps } from '../../components/chakra'
