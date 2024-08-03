  import { ReactNode, useState, useEffect, useMemo } from "react";
  import Header from "../components/Header";
  import { Layout } from "../layouts";
  import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
  import InforCenterHome from "../components/InforCenterHome";
  import Footer from "../components/Footer";
  import InforMeta from "../components/InforMeta";
  import { Meta } from "../containers/Meta";
  import { useRouter } from "next/router";
  import {
    useAccount,
    useConnect,
    useContract,
    useContractRead,
    useContractWrite,
  } from "@starknet-react/core";
  import ModalStarknet from "../components/ModalNoti/ModalStarknet";
  import abi from "../config/abi/abi.json";

  const Index = () => {
    const displayResponesive = useBreakpointValue({ base: "block", md: "none" });
    const displayDesktop = useBreakpointValue({ base: "none", md: "block" });
    const heightWrapper = useBreakpointValue({ base: "auto", md: "100vh" });
    const mtRes = useBreakpointValue({ base: "110px", md: "81px" });
    const [showInstallStarknet, setShowInstallStarknet] = useState(false);
    const router = useRouter();
    const { connect, connectors } = useConnect();
    const { isConnected, chainId, address } = useAccount();
    const [imageSrc, setImageSrc] = useState("/assets/images/bgMapRes.png");

    const addressLocal =
      typeof window !== "undefined" ? localStorage.getItem("userAddress") : null;

    useEffect(() => {
      const updateImageSrc = () => {
        if (window.innerWidth >= 444 && window.innerWidth <= 767) {
          setImageSrc("/assets/images/map_res.png");
        } else {
          setImageSrc("/assets/images/bgMapRes.png");
        }
      };
      updateImageSrc();
      window.addEventListener("resize", updateImageSrc);
      return () => {
        window.removeEventListener("resize", updateImageSrc);
      };
    }, []);

    const argentConnector = connectors.find(
      (connector) => connector.id === "argentX"
    );

    const braavosConnector = connectors.find(
      (connector) => connector.id === "braavos"
    );

    const [callContract, setCallContract] = useState(true);

    // const handleClickBravoos = async () => {
    //   if (braavosConnector?.available()) {
    //     await connect({ connector: braavosConnector });
    //   } else {
    //     router.push("https://braavos.app/");
    //   }
    // };

    // const handleClickAgrent = async () => {
    //   if (argentConnector?.available()) {
    //     await connect({ connector: argentConnector });
    //   } else {
    //     router.push("https://www.argent.xyz/argent-x/");
    //   }
    // };

    const { contract } = useContract({
      abi: abi,
      address:
        "0x06C1e915560589703C87ED758866aDadcd9acD324193e7F4C300C7357c9ffc3b",
    });

    const calls = useMemo(() => {
      if (!address || !contract) return [];
      return contract.populateTransaction["init_mint"]!(address, {
        low: 1,
        high: 0,
      });
    }, [contract, address]);

    const { writeAsync, data: dataVerify } = useContractWrite({
      calls,
    });

    const { data: dataMinted, refetch: refetchData } = useContractRead({
      functionName: "minted",
      args: [addressLocal as String],
      abi: abi,
      address:
        "0x06C1e915560589703C87ED758866aDadcd9acD324193e7F4C300C7357c9ffc3b",
      watch: true,
    });

    const handleClickBravoos = async () => {
      try {
        await connect({ connector: braavosConnector });
        if (callContract === false || address) {
          await writeAsync();
          setCallContract(true);
          refetchData();
        }
      } catch (error: any) {
        console.error("Error connecting or verifying code:", error);
      }
    };

    const handleClickAgrent = async () => {
      try {
        await connect({ connector: argentConnector });
        if (callContract === false || address) {
          await writeAsync();
          setCallContract(true);
          refetchData();
        }
      } catch (error: any) {
        console.error("Error connecting or verifying code:", error);
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
      const timeout = setTimeout(() => {
        if (callContract === false || address) {
          writeAsync()
            .then(() => {
              setCallContract(true);
              refetchData();
            })
            .catch((error: any) => {
              console.error("Error verify code:", error);
            });
        }
      }, 2000);

      return () => clearTimeout(timeout);
    }, [address, callContract]);

    useEffect(() => {
      const redirectToExplorer = async () => {
        if (
          isConnected &&
          chainId === BigInt("393402133025997798000961") &&
          dataMinted === true
        ) {
          router.push("/explorer");
        }
        if (address) {
          localStorage.setItem("userAddress", address);
        }
      };
      redirectToExplorer();
    }, [isConnected, dataMinted, router, chainId, address]);


    const handleShowModalStarknet = async () => {
      const addressLocal = localStorage.getItem("userAddress");
      if (addressLocal && dataMinted === true) {
        if(argentConnector) {
          await connect({ connector: argentConnector });
        } else {
          await connect({ connector: braavosConnector });
        }
        router.push("/explorer");
      } else {
        setShowInstallStarknet(true);
      }
    };

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
              <InforCenterHome onCheckInstallStarknet={() => {}} />
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
              css={{
                "@media (max-width: 767px) and (min-width: 444px)": {
                  marginTop: "-20px",
                  marginLeft: "-190px",
                },
              }}
              mt={"-235px"}
              src={imageSrc}
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
              css={{
                "@media (max-width: 1439px) and (min-width: 1024px)": {
                  width: "50%",
                  left: "-15%",
                },
                "@media (max-width: 1023px) and (min-width: 768px)": {
                  display: "none",
                },
              }}
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
              css={{
                "@media (max-width: 1023px) and (min-width: 768px)": {
                  left: "30%",
                },
              }}
            >
              <InforCenterHome onCheckInstallStarknet={handleShowModalStarknet} />
            </Box>
            <Box
              position={"absolute"}
              right={"0"}
              top={"53%"}
              transform={"translateY(-50%)"}
              zIndex="2"
              pr={"0px"}
              display={displayDesktop}
              paddingRight={"80px"}
              css={{
                "@media (max-width: 1439px) and (min-width: 1024px)": {
                  paddingRight: "30px",
                },
                "@media (max-width: 1023px) and (min-width: 768px)": {
                  paddingRight: "30px",
                  top: "49%",
                },
              }}
            >
              <InforMeta />
            </Box>
          </Flex>

          <Footer />

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
