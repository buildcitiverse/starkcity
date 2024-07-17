import { ReactNode } from "react";
import Header from "../components/Header";
import { Layout } from "../layouts";
import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import InforCenterHome from "@/components/InforCenterHome";
import Footer from "@/components/Footer";
import InforMeta from "@/components/InforMeta";

const Index = () => {
  const displayResponesive = useBreakpointValue({ base: "block", sm: "none" });
  const displayDesktop = useBreakpointValue({ base: "none", sm: "block" });
  const heightWrapper = useBreakpointValue({ base: "auto", sm: "100vh" });

  return (
    <Flex
      width={"100%"}
      flexDirection={"column"}
      height={heightWrapper}
      overflow={"hidden"}
      backgroundImage={`url("/assets/images/bgBeach.png")`} 
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Header />
         <Flex position="relative" width="100%" mt={"80px"} flexDirection={"column"} display={displayResponesive} height="100%" justifyContent={"center"} alignItems="center" >
          <Flex mb={"40px"} justifyContent={"center"}><InforCenterHome /></Flex>
          <Flex justifyContent={"center"}><InforMeta /></Flex>
          <Image
            mt={"-235px"}
            src={"/assets/images/bgMapRes.png"}
            alt=""
            width={"100%"}
            objectFit={"cover"}
            zIndex="1"
          />
      </Flex> 
      <Flex position="relative" width="100%" height="100%" alignItems="center" display={displayDesktop}>
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
          position={"absolute"}
          left={"50%"}
          top={"46%"}
          zIndex="2"
          pr={"0px"}
          transform={"translate(-50%, -50%)"}
          display={displayResponesive}
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
