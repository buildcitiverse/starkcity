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
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "21px",
                  textAlign: "center",
                  color:"#FFFFFF"
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