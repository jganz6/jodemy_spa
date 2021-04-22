import React from "react";
import "../css/PopsPromptMessage.css";
function PopsPromptMessage(props) {
  const {
    message,
    actionAccept,
    show,
    messageOnly,
    styleCustom,
    setShow,
  } = props;
  //   const [showPrompt, setShowPrompt] = useState(show);
  return (
    <div
      className="prompt-overlay"
      style={!show ? { display: "none" } : null}
      onClick={() => setShow(false)}
    >
      <div
        className="prompt-container"
        style={messageOnly ? { height: "100px", ...styleCustom } : null}
      >
        <div style={messageOnly ? { height: "100%" } : null}>{message}</div>
        {messageOnly ? null : (
          <div className="prompt-action">
            <button className="prompt-denied" onClick={() => setShow(false)}>
              No
            </button>
            <button
              className="prompt-accept"
              onClick={() => {
                actionAccept();
                setShow(false);
              }}
            >
              Yes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopsPromptMessage;
