import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Badge,
  Container,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Inkdrop">
    <Container paddingTop={[4,8]}>
      <Title>
        Mahacare Clinic <Badge>April 2021- july 2021</Badge>
      </Title>
      <P>
      Make a Designed and implemented a Profile Company website. Implemented MPOS application to regulate the sale and stock of the company products.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="http://www.mahacareclinic.com" target="_blank">
          http://www.mahacareclinic.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span> Web Browser on Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Php, Codeigniter, Mysql, Bootstrap </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/mahacare-pic1.png" alt="Inkdrop-img1" />
      <WorkImage src="/images/works/mahacare-pic2.png" alt="Inkdrop-img2" />
      <WorkImage src="/images/works/mahacare-pic3.png" alt="Inkdrop-img2" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

