import { Image } from "@chakra-ui/react";

const ModalLoading = () => {

  return (
    <div className="modal-home">
      <div className="modal-overlay"></div>
      <div className="modal-body-loading">
       {/* <div className="modal-inner"> */}
        <img
            src="/assets/gif/loading.gif"
            alt="Loading"
            width="377px"
            height="246px"
            style={{borderRadius:"40px"}}
          />
       {/* </div> */}
      </div>
    </div>
  );
};

export default ModalLoading;
