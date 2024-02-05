import useNotify from "./useNotify";
import useModal from "./useModal-V2";
import constants, { appConstant, modalOptions } from "../constant";
import { useEffect, useState } from "react";

const { modalConfig, notifyConfig } = constants;

function useModalNotify(mutateApi) {
  const modal = useModal();
  const notify = useNotify();
  // model states
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayClose, setIsOverlayClose] = useState(false);
  
  let status;
  let configState = { ...modalConfig };
  const notifyOptions = notifyConfig.options;

  useEffect(() => {
    const { loading, success, error, message } = mutateApi;
    if (loading) {
      status = "loading";
      configState = modalConfig.center.strict;
    } else if (success) {
      status = "success";
      configState = modalConfig.center.fixed;
      notify.toggle({ ...notify.props, message });
    } else if (error) {
      status = "error";
    }
    modal.setConfig(configState);
    if (!modal.isOpen && status) modal.toggle(true);
    notify.toggle({ ...notifyOptions, status, message });
  }, [mutateApi]);

  const reset = () => {
    modal.reset();
    notify.reset();
  };

  return {
    modal: {
      isopen: modal.isOpen,
      config: modal.config,
    },
    notify: {
      options: notify.props,
    },
    reset,
  };
}

export default useModalNotify;
