import { useState } from "react";
import LoadingSpinner from "../../asset/LoaderSpinner.svg";
import classes from "./style.module.css";
const Card = ({ img, type, title, _id }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const getImage=(type)=>{
    switch (type) {
      case "bank-draft":
        return "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif";
      case "bill-of-lading":
        return "https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif";
      case "invoice":
        return "https://media.giphy.com/media/Lq0h93752f6J9tijrh/giphy.gif";
      case "bank-draft-2":
        return "https://media.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif";
      case "bill-of-lading-2":
        return "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif";
      default:
        return "";
  }
}

  return (
    <div className={classes.eachCard}>
      <p>{title}</p>
      {loading && <img src={LoadingSpinner}  alt="spinner" />}
      <img src={getImage(type)} alt={title} onLoad={handleLoad} />
    </div>
  );
};

export default Card;
