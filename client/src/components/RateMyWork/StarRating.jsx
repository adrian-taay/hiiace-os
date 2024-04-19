import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

function StarRating({ noOfStars, starRatingSettings }) {
  const { rating, setRating, hover, setHover } = starRatingSettings;

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="flex">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={
              index <= (hover || rating) ? "fill-yellow-400" : "fill-slate-400"
            }
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={24}
          />
        );
      })}
    </div>
  );
}

StarRating.propTypes = {
  noOfStars: PropTypes.number,
  starRatingSettings: PropTypes.object,
};

export default StarRating;
