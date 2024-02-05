import React, { useEffect, useState } from "react";
import Modal from "./Modal-V2";
import Notify from "../notify/Notify";

function ModalNotify({ status, message }) {
  const [isOpen, setIsOpen] = useState(false);
  const reset = () => setIsOpen(false);

  const statusValue = {
    loading: "loading",
    success: "success",
    error: "error",
  };
  useEffect(() => {
    if (!status || status == "") return setIsOpen(false);

    setIsOpen(true);
  }, [status]);
  return (
    <React.Fragment>
      {status == statusValue.loading && (
        <Modal isOpen={isOpen}>
          <Notify message={message} status={statusValue.loading} />
        </Modal>
      )}

      {status == statusValue.error && (
        <Modal isOpen={isOpen} isOverlayClose={true} reset={reset}>
          <Notify message={message} status={statusValue.error} />
        </Modal>
      )}

      {status == statusValue.success && (
        <Modal isOpen={isOpen} isOverlayClose={true} reset={reset}>
          <Notify message={message} status={statusValue.success} />
        </Modal>
      )}
    </React.Fragment>
  );
}

export default ModalNotify;
