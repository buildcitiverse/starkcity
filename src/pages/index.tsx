import { ReactNode, useState, useEffect } from "react";
import Header from "../components/Header";
import { Layout } from "../layouts";
import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import InforCenterHome from "../components/InforCenterHome";
import Footer from "../components/Footer";
import InforMeta from "../components/InforMeta";
import { Meta } from "../containers/Meta";
// import ModalInstall from "../components/ModalNoti/ModalInstall";
import { useRouter } from "next/router";
import { useAccount, useConnect } from "@starknet-react/core";
import ModalStarknet from "../components/ModalNoti/ModalStarknet";
import ModalInstall from "../components/ModalNoti/ModalInstall";

const Index = () => {
  const displayResponesive = useBreakpointValue({ base: "block", md: "none" });
  const displayDesktop = useBreakpointValue({ base: "none", md: "block" });
  const heightWrapper = useBreakpointValue({ base: "auto", md: "100vh" });
  const mtRes = useBreakpointValue({ base: "110px", sm: "81px" });
  // const widthMapRes = useBreakpointValue({ base: "110px", sm: "81px" });
  const [showInstall, setShowInstall] = useState(false);
  const [showInstallStarknet, setShowInstallStarknet] = useState(false);
  const router = useRouter();
  const { connect, connectors } = useConnect();
  const { isConnected, chainId, address } = useAccount();

  const argentConnector = connectors.find(
    (connector) => connector.id === "argentX"
  );

  const braavosConnector = connectors.find(
    (connector) => connector.id === "braavos"
  );

  const handleOnQuestionInstall = () => {
    setShowInstall(true);
  };

  const handleActionYes = () => {
    setShowInstallStarknet(true);
  };

  const handleActionNo = () => {
    setShowInstall(false);
  };

  const handleShowModalStarknet = () => {
    setShowInstallStarknet(true);
  };

  const handleClickBravoos = async () => {
    if (argentConnector?.available()) {
      await connect({ connector: braavosConnector });
    } else {
      router.push("https://braavos.app/");
    }
  };

  const handleClickAgrent = async () => {
    if (argentConnector?.available()) {
      await connect({ connector: argentConnector });
    } else {
      router.push("https://www.argent.xyz/argent-x/");
    }
  };

  useEffect(() => {
    const switchChain = async () => {
      if (isConnected) {
        await window.starknet.request({
          type: "wallet_switchStarknetChain",
          params: {
            chainId: "SN_SEPOLIA",
          },
        });
      }
    };
    switchChain();
  }, [isConnected]);

  useEffect(() => {
    const redirectToExplorer = async () => {
      if (isConnected && chainId === BigInt("393402133025997798000961")) {
        setTimeout(() => {
          router.push("/explorer");
        }, 1000);
      }
      if (address) {
        localStorage.setItem("userAddress", address);
      }
    };
    redirectToExplorer();
  }, [isConnected, router, chainId]);

  return (
    <>
      <Meta
        title={"City Explorer"}
        description={
          "A virtual city inside Citiverse with 50+ 3D/VR NFTs built by designers & architects from Citiverse Professional Network, on Starknet blockchain"
        }
      />
      <Flex
        width={"100%"}
        flexDirection={"column"}
        height={heightWrapper}
        overflow={"hidden"}
        backgroundImage={`url("/assets/images/bg1.jpg")`}
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Header />

        {/* For smaller screens (displayResponesive) */}
        <Flex
          position="relative"
          width="100%"
          mt={mtRes}
          flexDirection={"column"}
          display={displayResponesive}
          height="100%"
          justifyContent={"center"}
          alignItems="center"
        >
          <Flex mb={"40px"} justifyContent={"center"}>
            {/* <InforCenterHome onCheckInstallArgent={handleCheckInstallAgent} onShowModalStarknet = {handleShowModalStarknet}/> */}
            {/* <InforCenterHome onCheckInstallArgent={handleCheckInstallAgent} /> */}
          </Flex>
          <Flex
            justifyContent={"center"}
            backdropFilter={"blur(3px)"}
            position={"relative"}
            zIndex={9}
          >
            <InforMeta />
          </Flex>
          <Image
            mt={"-235px"}
            src={"/assets/images/bgMapRes.png"}
            alt=""
            width={"100%"}
            objectFit={"cover"}
            position={"relative"}
            zIndex="1"
          />
        </Flex>

        {/* For larger screens (displayDesktop) */}
        <Flex
          position="relative"
          width="100%"
          height="100%"
          alignItems="center"
          display={displayDesktop}
        >
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
            {/* <InforCenterHome onCheckInstallArgent={handleCheckInstallAgent} onShowModalStarknet = {handleShowModalStarknet} /> */}
            <InforCenterHome
              onCheckInstallStarknet={handleShowModalStarknet}
              onQuestionInstall={handleOnQuestionInstall}
            />
          </Box>
          <Box
            position={"absolute"}
            right={"0"}
            top={"50%"}
            transform={"translateY(-50%)"}
            zIndex="2"
            pr={"0px"}
            display={displayDesktop}
            paddingRight={"80px"}
          >
            <InforMeta />
          </Box>
        </Flex>

        <Footer />
        {showInstall && (
          <ModalInstall
            onCheckYesStacknet={handleActionYes}
            onCheckNoStacknet={handleActionNo}
          />
        )}
        {showInstallStarknet && (
          <ModalStarknet
            onClickAgrent={handleClickAgrent}
            onClickBravoos={handleClickBravoos}
          />
        )}
      </Flex>
    </>
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
