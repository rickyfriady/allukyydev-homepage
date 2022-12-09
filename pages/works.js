import { Container, SimpleGrid, Heading, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Hero from "../components/hero";

import thumbMahacare from '../public/images/works/mahacare-pic1.png'
import thumbSumakali from '../public/images/works/sumakali-pic1.png'
import  thumbKashima  from "../public/images/works/Sistem-Keuangan-Kas-Himalkom.png";
import  thumbRepounri  from "../public/images/works/Repository-Skripsi-1.png";

const Works = () => (
  <Layout title="Works">
    <Container maxW='container.full'>
    <Hero
          title="Works"
          subtitle="This is my work and projects"
        />

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="mahacare" title="Mahacare Clinic" thumbnail={thumbMahacare}>
            Make a Designed and implemented a Profile Company website
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="sumakali"
            title="Sumatera Kalimantan Jaya"
            thumbnail={thumbSumakali}
          >
            Make a Designed and implemented a Profile Company website
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.3}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.4}>
          <WorkGridItem id="kashima" title="Kas Himalkom" thumbnail={thumbKashima}>
            Create a web app for monitor cash in the concept of accounting
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="repounri" title="Repository SI Universitas Riau" thumbnail={thumbRepounri}>
            Create a web app for repository sistem with K-Means clustering method
            </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
