import { Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAccount, useDisconnect } from "@starknet-react/core";
import { useRouter } from "next/router";

const ButtonActionWallet = () => {
  const { disconnect } = useDisconnect();
  const router = useRouter();
  const [showDisconnect, setShowDisconnect] = useState(false);
  const { address, isConnected, chainId } = useAccount();

  const shortenAddress = (address: any) => {
    if (!address) return "";
    const firstFive = address.substring(0, 6);
    const lastFour = address.substring(address.length - 4);
    return `${firstFive}...${lastFour}`;
  };

  const handleDisconnect = () => {
    disconnect();
    router.push("/");
  };

  const handleShowDisconnect = () => {
    setShowDisconnect(prevState => !prevState);
  };

  return (
    <Flex
      top={10}
      right={10}
      position={"absolute"}
      zIndex={999}
    >
      <Flex
        w={"152px"}
        bg={"#0A0A20"}
        borderRadius={"40px"}
        height={"40px"}
        position={"absolute"}
        right={"0px"}
        alignItems={"center"}
        justifyContent={"center"}
        cursor={"pointer"}
        onClick={handleShowDisconnect}
        transition={"transform 0.3s ease"} 
        transform={showDisconnect ? "translateX(-162px)" : "translateX(0)"} 
      >
        <Flex
          fontWeight={800}
          fontSize={"14px"}
          lineHeight={"21px"}
        >
          {shortenAddress(address)}
        </Flex>
        <Image
          src="assets/icons/arrow_right.svg"
          alt=""
          w={"24px"}
          h={"24px"}
        />
      </Flex>
      {showDisconnect && 
        <Flex
          w={"152px"}
          bg={"#0A0A20"}
          borderRadius={"40px"}
          height={"40px"}
          alignItems={"center"}
          justifyContent={"center"}
          cursor={"pointer"}
          onClick={handleDisconnect}
        >
          <Flex
            fontWeight={800}
            color={"#EC796B"}
            fontSize={"14px"}
            lineHeight={"21px"}
          >
            Disconnect
          </Flex>
        </Flex>
      }
    </Flex>
  );
};

export default ButtonActionWallet;
