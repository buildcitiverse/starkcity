import { Flex,Box,Image } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Flex height="80px" justifyContent="center" alignItems="center" bg="#04041B">
            <Box width="100%" maxWidth="1440px" height="100%">
                <Flex height="100%" alignItems="center" justifyContent="space-between">
                    <Flex gap={"40px"}>
                        <Image src="/assets/images/icon_discord.png" alt="" w={"24px"} h={"24px"}/>
                        <Image src="/assets/images/icon_tele.png" alt="" w={"24px"} h={"24px"}/>
                        <Image src="/assets/images/icon_twr.png" alt="" w={"24px"} h={"24px"}/>
                    </Flex>
                    <Flex fontWeight={500} fontSize={"14px"} lineHeight={"18px"} opacity={"60%"}>© 2024 CITY VERSE. All rights reserved.</Flex>
                    <Flex gap={"24px"}>
                        <Flex fontWeight={400} fontSize={"14px"} lineHeight={"26px"} opacity={"60%"}>Terms and Conditions</Flex>
                        <Flex w={"1px"} height={"18px"} bg={"#FFFFFF"} opacity={"60%"}></Flex>
                        <Flex fontWeight={400} fontSize={"14px"} lineHeight={"26px"} opacity={"60%"}>Privacy Policy</Flex>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Footer;