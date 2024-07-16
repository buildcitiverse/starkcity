import { Flex, Image } from "@chakra-ui/react"

const InforCenterHome = () => {
    return(
        <Flex flexDirection={"column"} width={"376px"} alignItems={"center"} gap={"40px"}>
            <Flex flexDirection={"column"} gap={"10px"}>
                <Flex fontWeight={700} fontSize={"64px"} lineHeight={"70.4px"} textTransform={"uppercase"}>Starkcity</Flex>
                <Flex fontWeight={400} fontSize={"16px"} textAlign={"center"} lineHeight={"20.8px"}>Welcome to the virtual world’s one-stop-shop for the very best digital assets.</Flex>
            </Flex>
            <Image w="260px" height="42px" src="/assets/images/logo_citiverse.png" alt="icon_city" />
            <Flex gap={"16px"} alignItems={"center"}>
                <Flex fontWeight={400} fontSize={"24px"} w={"142px"}>Build on</Flex>
                <Image alt="" src="/assets/images/logo_starknet.png" w={"100%"} height={"42px"}/>
            </Flex>
            <Flex maxW={"196px"} _hover={{bg:"#EC796B"}} height={"51px"} w={"100%"} bg={"#0A0A20"} gap={"8px"} cursor={"pointer"} border={"1px solid #C1C1C14D"} borderRadius={"51px"} justifyContent={"center"} align={"center"}>
                <Image alt="" src="/assets/images/icon_btn_view.png" w={"20px"} height={"20px"}/>
                <Flex fontWeight={800} fontSize={"14px"}>VIEW CITY</Flex>
            </Flex>
        </Flex>
    )
}


export default InforCenterHome