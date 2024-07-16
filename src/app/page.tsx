import { Box, Flex, Image } from "@chakra-ui/react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import InforMeta from "@/component/InforMeta";
import InforCenterHome from "@/component/InforCenterHome";

export default function Home() {
  return (
    <div>
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
      {/* <Footer /> */}
    </div>
  );
}
