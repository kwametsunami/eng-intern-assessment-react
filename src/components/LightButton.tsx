import React from "react";

type Props = {
  light: boolean;
  setLight: React.Dispatch<React.SetStateAction<boolean>>;
};

const LightButton = ({ light, setLight }: Props) => {
  const lightClick = () => {
    console.log("i'm being clicked");
    setLight(true);

    setTimeout(() => {
      setLight(false);
    }, 3000);
  };

  return (
    <div className="light">
      <button className="lightPush" onClick={lightClick}>
        <p id="lightLabel">light</p>
      </button>
      {light ? <span className="bulb">&#9679;</span> : null}
    </div>
  );
};

export default LightButton;
