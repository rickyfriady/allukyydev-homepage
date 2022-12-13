import {
  Container,
  Badge,
  List,
  ListItem
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Repository SI Unri">
    <Container paddingTop={[4,8]}>
      <Title>
      Repository SI Universitas Riau <Badge>2019</Badge>
      </Title>
      <P>
      Create a web app for repository sistem with K-Means clustering method in order to make it easier to find out the similarity of the thesis to be submitted with the thesis in the repository of the riau university campus.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span> Web Browser on Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Php, Codeigniter, Mysql, Bootstrap </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Repository-Skripsi-1.png" alt="repounri-img1" />
      <WorkImage src="/images/works/Repository-Skripsi-2.png" alt="repounri-img2" />
      <WorkImage src="/images/works/Repository-Skripsi-3.png" alt="repounri-img2" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
