import { Flex, Box, Image, Text } from "@chakra-ui/react";

const menuItems = ["METACITY", "MARKETPLACE", "ACADEMY", "NEWS", "WHITE LIST"];

const Header = () => {
    return (
        <Flex height="80px" justifyContent="center" alignItems="center" bg="#04041B">
            <Box width="100%" padding={"0 80px"} height="100%">
                <Flex height="100%" alignItems="center" justifyContent="space-between">
                    <Image w="260px" height="42px" src="/assets/images/logo_citiverse.png" alt="icon_city" />
                    <Flex gap="40px">
                        {menuItems.map(item => (
                            <Text key={item} cursor="pointer" fontWeight={400} fontSize="16px" lineHeight="24px" >
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
