import { Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useConnect as useStarknetConnect } from "@starknet-react/core";
import { useRouter } from "next/router";

interface ModalInstallStarknet {
  onClickAgrent: () => void;
  onClickBravoos: () => void;
}

const ModalStarknet: React.FC<ModalInstallStarknet> = ({
  onClickAgrent,
  onClickBravoos,
}) => {
  const { connectors: starknetConnectors } = useStarknetConnect();
  const braavosConnector = starknetConnectors.find(
    (connector) => connector.id === "braavos"
  );
  const argentConnector = starknetConnectors.find(
    (connector) => connector.id === "argentX"
  );

  const [showInBraavos, setShowInBraavos] = useState(false);
  const [showInArgent, setShowInArgent] = useState(false);
  const connectors = [
    { connector: braavosConnector, setShow: setShowInBraavos },
    { connector: argentConnector, setShow: setShowInArgent },
  ];

  const router = useRouter()

  const handleClickAgrent = () => {
    onClickAgrent();
  };

  const handleClickBravoos = () => {
    onClickBravoos();
  };

  const handleSkip = () => {
    router.push("/explorer")
  }

  useEffect(() => {
    connectors.forEach(({ connector, setShow }) => {
      const checkConnectorAvailability = () => connector?.available();

      setTimeout(() => {
        if (!checkConnectorAvailability()) {
          setShow(true);
        }
      }, 100);
    });
  }, [braavosConnector, argentConnector]);

  return (
    <div className="modal-home">
      <div className="modal-overlay"></div>
      <div style={{width:"501px"}} className="modal-body">
        <div className="modal-inner">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
             {(showInArgent || showInBraavos) && (

              <Flex fontSize={"16px"} fontWeight={400} lineHeight={"21px"} textAlign={"center"} color={"#FFFFFF"}>  To fully experience StarkCity, you need to log in using your
              wallet. Please install a wallet plugin to your browser first.</Flex>
             )}
           
            <Flex
              w={"300px"}
              position={"relative"}
              zIndex={"99"}
              height={"66px"}
              gap={"8px"}
              border="1px solid #FFFFFF3D"
              cursor={"pointer"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"8px"}
              onClick={handleClickAgrent}
            >
              {!showInArgent ? (
                <Image
                  src={`/assets/images/icon_argent.png`}
                  width={"107px"}
                  height={"32px"}
                  alt=""
                />
              ) : (
                <Flex fontWeight={800} fontSize={"18px"} lineHeight={"21px"}>
                  Install Argent X
                </Flex>
              )}
            </Flex>
            <Flex
              w={"300px"}
              position={"relative"}
              zIndex={"99"}
              height={"66px"}
              gap={"8px"}
              border="1px solid #FFFFFF3D"
              cursor={"pointer"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"8px"}
              onClick={handleClickBravoos}
            >
              {!showInBraavos ? (
                <Image
                  src={`/assets/images/imgBravos.png`}
                  width={"129px"}
                  height={"30px"}
                  alt=""
                />
              ) : (
                <Flex fontWeight={800} fontSize={"18px"} lineHeight={"21px"}>
                  Install Braavos
                </Flex>
              )}
            </Flex>
            {(showInArgent || showInBraavos) && (
              <Flex
              position={"relative"}
              zIndex={"99"}
              padding={"8px 25px"}
              border="1px solid #FFFFFF3D"
              cursor={"pointer"}
              justifyContent={"center"}
              height={"66px"}
              alignItems={"center"}
              onClick={handleSkip}
              w={"300px"}
              fontWeight={800} fontSize={"18px"} lineHeight={"21px"}
            >
              Skip
            </Flex>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalStarknet;
