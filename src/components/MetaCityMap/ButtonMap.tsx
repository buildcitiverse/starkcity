import { Flex, Text, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface ButtonMapProps {
    handleZoomIn: () => void;
    handleZoomOut: () => void;

}

const ButtonMap: React.FC<ButtonMapProps> = ({ handleZoomIn, handleZoomOut }) => {
    ;
    return (
        <Flex flexDirection={"column"} position="absolute" bottom={10} right={10}>
            <Flex mb="8px" justifyContent={"space-between"} borderRadius={"40px"} height={"40px"} width={"148px"} p="8px 16px 8px 16px" border="1px solid #7F89AC" bg="rgba(10, 10, 32, 0.6)" fontWeight={400} fontSize={"14px"} lineHeight={"21px"}>
                <Image onClick={handleZoomOut} style={{ marginRight: '8px' }} width={22} height={22} src="/assets/icons/zoom_out.svg" alt="" />
                <Text>Zoom</Text>
                <Image onClick={handleZoomIn} style={{ marginRight: '8px' }} width={22} height={22} src="/assets/icons/zoom_in.svg" alt="" />
            </Flex>
            <Link href="/">
                <Button borderRadius={"40px"} height={"40px"} width={"148px"} p="8px 16px 8px 16px" border="1px solid #7F89AC" bg="rgba(10, 10, 32, 0.6)" fontWeight={400} fontSize={"14px"} lineHeight={"21px"}>
                    <Image style={{ marginRight: '8px' }} width={21} height={21} src="/assets/icons/back.svg" alt="" />
                    Back Home
                </Button>
            </Link>
        </Flex>
    )
}

export default ButtonMap;