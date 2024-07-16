import { Flex, Box, Image, Text } from "@chakra-ui/react";

const menuItems = ["METACITY", "MARKETPLACE", "ACADEMY", "NEWS", "WHITE LIST"];

const Header = () => {
    return (
        <Flex height="80px" justifyContent="center" alignItems="center" bg="#04041B" w={"100%"} position={"absolute"} zIndex={3}>
            <Box width="100%" height="80px" padding={"0 80px"} >
                <Flex height="100%" alignItems="center" justifyContent="space-between">
                    <Image w="260px" height="42px" src="/assets/images/logo_citiverse.png" alt="icon_city" />
                    <Flex gap="40px">
                        {menuItems.map(item => (
                            <Text key={item} cursor="pointer" _hover={{color:"#EC796B"}} fontWeight={400} fontSize="16px" lineHeight="24px" >
                                {item}
                            </Text>
                        ))}
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Header;
