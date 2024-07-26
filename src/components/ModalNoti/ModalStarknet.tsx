import { Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useConnect as useStarknetConnect } from "@starknet-react/core";

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

  const handleClickAgrent = () => {
    onClickAgrent();
  };

  const handleClickBravoos = () => {
    onClickBravoos();
  };

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
      <div className="modal-body">
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
              {!showInBraavos ? (
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
            {/* {
          connectors.map((connector) => (
            // <button onClick={(() => connect({ connector }))}>
            //   Connect {connector.id}
            // </button>
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
            key={connector.id}
            onClick={(() => connect({ connector }))}
          >
            {connector.name !== "Argent (mobile)" && <Image
              src={String(connector.icon.light)}
              width={"40px"}
              height={"30px"}
              alt=""
            />}
            <img src={String(connector.icon)} alt="" />
            {connector.name}
          </Flex>
          ))
        } */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalStarknet;
