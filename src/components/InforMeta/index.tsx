import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";

const InforMeta = () => {
  const gapWrapperr = useBreakpointValue({ base: "20px", "2xl": "40px" });

  return (
    <Flex
      w={"326px"}
      border={"1px solid #888888"}
      bg={"#00000033"}
      p={"24px"}
      flexDirection={"column"}
      gap={gapWrapperr}
      position={"relative"}
      zIndex={2}
      style={{ backdropFilter: "blur(10px)" }}
      cursor={"default"}
      css={{
        '@media (max-width: 1439px) and (min-width: 1024px)': {
          padding: "10px 13px",
          width:"290px",
          gap:"15px"
        }}}
    >
      <Flex flexDirection={"column"} gap={"8px"} >
        <Flex gap= {"10px"} alignItems={"center"}>
          <Image src="/assets/icons/left_element.svg" alt="" w={"5px"} h={"20px"} />
          <Flex fontSize={"13px"} fontFamily={"Mulish"} fontWeight={700} mt={"1px"} lineHeight={"17.57px"}>01</Flex>
          <Image src="/assets/icons/right_element.svg" alt="" w={"5px"} h={"20px"} />
        </Flex>
        <Flex fontWeight={600} fontSize={"20px"} fontFamily={"Sora"} lineHeight={"24px"}>Metaverse &amp; Gaming City</Flex>
        <Flex ml={"25px"}>
          <ul className="red-ul">
            <li className="red-li">No-code VR apps &amp; contents</li>
            <li className="red-li">Co-creation between casual players and professional artists</li>
            <li className="red-li">Stunning &amp; immersive metaverse experience.</li>
          </ul>
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} gap={"8px"}>
      <Flex gap= {"10px"} alignItems={"center"}>
          <Image src="/assets/icons/left_element.svg" alt="" w={"5px"} h={"20px"} />
          <Flex fontSize={"13px"} fontFamily={"Mulish"} fontWeight={700} mt={"1px"} lineHeight={"17.57px"}>02</Flex>
          <Image src="/assets/icons/right_element.svg" alt="" w={"5px"} h={"20px"} />
        </Flex>
        <Flex fontWeight={600} fontFamily={"Sora"} fontSize={"20px"} lineHeight={"24px"}>Co-Creation &amp; City Builder</Flex>
        <Flex ml={"25px"}>
          <ul className="red-ul">
            <li className="red-li">
              City&apos;s master plan is created under DAO process by Citiverse&apos;s
              Professional Network.
            </li>
            <li className="red-li">
              Design and build constructions on the land you bought. Earn by
              renting out or selling tickets.
            </li>
          </ul>
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} gap={"8px"}>
      <Flex gap= {"10px"} alignItems={"center"}>
          <Image src="/assets/icons/left_element.svg" alt="" w={"5px"} h={"20px"} />
          <Flex fontSize={"13px"} fontFamily={"Mulish"} fontWeight={700} mt={"1px"} lineHeight={"17.57px"}>03</Flex>
          <Image src="/assets/icons/right_element.svg" alt="" w={"5px"} h={"20px"} />
        </Flex>
        <Flex fontWeight={600} fontSize={"20px"} fontFamily={"Sora"} lineHeight={"24px"}>StarkCity NFT Collection</Flex>
        <Flex ml={"25px"}>
          <ul className="red-ul">
            <li className="red-li">
            Beautiful city creation by Citiverse&apos;s Professional Network.
            </li>
            <li className="red-li">50+ NFTs of 3D/VR buiding and landscape deployed on Starknet blockchain.</li>
          </ul>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InforMeta;
