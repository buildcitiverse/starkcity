import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { useAccount, useConnect } from "@starknet-react/core";
import {  useEffect } from "react";
import { useRouter } from "next/router";

interface InfoCenterHomeProps {
    onCheckInstallArgent: () => void;
    onShowModalStarknet: () => void;
  }
  
const InforCenterHome: React.FC<InfoCenterHomeProps> = ({onCheckInstallArgent,onShowModalStarknet}) => {
    const fontSizeValue = useBreakpointValue({ base: "56px", lg: "64px" });
    const textWidth = useBreakpointValue({ base: "244px", lg: "auto" });
    const textBuildOn = useBreakpointValue({ base: "18px", lg: "24px" });
    const gapWrapper = useBreakpointValue({ base: "32px", lg: "40px" });
    const isSmallScreen = useBreakpointValue({ base: true, lg: false });

    const { connect, connectors } = useConnect();
    const router = useRouter();
    const { isConnected, chainId, address } = useAccount();


    // useEffect(() => {
    //     const switchChain = async () => {
    //         if (isConnected) {
    //             await window.starknet.request({
    //                 type: "wallet_switchStarknetChain",
    //                 params: {
    //                   chainId: "SN_SEPOLIA"
    //                 }
    //             });
    //         }
    //     };
    //     switchChain();
    // }, [isConnected]); 

    // useEffect(() => {
    //     const redirectToExplorer = async () => {
    //         if (isConnected && chainId === BigInt("393402133025997798000961")) {
    //             setTimeout(() => {
    //                 router.push("/explorer");
    //             }, 1000);
    //         }
    //         if (address) {
    //             localStorage.setItem("userAddress", address);
    //         }
    //     };
    //     redirectToExplorer();
    // }, [isConnected, router, chainId]);

    const showModalStarket = () => {
        onShowModalStarknet()
    }

    return (
        <>
            <Flex flexDirection={"column"} width={"376px"} alignItems={"center"} gap={gapWrapper}>
                <Flex flexDirection={"column"} alignItems={"center"}>
                    <Flex fontWeight={700} cursor={"default"} fontSize={fontSizeValue} lineHeight={"70.4px"} fontFamily={"sora"} textTransform={"uppercase"}>
                        Starkcity
                    </Flex>
                    <Flex cursor={"default"} fontWeight={400} fontSize={"16px"} textAlign={"center"} fontFamily={"Mulish"} w={textWidth} lineHeight={"20.8px"}>
                        Welcome to the virtual world’s one-stop-shop for the very best digital assets.
                    </Flex>
                </Flex>
                <Image w="260px" height="42px" src="/assets/images/logo_citiverse.png" alt="icon_city" />
                <Flex gap={"16px"} alignItems={"center"}>
                    <Flex fontWeight={400} fontFamily={"Sora"} cursor={"default"} fontSize={textBuildOn}>Build on</Flex>
                    {isSmallScreen ? (
                        <Image alt="" src="/assets/icons/icon_stark_res.svg" w={"174px"} height={"39px"} />
                    ) : (
                        <Image alt="" src="/assets/images/logo_starknet.png" w={"211px"} height={"48px"} />
                    )}
                </Flex>
                <Flex maxW={"196px"} _hover={{ bg: "#EC796B" }} height={"51px"} w={"100%"} bg={"#0A0A20"} gap={"8px"} cursor={"pointer"} border={"1px solid #C1C1C14D"} borderRadius={"51px"} justifyContent={"center"} align={"center"}>
                        <Flex onClick={showModalStarket}>
                            <Image alt="" src="/assets/icons/mountain.svg" w={"20px"} height={"20px"} />
                            <Flex fontWeight={800} fontSize={"14px"} textTransform={"uppercase"} ml="8px">Explore City</Flex>
                        </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default InforCenterHome;
