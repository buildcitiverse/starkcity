import { Button, Flex, Input, InputGroup, InputLeftElement, Text, background } from "@chakra-ui/react";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMetaCityMap } from "./config";
import { Image as ImageChakra } from '@chakra-ui/react';
import { selectedItemData, setSelectedItem } from "@/src/redux/slices/selectedItemSlice";
import CanvasWithImageAndIcon from "./CanvasWithImageAndIcon";
import Link from "next/link";
import { motion } from "framer-motion";
import { getTruncateHash } from "@/src/utils/getTruncateHash";
import ModalNoti from "../ModalNoti";
import { useAccount,useDisconnect } from "@starknet-react/core";
import { convertToUpperCase } from "@/src/utils/convertToUpperCase";
import ButtonActionWallet from "./ButtonActionWallet";
import { useRouter } from "next/router";

enum colorRank {
  diamond= '#490254',  // Light green
  ruby= '#81001F',     // Light red
  gold= '#7B5010',     // Gold yellow
  sapphire= '#146377', // Dark blue
  silver= '#490254',   // Silver grey
}

const MetaCityMap: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const dispatch = useDispatch();
    const selectedItem = useSelector(selectedItemData);
    const dataSelectedItem = selectedItem.selectedItem;
    const [showModal, setShowModal] = useState(false);
    const { address, isConnected, chainId } = useAccount();
    const router = useRouter()
    const { disconnect } = useDisconnect();

    const handleItemClick = (item: any, index: number) => {
        setActiveIndex(index);
        dispatch(setSelectedItem(item));
    };

    useEffect(() => {
        if (
            isConnected &&
            chainId !== BigInt("393402133025997798000961")
        ) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [chainId, isConnected]);

    const handleHome = () => {
        disconnect()
        router.push("/")
    }

    const filteredList = listMetaCityMap.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toString().includes(searchQuery)
    );

    const numberToTextMap: { [key: number]: string } = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

    return (
        <>
            <Flex w="100%" justifyContent={"center"} height={"100vh"} bg="rgba(4, 4, 27, 1)" overflow={"hidden"}>
                <Flex bg="white" height={"100%"} w="100%" position={"relative"}>
                  <ButtonActionWallet/>
                    <Flex
                        maxW={"334px"}
                        minW={"334px"}
                        bg="#04041B"
                        flexDirection={"column"}
                        color="white"
                        position={"absolute"}
                        top={0}
                        left={0}
                        zIndex={99}
                        h="100%"
                        maxH={"100vh"}
                    >
                        <Flex onClick={handleHome} cursor={"pointer"}>
                            <Flex
                                bg="#EC796B"
                                height={"46px"}
                                p="4px 24px 4px 24px"
                                w="100%"
                                align={"center"}
                                justifyContent={"center"}
                                color="white"
                                lineHeight={"24px"}
                                fontWeight={700}
                            >
                                <Image width={175} height={38} src="/assets/icons/logo_meta_city.svg" alt="" />
                            </Flex>
                        </Flex>

                        <Flex justifyContent={"space-between"} m="16px">
                            <Flex fontWeight={700} fontSize={"16px"}>Starkcity</Flex>
                            <Flex
                                fontWeight={400}
                                lineHeight={"21px"}
                                fontSize={"14px"}
                            >
                                <Flex>
                                    <Text color="#9C9C9C" mr="4px">Available</Text>
                                    <Text color="#EC796B">{listMetaCityMap?.length}</Text>
                                    <Text>/{listMetaCityMap?.length}</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mx="16px">
                            <InputGroup>
                                <InputLeftElement pointerEvents='none' ml="8px">
                                    <Image style={{ marginRight: "8px" }} width={22} height={22} src="/assets/icons/search-icon.svg" alt="" />
                                </InputLeftElement>
                                <Input
                                    type='tel'
                                    placeholder='Search'
                                    borderRadius={"40px"}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    _placeholder={{ fontSize: "14px", fontWeight: 400, color: "#9C9C9C" }}
                                />
                            </InputGroup>
                        </Flex>
                        <Flex px="16px" mt="16px" flexDirection={"column"} overflowY="auto" className="scroll-style" height="calc(100% - 139px)">
                            <Flex flexDirection={"column"}>
                                {filteredList.map((e: any, index: any) => {
                                    const isActive = index === Number(dataSelectedItem?.location) - 1;
                                    const isHovered = index === hoveredIndex;
                                    return (
                                        <Flex
                                            key={index}
                                            borderRadius={"8px"}
                                            padding={"8px"}
                                            bg={(isActive || isHovered) ? "#EC796B" : "#191945"}
                                            w="100%"
                                            mb="8px"
                                            flexDirection={"column"}
                                            onClick={() => handleItemClick(e, index)}
                                            cursor="pointer"
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            <Flex w='100%'>
                                                <ImageChakra borderRadius={"4px"} width={"88px"} height={"88px"} src={e.imgHouse} alt="" />
                                                <Flex justifyContent={"space-between"} flexDirection={"column"} w="100%" ml="8px">
                                                    <Text lineHeight={"28px"} fontWeight={700} fontStyle={"normal"}>{e.name}</Text>
                                                    <Flex lineHeight={"normal"} justifyContent={"space-between"} w="100%">
                                                        <Text color={(isActive || isHovered) ? "white" : "#9C9C9C"} fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>Rarity:</Text>
                                                        <Text color={"#fff"} bg={colorRank[e.rank as keyof typeof colorRank]} px="8px" height={"18px"} fontWeight={500} fontSize={"12px"} lineHeight={"18px"}>{convertToUpperCase(e.rank)}</Text>
                                                    </Flex>
                                                    <Flex lineHeight={"normal"} justifyContent={"space-between"} w="100%">
                                                        <Text color={(isActive || isHovered) ? "white" : "#9C9C9C"} fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>Price:</Text>
                                                        <Text color={(isActive || isHovered) ? "white" : "#EC796B"} fontWeight={700} fontSize={"12px"} lineHeight={"18px"}>{e.price} {e.symbol}</Text>
                                                    </Flex>
                                                    <Flex lineHeight={"normal"} justifyContent={"space-between"} w="100%">
                                                        <Text color={isActive || isHovered ? "white" : "#9C9C9C"} fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>ID:</Text>
                                                        <Text fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>#{e.id}</Text>
                                                    </Flex>
                                                </Flex>
                                            </Flex>
                                            <Flex w='100%' mt="8px">
                                                <Link style={{width:"100%", marginRight: e.edit ? "8px" : "0px"}} href={e?.urlShowCase3D} passHref target="_blank">
                                                    <Button bg="#04041B" _hover={{ background: "white", color: "#0A0A20", borderColor: "white" }} fontSize={"14px"} borderRadius={"4px"} border="1px solid #3D3D4D" w="100%" height={"29px"}>{convertToUpperCase("Play")}</Button>
                                                </Link>
                                                {e.edit && <Link style={{width:"100%"}} href={e?.edit} passHref target="_blank"><Button bg="#04041B" _hover={{ background: "white", color: "#0A0A20", borderColor: "white" }} fontSize={"14px"} borderRadius={"4px"} border="1px solid #3D3D4D" w="100%" height={"29px"}>{convertToUpperCase("Edit")}</Button> </Link>}
                                            </Flex>
                                        </Flex>
                                    );
                                })}
                            </Flex>
                        </Flex>
                    </Flex>
                    
                    <Flex w="100%" position={"relative"}>
                   
                        {dataSelectedItem && (
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                transition={{ type: 'spring', stiffness: 100, damping: 30 }}
                                style={{ position: 'absolute', right: 0, top: '14%', zIndex: 99, maxWidth: '288px', width: '100%' }}
                            >
                                <Flex flexDirection={"column"} p='16px' borderTopLeftRadius={"16px"} borderBottomLeftRadius={"16px"} bg="rgba(10, 10, 32, 0.6)" maxH={"614px"}>
                                    <>
                                        <ImageChakra borderRadius={"8px"} width={256} height={160} src={dataSelectedItem.imgHouse} alt="" />
                                        <Text mt="16px" fontWeight={700} fontSize={"20px"} lineHeight={"30px"}>{dataSelectedItem.name}</Text>
                                        <Flex my="16px" align={"center"}>
                                            <Text mr="16px" fontWeight={800} fontSize={"14px"} lineHeight={"21px"}>Symbol</Text>
                                            <ImageChakra height={"28px"} src={`/assets/images/house_sample_${numberToTextMap[dataSelectedItem.sample]}.png`} alt="" />
                                        </Flex>
                                        <Flex>
                                            <Flex>
                                                <Text color="rgba(156, 156, 156, 1)" fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>Token ID:&nbsp; </Text>
                                                <Text color="rgba(236, 121, 107, 1)" fontWeight={700} fontSize={"12px"} lineHeight={"18px"}>#{dataSelectedItem.id}</Text>
                                            </Flex>
                                            <Flex ml="24px">
                                                <Text color="rgba(156, 156, 156, 1)" fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>Price:&nbsp;</Text>
                                                <Text color="rgba(236, 121, 107, 1)" fontWeight={700} fontSize={"12px"} lineHeight={"18px"}>{dataSelectedItem.price} {dataSelectedItem.symbol}</Text>
                                            </Flex>
                                        </Flex>
                                        <Text mt="16px" fontWeight={600} fontSize={"14px"} lineHeight={"21px"}>Owner</Text>
                                        <Text color="rgba(156, 156, 156, 1)" fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>{getTruncateHash(dataSelectedItem.address, 6, 4)}</Text>
                                        <Text mt='16px' fontWeight={600} fontSize={"14px"} lineHeight={"21px"}>Blockchain Network</Text>
                                        <Text color="rgba(156, 156, 156, 1)" fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>{dataSelectedItem.network}</Text>
                                        <Text mt="16px" fontWeight={600} fontSize={"14px"} lineHeight={"21px"}>Description</Text>
                                        <Text color="rgba(156, 156, 156, 1)" fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>{dataSelectedItem.description}</Text>
                                        <Link href={dataSelectedItem.urlShowCase3D} passHref target="_blank">
                                            <Button mt="16px" bg="rgba(10, 10, 32, 1)" height={"51px"} w="100%" borderRadius={"51px"} fontSize={"14px"}>
                                                <Image style={{ marginRight: "8px" }} width={24} height={24} src="/assets/icons/video-square.png" alt="" />
                                                3D/VR PLAY
                                            </Button>
                                        </Link>
                                    </>
                                </Flex>
                            </motion.div>
                        )}
                        <CanvasWithImageAndIcon />
                       
                    </Flex>
                </Flex>
            </Flex >
            {showModal && (
                <ModalNoti message={"Please switch to NetWork Sepolia"} />
            )
            }
        </>
    );
};

export default MetaCityMap;