import { useState } from "react";
import LoadingSpinner from "../../asset/LoaderSpinner.svg";
const Card = ({ img, type, title }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      <p>{title}</p>
      {loading && <img src={LoadingSpinner} />}
      <img src={img} alt={title} onLoad={handleLoad} />
    </div>
  );
};

export default Card;
