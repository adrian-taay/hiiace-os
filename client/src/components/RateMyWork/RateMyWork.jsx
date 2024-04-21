import { useState } from "react";
import { FcLike } from "react-icons/fc";
import StarRating from "./StarRating";

function RateMyWork() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const starRatingSettings = { rating, setRating, hover, setHover };

  return (
    <div className="flex p-3">
      <div>
        <div className="flex flex-col justify-center items-center my-2">
          <FcLike size={28} /> <span>Rate My Work</span>
        </div>
        <div className="text-xs mx-auto w-10/12 text-center">
          Thank you for visiting my website! Sending ratings and feedbacks are
          very much appreciated and it shows that my backend is functioning :)
        </div>
        <div className="mt-6">
          <div className="flex items-center my-3">
            <label className="text-sm mr-2">Rating:</label>
            <span className="ml-3">
              <StarRating
                noOfStars={5}
                starRatingSettings={starRatingSettings}
              />
            </span>
          </div>
          <div className="flex">
            <label className="text-sm mr-2">Message:</label>
            <textarea
              className="flex-1"
              name=""
              id=""
              cols="25"
              rows="3"
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div className="mt-2">
            <div className="flex">
              <label className="text-sm">Email:</label>
              <div className="flex flex-col ml-7">
                <input type="email" />
                <p className="text-xs text-gray-500 italic">
                  I care about your privacy. Head over to{" "}
                  <a
                    href="https://temp-mail.org/en/"
                    target="_blank"
                    className="underline"
                  >
                    Temp Mail
                  </a>{" "}
                  to get your temporary email!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <button className="px-3 py-1 mt-4 text-white bg-green-600 text-sm rounded-sm shadow-sm hover:bg-green-800">
            Send!
          </button>
        </div>
      </div>
    </div>
  );
}

export default RateMyWork;
