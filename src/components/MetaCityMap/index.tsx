import { Button, Flex, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMetaCityMap } from "./config";
import { Image as ImageChakra } from '@chakra-ui/react';
import { selectedItemData, setSelectedItem } from "@/src/redux/slices/selectedItemSlice";
import CanvasWithImageAndIcon from "./CanvasWithImageAndIcon";
import Link from "next/link";
import { motion } from "framer-motion";

const MetaCityMap: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const dispatch = useDispatch();
    const selectedItem = useSelector(selectedItemData);
    const dataSelectedItem = selectedItem.selectedItem;

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
                <Flex bg="white" height={"100%"} w="100%">
                    <Flex
                        minW={"334px"}
                        bg="#04041B"
                        flexDirection={"column"}
                        color="white"
                    >
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
                                    <Image width={22} height={22} src="/assets/icons/search-icon.svg" alt="" />
                                </InputLeftElement>
                                <Input
                                    type='tel'
                                    placeholder='Search by name or ID'
                                    borderRadius={"40px"}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </InputGroup>
                        </Flex>
                        <Flex px="16px" mt="16px" flexDirection={"column"} overflowY="auto" className="scroll-style" height="calc(100% - 139px)">
                            <Flex flexDirection={"column"}>
                                {filteredList.map((e: any, index: any) => {
                                    const isActive = index === activeIndex;
                                    return (
                                        <Flex
                                            key={index}
                                            borderRadius={"8px"}
                                            height={"80px"}
                                            padding={"8px"}
                                            bg={isActive ? "#EC796B" : "#0A0A20"}
                                            w="100%"
                                            mb="8px"
                                            onClick={() => handleItemClick(e, index)}
                                            cursor="pointer"
                                        >
                                            <Image width={64} height={64} src="/assets/images/view_house.png" alt="" />
                                            <Flex flexDirection={"column"} w="100%" ml="8px">
                                                <Text lineHeight={"28px"} fontWeight={700} fontStyle={"normal"}>{e.name}</Text>
                                                <Flex lineHeight={"normal"} justifyContent={"space-between"} w="100%">
                                                    <Text color={isActive ? "white" : "#9C9C9C"} fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>Price:</Text>
                                                    <Text color={isActive ? "white" : "#EC796B"} fontWeight={700} fontSize={"12px"} lineHeight={"18px"}>{e.price} {e.symbol}</Text>
                                                </Flex>
                                                <Flex lineHeight={"normal"} justifyContent={"space-between"} w="100%">
                                                    <Text color={isActive ? "white" : "#9C9C9C"} fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>ID:</Text>
                                                    <Text fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>#{e.id}</Text>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    )
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
                                        <Image width={256} height={160} src="/assets/images/view_house_full.png" alt="" />
                                        <Text mt="16px" fontWeight={700} fontSize={"20px"} lineHeight={"30px"}>{dataSelectedItem.name}</Text>
                                        <Flex my="16px">
                                            <Text fontWeight={800} fontSize={"14px"} lineHeight={"21px"}>Symbol</Text>
                                        </Flex>
                                        <Flex>
                                            <Flex>
                                                <Text color="rgba(156, 156, 156, 1)" fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>Token ID:</Text>
                                                <Text color="rgba(236, 121, 107, 1)" fontWeight={700} fontSize={"12px"} lineHeight={"18px"}>#{dataSelectedItem.id}</Text>
                                            </Flex>
                                            <Flex ml="24px">
                                                <Text color="rgba(156, 156, 156, 1)" fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>Price:</Text>
                                                <Text color="rgba(236, 121, 107, 1)" fontWeight={700} fontSize={"12px"} lineHeight={"18px"}>{dataSelectedItem.price} {dataSelectedItem.symbol}</Text>
                                            </Flex>
                                        </Flex>
                                        <Text mt="16px" fontWeight={600} fontSize={"14px"} lineHeight={"21px"}>Owner</Text>
                                        <Text color="rgba(156, 156, 156, 1)" fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>{dataSelectedItem.address}</Text>
                                        <Text mt='16px' fontWeight={600} fontSize={"14px"} lineHeight={"21px"}>Blockchain Network</Text>
                                        <Text color="rgba(156, 156, 156, 1)" fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>{dataSelectedItem.network}</Text>
                                        <Text mt="16px" fontWeight={600} fontSize={"14px"} lineHeight={"21px"}>Description</Text>
                                        <Text color="rgba(156, 156, 156, 1)" fontWeight={400} fontSize={"12px"} lineHeight={"18px"}>{dataSelectedItem.description}</Text>
                                        <Link href={dataSelectedItem.urlShowCase3D} passHref target="_blank">
                                            <Button mt="16px" bg="rgba(10, 10, 32, 1)" height={"51px"} w="100%" borderRadius={"51px"}>
                                                <Image style={{ marginRight: "8px" }} width={20} height={20} src="/assets/icons/show_case.png" alt="" />
                                                3D SHOWCASE
                                            </Button>
                                        </Link>
                                    </>
                                </Flex>
                            </motion.div>
                        )}
                        <CanvasWithImageAndIcon />
                    </Flex>
                </Flex>
            </Flex>
            {showModal && (
             <ModalNoti message={"Please switch to NetWork Sepolia"} />
             )}
       </> 
    );
};

export default MetaCityMap;
