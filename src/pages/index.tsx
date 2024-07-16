import { ReactNode } from "react";
import Header from "../components/Header";
import { Layout } from "../layouts"
import { Box, Flex, Image } from "@chakra-ui/react";
import InforCenterHome from "@/components/InforCenterHome";
import InforMeta from "@/components/InforMeta";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <Flex width={"100%"} flexDirection={"column"}>
        <Header />
        <Flex position="relative" width="100%" height="auto">
          <Image src={"/assets/images/bgBeach.png"} alt="" width={"100%"} />
          <Box
            position="absolute"
            left="50%"
            top="30%"
            transform="translate(-50%, -50%)"
            width="auto"
            height="auto"
          >
            <InforCenterHome />
          </Box>
  
          <Box position="absolute" top="0" right="0" width="auto" height="100%" pr={"80px"}>
            <InforMeta />
          </Box>
        </Flex>
        <Footer />
      </Flex>
    );
};

Index.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export async function getStaticProps() {
    return {
        props: {},
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 60 * 60 * 24, // In days
    };
}

export default Index;
