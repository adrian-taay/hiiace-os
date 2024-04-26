import { useContext } from "react";
import { MathelMemoryContext } from "../utils/MathelMemoryProvider";

function Instructions() {
  const { setSwitchPage } = useContext(MathelMemoryContext);

  return (
    <>
      <h1 className="text-center font-bold text-lg">Instructions</h1>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded-md shadow-md"
        onClick={() => setSwitchPage(2)}
      >
        START
      </button>
      <article className="overflow-scroll text-center scrollbar-hide my-3">
        <div className="instructions scrollable">
          <p>Each box will show a random digit from 0 - 9.</p>
          <ul className="flex justify-center items-center my-4 text-xl font-semibold">
            {[1, "+", 4, "+", 3].map((num, index) => {
              if (!isNaN(num))
                return (
                  <li key={index} className="px-5 py-3 rounded-md bg-stone-300">
                    {num}
                  </li>
                );

              return (
                <li key={index} className="mx-3">
                  {num}
                </li>
              );
            })}
          </ul>
          <p>
            All you have to do is add the two boxes to get the answer. Easy
            right?
          </p>
          <p className="my-2 font-bold text-lg">But wait! There&apos;s more!</p>
          <ul className="flex justify-center items-center my-4 text-xl font-semibold">
            {[1, "+", 4, "+", 3].map((num, index) => {
              if (!isNaN(num))
                return (
                  <li key={index} className="px-5 py-3 rounded-md bg-stone-300">
                    {num}
                  </li>
                );

              return (
                <li key={index} className="mx-3">
                  {num}
                </li>
              );
            })}
          </ul>
          <p>
            After 5 seconds, the boxes will be covered by a color representing a
            multiplier.
          </p>
          <ul className="flex justify-center items-center my-4 text-xl font-semibold">
            {["x1", "x2", "x3"].map((num, index) => {
              return (
                <li
                  key={index}
                  className="px-5 py-3 mx-3 rounded-md bg-stone-300"
                >
                  {num}
                </li>
              );
            })}
          </ul>
          <p>You now have more to worry about than just adding boxes!</p>
          <ul className="flex flex-col items-center my-4 text-xl font-semibold">
            {[
              [null, null, null],
              ["x", "x", "x"],
              [1, 4, 3],
            ].map((row, index) => {
              return (
                <ul
                  key={index}
                  className="flex justify-center items-center my-4 text-xl font-semibold"
                >
                  {row.map((num, index) => {
                    if (num == null || !isNaN(num)) {
                      return (
                        <li
                          key={index}
                          className="px-5 py-3 rounded-md bg-stone-300"
                        >
                          {num}
                        </li>
                      );
                    }
                    return (
                      <li key={index} className="mx-3">
                        {num}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </ul>
          <p>Correct Answer:</p>
          <p className="my-4 px-5 py-3 mx-3 rounded-md bg-stone-300">18</p>
          <p>...aaand you have to enter your answer within 20 seconds!</p>
        </div>
      </article>
    </>
  );
}

export default Instructions;
