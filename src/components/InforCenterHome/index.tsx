import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";

const InforCenterHome = () => {
    const fontSizeValue = useBreakpointValue({ base: "56px", lg: "64px" });
    const textWidth = useBreakpointValue({ base: "244px", lg: "auto" });
    const textBuildOn = useBreakpointValue({ base: "18px", lg: "24px" });
    const widthBuildOn = useBreakpointValue({ base: "auto", lg: "149px" });
    const gapWrapper = useBreakpointValue({ base: "32px", lg: "40px" });

    // Kiểm tra kích thước màn hình để quyết định hình ảnh nào sẽ hiển thị
    const isSmallScreen = useBreakpointValue({ base: true, lg: false });

    return (
        <Flex flexDirection={"column"} width={"376px"} alignItems={"center"} gap={gapWrapper}>
            <Flex flexDirection={"column"} gap={"10px"} alignItems={"center"}>
                <Flex fontWeight={700} fontSize={fontSizeValue} lineHeight={"70.4px"} fontFamily={"sora"} textTransform={"uppercase"}>
                    Starkcity
                </Flex>
                <Flex fontWeight={400} fontSize={"16px"} textAlign={"center"} fontFamily={"Mulish"} w={textWidth} lineHeight={"20.8px"}>
                    Welcome to the virtual world’s one-stop-shop for the very best digital assets.
                </Flex>
            </Flex>
            <Image w="260px" height="42px" src="/assets/images/logo_citiverse.png" alt="icon_city" />
            <Flex gap={"16px"} alignItems={"center"}>
                <Flex fontWeight={400} fontFamily={"Sora"} fontSize={textBuildOn} >Build on</Flex>
                {isSmallScreen ? (
                    <Image alt="" src="/assets/images/logo_res_starknet.png" w={"174px"} height={"39px"} />
                ) : (
                    <Image alt="" src="/assets/images/logo_starknet.png" w={"211px"} height={"48px"} />
                )}
            </Flex>
            <Flex maxW={"196px"} _hover={{ bg: "#EC796B" }} height={"51px"} w={"100%"} bg={"#0A0A20"} gap={"8px"} cursor={"pointer"} border={"1px solid #C1C1C14D"} borderRadius={"51px"} justifyContent={"center"} align={"center"}>
                <Image alt="" src="/assets/images/icon_btn_view.png" w={"20px"} height={"20px"} />
                <Flex fontWeight={800} fontSize={"14px"}>VIEW CITY</Flex>
            </Flex>
        </Flex>
    );
};

export default InforCenterHome;