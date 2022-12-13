import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Notes React App">
    <Container paddingTop={[4, 8]}>
      <Title>
        Notes React App <Badge>2022</Badge>
      </Title>
      <P>Make a Note App with React js and ui framework with Material UI</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://notes-react-mui.vercel.app/" target="_blank">
            https://notes-react-mui.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span> Web Browser on Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React js, Material Ui, Styled-componnets, Node js, Firebase{' '}
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/note-react-mui.png" alt="note-react-mui1" />
      <WorkImage
        src="/images/works/note-react-mui2.png"
        alt="note-react-mui2"
      />
      <WorkImage
        src="/images/works/note-react-mui3.png"
        alt="note-react-mui2"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
