const Card = ({ img, type, title }) => {
  return (
    <div>
      <p>{title}</p>
      <img src={img} alt={title} />
    </div>
  );
};

export default Card;
