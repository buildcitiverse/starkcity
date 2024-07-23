import { Flex, Image } from "@chakra-ui/react";
import { useConnect } from "@starknet-react/core";

interface ModalInstallStarknet {
  onClickAgrent: () => void; 
  onClickBravoos: () => void; 
}

const ModalStarknet: React.FC<ModalInstallStarknet> = ({onClickAgrent,onClickBravoos}) => {

  const handleClickAgrent = () =>{
    onClickAgrent()
  }

  const handleClickBravoos = () =>{
    onClickBravoos()
  }

  const { connect, connectors } = useConnect()


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
            {/* <Flex
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
              <Image
                src={`/assets/images/icon_argent.png`}
                width={"107px"}
                height={"32px"}
                alt=""
              />
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
              <Image
                src={`/assets/images/imgBravos.png`}
                width={"129px"}
                height={"30px"}
                alt=""
              />
            </Flex> */}
             {
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
        }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalStarknet;
