import { Flex, Image } from "@chakra-ui/react";

const InforMeta = () => {
  return (
    <Flex
      w={"326px"}
      border={"1px solid #888888"}
      bg={"#00000033"}
      p={"24px"}
      flexDirection={"column"}
      gap={"40px"}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Flex flexDirection={"column"} gap={"8px"}>
        <Image src="/assets/images/subtitle.png" alt="" w={"48px"} h={"20px"} />
        <Flex fontWeight={600} fontSize={"20px"} lineHeight={"24px"}>Metaverse & Gaming City</Flex>
        <Flex ml={"25px"}>
          <ul className="red-ul">
            <li className="red-li">No-code VR apps & contents</li>
            <li className="red-li">Co-creation between casual players and professional artists</li>
            <li className="red-li">Stunning & immersive metaverse experience.</li>
          </ul>
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} gap={"8px"}>
        <Image src="/assets/images/subtitle2.png" alt="" w={"48px"} h={"20px"} />
        <Flex fontWeight={600} fontSize={"20px"} lineHeight={"24px"}>Co-creation & City builder</Flex>
        <Flex ml={"25px"}>
          <ul className="red-ul">
            <li className="red-li">
              City's master plan is created under DAO process by Citiverse's
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
        <Image src="/assets/images/subtitle3.png" alt="" w={"48px"} h={"20px"} />
        <Flex fontWeight={600} fontSize={"20px"} lineHeight={"24px"}>StarkCity NFT Collection</Flex>
        <Flex ml={"25px"}>
          <ul className="red-ul">
            <li className="red-li">
              Beautiful city creation by Citiverse's Professional Network. 50+
              NFTs of 3D/VR buiding and landscape deployed on Starknet
              blockchain.
            </li>
            <li className="red-li">Beautiful city creation by Citiverse's Professional Network.
                50+ NFTs of 3D/VR buiding and landscape deployed on Starknet blockchain.</li>
          </ul>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InforMeta;