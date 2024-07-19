interface ModalNotiProps {
    message?: string
  }
  
    const ModalNoti: React.FC<ModalNotiProps> = ({message }) => {
      return (
        <div className="modal-home">
          <div className="modal-overlay"></div>
          <div className="modal-body">
            <div className="modal-inner">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "350",
                    lineHeight: "32px",
                    textAlign: "center",
                    color:"black"
                  }}
                >
                 {message}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default ModalNoti;