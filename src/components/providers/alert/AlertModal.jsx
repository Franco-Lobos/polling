import { useAlertContext } from "./alertContext";

const AlertModal = ()=> {
    const { isOpen, type, message, onClose } = useAlertContext();
    const isSuccess = type === "success"

    return (
      <div
        id='alert-wrapper'
        isOpen={isOpen}
        className={isOpen ? 'active': ''}
      >
        <div id="alert-modal" className={isSuccess ? 'ok' : 'error'}>
              <div className="title">{isSuccess ? 'All good!' : 'Oops!'}</div>
              <div className="message">{message}</div>
              <div className="closing" onClick={onClose}>Close</div>
        </div>
        </div>
    );
  }

export default AlertModal;