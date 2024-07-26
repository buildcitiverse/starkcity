import { Image } from "@chakra-ui/react";

interface ModalInstallBraavosProps {
  onCheckYesBraavos: () => void; 
  onCheckNoBraavos: () => void; 
  }

const ModalInstallBraavos : React.FC<ModalInstallBraavosProps> = ({onCheckYesBraavos,onCheckNoBraavos}) => {

    const handleYesBraavos = () => {
      onCheckYesBraavos()
    }

    const handleNoBraavos = () => {
      onCheckNoBraavos()
    }

  return (
    <div className="modal-home">
      <div className="modal-overlay"></div>
      <div className="modal-body">
        <div className="modal-inner">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems:"center",
              justifyContent: "center",
              gap:"16px"
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "21px",
                textAlign: "center",
                color: "#FFFFFF",
                width:"321px"
              }}
            >
              You have to install wallet plugin and connect to explore. Do you
              want to proceed?
            </div>
            <Image src="assets/icons/logo_braavos.svg" alt="" width={"91px"} height={"26px"}/>
            <div style={{display:"flex", gap:"16px"}}>
                <div onClick={handleYesBraavos} style={{width:"80px",cursor:"pointer",  height:"32px", textAlign:"center",border:"1px solid #3D3D4D", borderRadius:"4px", background:"#EC796B"}}>
                    <div style={{ display:"flex",fontSize:"14px", fontWeight:700, height:"100%", justifyContent:"center", alignItems:"center"}}>Yes</div>
                </div>
                <div onClick={handleNoBraavos} style={{width:"80px",cursor:"pointer",fontSize:"14px",textAlign:"center" , border: "1px solid #3D3D4D", borderRadius:"4px"}}>
                    <div style={{display:"flex",fontSize:"14px", fontWeight:700, height:"100%", justifyContent:"center", alignItems:"center"}}>No</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInstallBraavos;
