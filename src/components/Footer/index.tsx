import { Flex, Box, Image, useBreakpointValue } from "@chakra-ui/react";

const Footer = () => {
    const justifyContentValue = useBreakpointValue({ base: "center", md: "space-between" });
    const height = useBreakpointValue({ base: "40px", md: "34px" });
    
    const handleClickTerms = () => {
        window.open('/terms-and-conditions', '_blank');
    };

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
        <>
            
            <Flex 
                height={height} 
                padding={"0 80px"} 
                bg="#04041B" 
                w={"100%"} 
                zIndex={3} 
                position={"absolute"} 
                bottom={"0"} 
                display={{ base: "none", lg: "flex" }} 
            >
                <Box width="100%" height="100%">
                    <Flex height="100%" alignItems="center" justifyContent={justifyContentValue}>
                        <Flex gap={"16px"}>
                            <Image src="/assets/icons/discord.svg" alt="" onClick={handleClickDiscord} w={"24px"} h={"24px"} cursor="pointer" />
                            <Image src="/assets/icons/telegram.svg" onClick={handleClickTele} alt="" w={"24px"} h={"24px"} cursor="pointer" />
                            <Image src="/assets/icons/twitter.svg" onClick={handleClickTwitter} alt="" w={"24px"} h={"24px"} cursor="pointer" />
                        </Flex>
                        <Flex  position={"absolute"} cursor={"default"} bottom={"-1px"} transform={"translate(-50%, -50%)"} left={"50%"} fontWeight={500} fontSize={"14px"} lineHeight={"18px"} opacity={"60%"}>© 2024 Citiverse. All rights reserved</Flex>
                        <Flex gap={"24px"}>
                            <Flex fontWeight={400} fontSize={"14px"} lineHeight={"26px"} cursor={"pointer"} onClick={handleClickTerms} opacity={"60%"}>Terms and Conditions</Flex>
                            <Flex w={"1px"} mt={"4px"} height={"18px"} bg={"#FFFFFF"} opacity={"60%"}></Flex>
                            <Flex fontWeight={400} fontSize={"14px"} onClick={handleClickPrivacy} lineHeight={"26px"} cursor={"pointer"} opacity={"60%"}>Privacy Policy</Flex>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>

           
            <Flex 
                height={"100px"}  
                padding={"0 80px"} 
                bg="#04041B" 
                w={"100%"} 
                zIndex={3} 
                position={"absolute"} 
                bottom={"0"} 
                display={{ base: "flex", lg: "none" }} 
            >
                <Box width="100%" height="100%">
                    <Flex height="100%" alignItems="center" justifyContent={"center"} gap={"8px"} flexDirection={"column"}>
                        <Flex gap={"24px"} width={"100%"} justifyContent={"center"}>
                            <Flex alignItems={"center"} gap={"4px"}>
                                <Flex w={"4px"} borderRadius={"50%"} height={"4px"} bg={"#FFFFFF"} opacity={"60%"}></Flex>
                                <Flex fontWeight={400} fontSize={"12px"} lineHeight={"26px"} cursor={"pointer"} onClick={handleClickTerms} opacity={"60%"}>Terms and Conditions</Flex>
                            </Flex>
                            <Flex alignItems={"center"} gap={"4px"}>
                                <Flex w={"4px"} borderRadius={"50%"} height={"4px"} bg={"#FFFFFF"} opacity={"60%"}></Flex>
                                <Flex fontWeight={400} fontSize={"12px"} onClick={handleClickPrivacy} lineHeight={"26px"} cursor={"pointer"} opacity={"60%"}>Privacy Policy</Flex>
                            </Flex>  
                        </Flex>
                        <Flex gap={"16px"}>
                            <Image src="/assets/icons/discord.svg" alt="" onClick={handleClickDiscord} w={"24px"} h={"24px"} cursor="pointer" />
                            <Image src="/assets/icons/telegram.svg" onClick={handleClickTele} alt="" w={"24px"} h={"24px"} cursor="pointer" />
                            <Image src="/assets/icons/twitter.svg" onClick={handleClickTwitter} alt="" w={"24px"} h={"24px"} cursor="pointer" />
                        </Flex>
                        <Flex cursor={"default"} width={"100%"} justifyContent={"center"} fontWeight={500} fontSize={"12px"} lineHeight={"18px"} opacity={"60%"}>© 2024 Citiverse. All rights reserved</Flex>
                    </Flex>
                </Box>
            </Flex>
        </>
    );
};

export default Footer;
