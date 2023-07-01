export const ImageOverlay = ({ img }) => {
  return (
    <div>
      <div
        className="modal-outer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-inner">
          <img src={img} alt="overlay-img" />
        </div>
      </div>
    </div>
  );
};
