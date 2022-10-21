import ReactDOM from "react-dom";
import type { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks/typedhooks";

type Props = {
  children?: React.ReactNode;
};
const NormonPortal = (props: Props) => {
  const currentMessage = useAppSelector((state: RootState) => state.ui.message);

  let normonJSX: JSX.Element[] | JSX.Element = <></>;

  if (currentMessage) {
    normonJSX = (
      <>
        <div className="innerDiv show">
          <img src={`/normon.png`} alt="" width={65} height={65} />
          <p
            className="line-1"
            style={{
              animation: `typewriter 2s steps(${
                currentMessage.length + 20
              }) .25s 1 normal both`,
            }}
          >
            <span>Normon:</span>
            {currentMessage}
          </p>
        </div>
      </>
    );
  }
  return normonJSX;
};

const NormonHTML = (props: Props): React.ReactPortal => {
  return ReactDOM.createPortal(
    <NormonPortal>{props.children} </NormonPortal>,
    document.getElementById("normonAI") as HTMLElement
  );
};
export default NormonHTML;
