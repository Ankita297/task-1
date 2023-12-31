import { useState } from "react";
import LoadingSpinner from "../../asset/LoaderSpinner.svg";
import classes from "./style.module.css";
const Card = ({ type, title, _id, handleOverlay }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const getImage = (type) => {
    switch (type) {
      case "bank-draft":
        return "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif";
      case "bill-of-lading":
        return "https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif";
      case "invoice":
        return "https://media.giphy.com/media/Lq0h93752f6J9tijrh/giphy.gif";
      case "bank-draft-2":
        return "https://media.giphy.com/media/5aCiXMnPl1cli/giphy.gif";
      case "bill-of-lading-2":
        return "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif";
      default:
        return "";
    }
  };

  return (
    <div>
      <div
        onClick={() => {
          handleOverlay(getImage(type));
        }}
        className={classes.eachCard}
      >
        <p>{title}</p>
        {loading && <img src={LoadingSpinner} alt="spinner" />}

        <img
          src={getImage(type)}
          alt={title}
          onLoad={handleLoad}
          style={{ display: loading ? "none" : "block" }}
        />
      </div>
    </div>
  );
};

export default Card;
