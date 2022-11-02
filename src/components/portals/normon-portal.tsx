import ReactDOM from "react-dom";
import { useAppSelector } from "../../store/hooks/typedhooks";
import { uiMessage } from "../../store/ui/ui-selector";

const NormonHTML = (): React.ReactPortal => {
  const currentMessage = useAppSelector(uiMessage);

  let normonJSX: JSX.Element[] | JSX.Element = <></>;

  if (currentMessage) {
    normonJSX = (
      <>
        <div className="innerDiv show">
          <img
            src={`${process.env.REACT_APP_ASSET_URL}/images/avatar.png`}
            alt=""
            width={60}
            height={60}
          />
          <p
            className="line-1"
            style={{
              animation: `typewriter 2s steps(${
                currentMessage.length + 20
              }) .25s 1 normal both`,
            }}
          >
            {currentMessage}
          </p>
        </div>
      </>
    );
  }
  return ReactDOM.createPortal(
    normonJSX,
    document.getElementById("normonAI") as HTMLElement
  );
};
export default NormonHTML;
