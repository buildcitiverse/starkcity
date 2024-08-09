import { Flex, Box, Image, useBreakpointValue } from "@chakra-ui/react";

const Header = () => {
    const justifyContentValue = useBreakpointValue({ base: "center", sm: "space-between" });
    const heightWrapper = useBreakpointValue({ base: "40px", sm: "80px" });
    const heightLogo = useBreakpointValue({ base: "30px", sm: "40px" });
    const widthLogo = useBreakpointValue({ base: "184px", sm: "260px" });

    return (
        <Flex height={heightWrapper} justifyContent="center" alignItems="center" bg="#04041B" w={"100%"} position={"absolute"} zIndex={3}>
            <Box width="100%" height="80px" padding={"0 80px"} >
                <Flex height="100%" alignItems="center" justifyContent={justifyContentValue}>
                    <Image w={widthLogo} height={heightLogo} src="/assets/images/logo_citiverse.png" alt="icon_city" />
                </Flex>
            </Box>
        </Flex>
    );
};

export default Header;