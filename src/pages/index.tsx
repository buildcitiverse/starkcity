import { ReactNode } from "react";
import Header from "../components/Header";
import { Layout } from "../layouts";
import { Box, Flex, Image } from "@chakra-ui/react";
import InforCenterHome from "@/components/InforCenterHome";
import InforMeta from "@/components/InforMeta";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <Flex width={"100%"} flexDirection={"column"} height={"100vh"} overflow={"hidden"}>
            <Header />
            <Flex position="relative" width="100%" height="100%" alignItems="center">
                <Image 
                    src={"/assets/images/bgBeach.png"} 
                    alt="" 
                    width={"100%"} 
                    height={"116%"} 
                    objectFit={"cover"} 
                />
                <Image 
                    src={"/assets/images/bgleft.png"} 
                    alt="" 
                    position="absolute"
                    left="0"
                    top="-14"
                    width={"auto"} 
                    height={"113%"} 
                    objectFit={"cover"} 
                    zIndex="1"
                />
                <Box
                    position="absolute"
                    left="50%"
                    top="50%"
                    transform="translate(-50%, -50%)"
                    width="auto"
                    height="auto"
                    zIndex="2"
                >
                    <InforCenterHome />
                </Box>
                <Box 
                    position="absolute"
                    right="0"
                    transform="translateY(-50%)"
                    width="auto"
                    height="auto"
                    pr={"80px"}
                    zIndex="2"
                    top="50%"
                >
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
        revalidate: 60 * 60 * 24, // In days
    };
}

export default Index;
