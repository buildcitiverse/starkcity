import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import {
  useAccount,
  useConnect,
  useContract,
  useContractWrite,
} from "@starknet-react/core";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import abi from "../../config/abi/abi.json";

interface InfoCenterHomeProps {
  onCheckInstallStarknet: () => void;
}

const InforCenterHome: React.FC<InfoCenterHomeProps> = ({
  onCheckInstallStarknet,
}) => {
  const fontSizeValue = useBreakpointValue({ base: "56px", lg: "64px" });
  const textWidth = useBreakpointValue({ base: "244px", lg: "auto" });
  const textBuildOn = useBreakpointValue({ base: "18px", lg: "24px" });
  const gapWrapper = useBreakpointValue({ base: "32px", lg: "40px" });
  const isSmallScreen = useBreakpointValue({ base: true, sm: false });
  const isSmallScreen2 = useBreakpointValue({ base: true, lg: false });

  const { connect, connectors } = useConnect();
  const [callContract, setCallContract] = useState(true);
  const router = useRouter();
  const { isConnected, chainId, address } = useAccount();

  const argentConnector = connectors.find(
    (connector) => connector.id === "argentX"
  );

  const handleClickExplore = async () => {
    onCheckInstallStarknet();
  };

  const handleClickExploreMobile = () => {
    router.push("/explorer");
  };

  useEffect(() => {
    const switchChain = async () => {
      if (isConnected || address) {
        await window.starknet.request({
          type: "wallet_switchStarknetChain",
          params: {
            chainId: "SN_SEPOLIA",
          },
        });
      }
    };
    switchChain();
  }, [isConnected, address]);

  // const { contract } = useContract({
  //   abi: abi,
  //   address:
  //     "0x06C1e915560589703C87ED758866aDadcd9acD324193e7F4C300C7357c9ffc3b",
  // });

  // const calls = useMemo(() => {
  //   if (!address || !contract) return [];
  //   return contract.populateTransaction["init_mint"]!(address, {
  //     low: 1,
  //     high: 0,
  //   });
  // }, [contract, address]);

  // const { writeAsync, data: dataVerify } = useContractWrite({
  //   calls,
  // });

  // useEffect(() => {
  //   const redirectToExplorer = async () => {
  //     if (isConnected && chainId === BigInt("393402133025997798000961")) {
  //       setTimeout(() => {
  //         writeAsync()
  //           .then(() => {
  //             router.push("/explorer");
  //             console.log('ok')
  //           })
  //           .catch((error: any) => {
  //             console.error("Error verify code:", error);
  //           });
  //       }, 1000);
  //     }
  //     if (address) {
  //       localStorage.setItem("userAddress", address);
  //     }
  //   };
  //   redirectToExplorer();
  // }, [isConnected, router, chainId]);

  return (
    <Flex
      flexDirection={"column"}
      width={"376px"}
      alignItems={"center"}
      gap={gapWrapper}
    >
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Flex
          fontWeight={700}
          cursor={"default"}
          fontSize={fontSizeValue}
          lineHeight={"70.4px"}
          fontFamily={"sora"}
          textTransform={"uppercase"}
        >
          Starkcity
        </Flex>
        <Flex
          cursor={"default"}
          fontWeight={400}
          fontSize={"16px"}
          textAlign={"center"}
          fontFamily={"Mulish"}
          w={textWidth}
          lineHeight={"20.8px"}
        >
          Welcome to the virtual world’s one-stop-shop for the very best digital
          assets.
        </Flex>
      </Flex>
      <Image
        w="297px"
        height="48px"
        src="/assets/icons/logo_citiverse.svg"
        alt="icon_city"
      />
      <Flex gap={"16px"} alignItems={"center"}>
        <Flex
          fontWeight={400}
          fontFamily={"Sora"}
          cursor={"default"}
          fontSize={textBuildOn}
        >
          Build on
        </Flex>
        {isSmallScreen ? (
          <Image
            alt=""
            src="/assets/icons/icon_stark_res.svg"
            w={"174px"}
            height={"39px"}
          />
        ) : (
          <Image
            alt=""
            src="/assets/images/logo_starknet.png"
            w={"211px"}
            height={"48px"}
          />
        )}
      </Flex>
      <Flex
        maxW={"196px"}
        _hover={{ bg: "#EC796B" }}
        height={"51px"}
        w={"100%"}
        bg={"#0A0A20"}
        gap={"8px"}
        cursor={"pointer"}
        border={"1px solid #C1C1C14D"}
        borderRadius={"51px"}
        justifyContent={"center"}
        align={"center"}
        onClick={isSmallScreen2 ? handleClickExploreMobile : handleClickExplore}
      >
        <Flex>
          <Image
            alt=""
            src="/assets/icons/mountain.svg"
            w={"20px"}
            height={"20px"}
          />
          <Flex
            fontWeight={800}
            fontSize={"14px"}
            textTransform={"uppercase"}
            ml="8px"
          >
            Explore City
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InforCenterHome;
