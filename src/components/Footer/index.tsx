import { Flex, Box, Image, useBreakpointValue } from "@chakra-ui/react";

const Footer = () => {
    const displayFooter = useBreakpointValue({ base: "none", md: "flex" });
    const justifyContentValue = useBreakpointValue({ base: "center", md: "space-between" });
    const height = useBreakpointValue({ base: "40px", md: "80px" });
    
    // const handleClickTerms = () => {
    //     window.open('https://actif3d.com/terms-of-service', '_blank');
    // };

    const handleClickPrivacy = () => {
        window.open('/privacy-policy', '_blank');
    };

    const handleClickTwitter = () => {
        window.open('https://x.com/buildcitiverse', '_blank');
    };

    const handleClickTele = () => {
        window.open('https://t.me/buildcitiverse', '_blank');
    };
    
    const handleClickDiscord = () => {
        window.open('https://discord.com/invite/Dpbpr53swE', '_blank');
    };

    return (
        <Flex height={height} padding={"0 80px"} bg="#04041B" w={"100%"} zIndex={3} position={"absolute"} bottom={"0"}>
            <Box width="100%" height="100%">
                <Flex height="100%" alignItems="center" justifyContent={justifyContentValue}>
                    <Flex gap={"40px"}>
                        <Image src="/assets/images/icon_discord.png" alt="" onClick={handleClickDiscord} w={"24px"} h={"24px"} cursor="pointer" />
                        <Image src="/assets/images/icon_tele.png" onClick={handleClickTele} alt="" w={"24px"} h={"24px"} cursor="pointer" />
                        <Image src="/assets/images/icon_twr.png" onClick={handleClickTwitter} alt="" w={"24px"} h={"24px"} cursor="pointer" />
                    </Flex>
                    <Flex display={displayFooter} fontWeight={500} fontSize={"14px"} lineHeight={"18px"} opacity={"60%"}>© 2024 CITI VERSE. All rights reserved.</Flex>
                    <Flex display={displayFooter} gap={"24px"}>
                        <Flex fontWeight={400} fontSize={"14px"} lineHeight={"26px"} cursor={"pointer"}  opacity={"60%"}>Terms and Conditions</Flex>
                        <Flex w={"1px"} height={"18px"} bg={"#FFFFFF"} opacity={"60%"}></Flex>
                        <Flex fontWeight={400} fontSize={"14px"} onClick={handleClickPrivacy} lineHeight={"26px"} cursor={"pointer"}  opacity={"60%"}>Privacy Policy</Flex>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Footer;
