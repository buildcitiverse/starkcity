import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMetaCityMap } from "./config";
import {
    selectedItemData,
    setSelectedItem,
} from "@/src/redux/slices/selectedItemSlice";
import Link from "next/link";
import CanvasWithImageAndIcon from "./CanvasWithImageAndIcon";
import { motion, AnimatePresence } from "framer-motion";
import { getTruncateHash } from "@/src/utils/getTruncateHash";
import { Image as ImageChakra } from "@chakra-ui/react";

const MapMobile: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMapView, setIsMapView] = useState<boolean>(false);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    console.log("isModalVisible :>> ", isModalVisible);
    const dispatch = useDispatch();
    const selectedItem = useSelector(selectedItemData);
    const dataSelectedItem = selectedItem.selectedItem;

    const handleItemClick = (item: any, index: number) => {
        setActiveIndex(index);
        dispatch(setSelectedItem(item));
        setIsModalVisible(true);
    };

    const filteredList = listMetaCityMap.filter(
        (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.id.toString().includes(searchQuery)
    );

    const toggleView = () => {
        setIsMapView(!isMapView);
    };

    const numberToTextMap: { [key: number]: string } = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    return (
        <Flex
            w="100%"
            justifyContent={"center"}
            height={"100vh"}
            bg="rgba(4, 4, 27, 1)"
            overflow={"hidden"}
        >
            <Flex height={"100%"} w="100%" flexDirection={"column"} bg="#04041B">
                <Link href="/">
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
                        <Image
                            width={175}
                            height={38}
                            src="/assets/icons/logo_meta_city.svg"
                            alt=""
                        />
                    </Flex>
                </Link>
                <Flex justifyContent={"space-between"} m="8px 16px">
                    <Flex fontWeight={700} fontSize={"16px"}>
                        Starkcity
                    </Flex>
                    <Flex fontWeight={400} lineHeight={"21px"} fontSize={"14px"}>
                        <Flex>
                            <Text color="#9C9C9C" mr="4px">
                                Available
                            </Text>
                            <Text color="#EC796B">{listMetaCityMap?.length}</Text>
                            <Text>/{listMetaCityMap?.length}</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Button
                    borderRadius={"51px"}
                    border={"1px solid rgba(193, 193, 193, 0.3)"}
                    height={"40px"}
                    mx="16px"
                    mb="8px"
                    onClick={toggleView}
                >
                    <Image
                        style={{ marginRight: "8px" }}
                        width={24}
                        height={24}
                        src={
                            isMapView
                                ? "/assets/icons/mountain.png"
                                : "/assets/icons/Menu_Alt_04.png"
                        }
                        alt={isMapView ? "Map Icon" : "List Icon"}
                    />
                    {isMapView ? "View List" : "View Map"}
                </Button>

                <Flex height="calc(100% - 72px)" position={"relative"}>
                    <CanvasWithImageAndIcon />
                    {!isMapView && (
                        <Flex
                            flexDirection="row"
                            overflowX="auto"
                            className="scroll-none"
                            p="16px"
                            whiteSpace="nowrap"
                            position={"absolute"}
                            top={0}
                            width="100%"
                        >
                            {filteredList.map((e: any, index: any) => {
                                const isActive = index === activeIndex;
                                const isHovered = index === hoveredIndex;
                                return (
                                    <Flex
                                        key={index}
                                        borderRadius={"8px"}
                                        height={"80px"}
                                        padding={"8px"}
                                        w="100%"
                                        bg={isActive || isHovered ? "#EC796B" : "#0A0A20"}
                                        minW="302px" // Set minimum width for each item
                                        onClick={() => handleItemClick(e, index)}
                                        cursor="pointer"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        mr="8px"
                                    >
                                        <Image
                                            width={64}
                                            height={64}
                                            src="/assets/images/view_house.png"
                                            alt=""
                                        />
                                        <Flex flexDirection={"column"} w="100%" ml="8px">
                                            <Text
                                                lineHeight={"28px"}
                                                fontWeight={700}
                                                fontStyle={"normal"}
                                            >
                                                {e.name}
                                            </Text>
                                            <Flex
                                                lineHeight={"normal"}
                                                justifyContent={"space-between"}
                                                w="100%"
                                            >
                                                <Text
                                                    color={isActive || isHovered ? "white" : "#9C9C9C"}
                                                    fontWeight={400}
                                                    fontSize={"12px"}
                                                    lineHeight={"18px"}
                                                >
                                                    Price:
                                                </Text>
                                                <Text
                                                    color={isActive || isHovered ? "white" : "#EC796B"}
                                                    fontWeight={700}
                                                    fontSize={"12px"}
                                                    lineHeight={"18px"}
                                                >
                                                    {e.price} {e.symbol}
                                                </Text>
                                            </Flex>
                                            <Flex
                                                lineHeight={"normal"}
                                                justifyContent={"space-between"}
                                                w="100%"
                                            >
                                                <Text
                                                    color={isActive || isHovered ? "white" : "#9C9C9C"}
                                                    fontWeight={400}
                                                    fontSize={"12px"}
                                                    lineHeight={"18px"}
                                                >
                                                    ID:
                                                </Text>
                                                <Text
                                                    fontWeight={400}
                                                    fontSize={"12px"}
                                                    lineHeight={"18px"}
                                                >
                                                    #{e.id}
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                );
                            })}
                        </Flex>
                    )}

                    <AnimatePresence>
                        {dataSelectedItem && isModalVisible && (
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "100%" }}
                                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    zIndex: 99,
                                    maxWidth: "375px",
                                    width: "100%",
                                }}
                            >
                                <Flex
                                    flexDirection={"column"}
                                    p="16px"
                                    borderTopLeftRadius={"16px"}
                                    borderTopRightRadius={"16px"}
                                    bg="rgba(10, 10, 32, 0.6)"
                                    maxH={"614px"}
                                    position={"relative"}
                                >
                                    <Flex justifyContent={"center"} left={"33%"} position={"absolute"} top={0}>
                                        <Flex
                                            onClick={() => setIsModalVisible(false)}
                                            height={"3px"}
                                            w="131px"
                                            bg="rgba(217, 217, 217, 1)"
                                            borderRadius={"6px"}
                                        ></Flex>
                                    </Flex>
                                    <>
                                        <Image
                                            width={343}
                                            height={160}
                                            src="/assets/images/view_house_full.png"
                                            alt=""
                                        />
                                        <Text
                                            mt="16px"
                                            fontWeight={700}
                                            fontSize={"20px"}
                                            lineHeight={"30px"}
                                        >
                                            {dataSelectedItem.name}
                                        </Text>
                                        <Flex my="16px" align={"center"}>
                                            <Text
                                                mr="16px"
                                                fontWeight={800}
                                                fontSize={"14px"}
                                                lineHeight={"21px"}
                                            >
                                                Symbol
                                            </Text>
                                            <ImageChakra
                                                height={"28px"}
                                                src={`/assets/images/house_sample_${numberToTextMap[dataSelectedItem.sample]
                                                    }.png`}
                                                alt=""
                                            />
                                        </Flex>
                                        <Flex>
                                            <Flex>
                                                <Text
                                                    color="rgba(156, 156, 156, 1)"
                                                    fontWeight={400}
                                                    fontSize={"12px"}
                                                    lineHeight={"18px"}
                                                >
                                                    Token ID:
                                                </Text>
                                                <Text
                                                    color="rgba(236, 121, 107, 1)"
                                                    fontWeight={700}
                                                    fontSize={"12px"}
                                                    lineHeight={"18px"}
                                                >
                                                    #{dataSelectedItem.id}
                                                </Text>
                                            </Flex>
                                            <Flex ml="24px">
                                                <Text
                                                    color="rgba(156, 156, 156, 1)"
                                                    fontWeight={400}
                                                    fontSize={"12px"}
                                                    lineHeight={"18px"}
                                                >
                                                    Price:
                                                </Text>
                                                <Text
                                                    color="rgba(236, 121, 107, 1)"
                                                    fontWeight={700}
                                                    fontSize={"12px"}
                                                    lineHeight={"18px"}
                                                >
                                                    {dataSelectedItem.price} {dataSelectedItem.symbol}
                                                </Text>
                                            </Flex>
                                        </Flex>
                                        <Text
                                            mt="16px"
                                            fontWeight={600}
                                            fontSize={"14px"}
                                            lineHeight={"21px"}
                                        >
                                            Owner
                                        </Text>
                                        <Text
                                            color="rgba(156, 156, 156, 1)"
                                            fontWeight={400}
                                            fontSize={"12px"}
                                            lineHeight={"18px"}
                                        >
                                            {getTruncateHash(dataSelectedItem.address, 6, 4)}
                                        </Text>
                                        <Text
                                            mt="16px"
                                            fontWeight={600}
                                            fontSize={"14px"}
                                            lineHeight={"21px"}
                                        >
                                            Blockchain Network
                                        </Text>
                                        <Text
                                            color="rgba(156, 156, 156, 1)"
                                            fontWeight={400}
                                            fontSize={"12px"}
                                            lineHeight={"18px"}
                                        >
                                            {dataSelectedItem.network}
                                        </Text>
                                        <Text
                                            mt="16px"
                                            fontWeight={600}
                                            fontSize={"14px"}
                                            lineHeight={"21px"}
                                        >
                                            Description
                                        </Text>
                                        <Text
                                            color="rgba(156, 156, 156, 1)"
                                            fontWeight={400}
                                            fontSize={"12px"}
                                            lineHeight={"18px"}
                                        >
                                            {dataSelectedItem.description}
                                        </Text>
                                        <Link
                                            href={dataSelectedItem.urlShowCase3D}
                                            passHref
                                            target="_blank"
                                        >
                                            <Button
                                                mt="16px"
                                                bg="rgba(10, 10, 32, 1)"
                                                height={"51px"}
                                                w="100%"
                                                borderRadius={"51px"}
                                                fontSize={"14px"}
                                            >
                                                <Image
                                                    style={{ marginRight: "8px" }}
                                                    width={20}
                                                    height={20}
                                                    src="/assets/icons/show_case.png"
                                                    alt=""
                                                />
                                                3D SHOWCASE
                                            </Button>
                                        </Link>
                                    </>
                                </Flex>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {dataSelectedItem && <>{!isModalVisible && (
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", stiffness: 50, damping: 30 }}
                            style={{
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                zIndex: 99,
                                maxWidth: "375px",
                                width: "100%",
                            }}
                        >
                            <Flex height={"51px"} borderTopLeftRadius={"16px"}
                                borderTopRightRadius={"16px"}
                                fontSize={"20px"}
                                fontWeight={700}
                                lineHeight={"30px"}
                                p="16px"
                                bg="rgba(10, 10, 32, 0.6)" onClick={() => setIsModalVisible(true)}>
                                {dataSelectedItem?.name}
                            </Flex>
                        </motion.div>
                    )}</>}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default MapMobile;
