function Instructions() {
  return (
    <>
      <h1 className="text-center font-bold text-lg mb-4">Instructions</h1>
      <article className="overflow-scroll text-center scrollbar-hide">
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
          <p>But wait! There&apos;s more!</p>
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
          <ul>
            <li className="digit red">x 1</li>
            <li> </li>
            <li className="digit yellow">x 2</li>
            <li> </li>
            <li className="digit green">x 3</li>
          </ul>
          <p>You now have more to worry about than just adding boxes!</p>
          <ul>
            <li className="digit red"></li>
            <li className="digit yellow"></li>
            <li className="digit green"></li>
          </ul>
          <ul>
            <li className="digit clear">x</li>
            <li className="digit clear">x</li>
            <li className="digit clear">x</li>
          </ul>
          <ul>
            <li className="digit">1</li>
            <li className="digit">4</li>
            <li className="digit">3</li>
          </ul>
          <p>Correct Answer:</p>
          <p className="digit ins-answer">18</p>
          <p>...aaand you have to enter your answer within 20 seconds!</p>
        </div>
        <button className="start-btn btn">START</button>
      </article>
    </>
  );
}

export default Instructions;
