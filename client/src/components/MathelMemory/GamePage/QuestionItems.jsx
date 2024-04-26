import { useContext } from "react";
import { MathelMemoryContext } from "../utils/MathelMemoryProvider";
import { FaCheck } from "react-icons/fa";

function QuestionItems() {
  const { questions, setQuestion } = useContext(MathelMemoryContext);

  return (
    <>
      <ul className="flex justify-center items-center my-4 text-xl font-semibold">
        {[1, 2, 3].map((item, index) => {
          return (
            <li key={index} className="px-5 py-3 mx-3 rounded-md bg-stone-300">
              {item}
            </li>
          );
        })}
      </ul>
      <p className="text-center">Time&apos;s up! Correct answer is: 5</p>
      <div className="flex justify-center items-center my-5">
        <input
          type="text"
          className="w-24 text-center p-[9px] rounded-l-md bg-zinc-300"
        />
        <span className="bg-[rgb(127,80,171)] p-3 rounded-r-md">
          <FaCheck color="white" />
        </span>
      </div>
    </>
  );
}

export default QuestionItems;
