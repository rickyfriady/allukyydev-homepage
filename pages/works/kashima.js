import { Badge, Container, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Kas Himalkom">
    <Container paddingTop={[4, 8]}>
      <Title>
        Kas Himalkom <Badge>2018</Badge>
      </Title>
      <P>
        Create a web app to monitor cash in the concept of accounting logic
        business in order to monitor all cash fund budgets collected by each
        member of HIMPUNAN MAHASISWA ILMU KOMPUTER.
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

      <WorkImage
        src="/images/works/Sistem-Keuangan-Kas-Himalkom.png"
        alt="kashima-img1"
      />
      <WorkImage
        src="/images/works/Sistem-Keuangan-Kas-Himalkom-2.png"
        alt="kashima-img2"
      />
      <WorkImage
        src="/images/works/Sistem-Keuangan-Kas-Himalkom-3.png"
        alt="kashima-img2"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
