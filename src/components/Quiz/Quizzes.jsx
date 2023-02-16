import React, { useEffect } from "react";
import { useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const Quizzes = () => {
  const [questionnaire, setQuestionnaire] = useState([]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  //for fetching the questions&answers collection from database
  useEffect(() => {
    const q = query(collection(db, "questions&answers"));
    onSnapshot(q, (querySnapshot) => {
      setQuestionnaire(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const options = [
    {
      value: questionnaire[index]?.data.answer1,
      label: questionnaire[index]?.data.answer1,
    },
    {
      value: questionnaire[index]?.data.answer2,
      label: questionnaire[index]?.data.answer2,
    },
    {
      value: questionnaire[index]?.data.answer3,
      label: questionnaire[index]?.data.answer3,
    },
    {
      value: questionnaire[index]?.data.answer4,
      label: questionnaire[index]?.data.answer4,
    },
  ];

  //function for movieng to next question
  const nextButton = () => {
    setIndex(index + 1);
    setQuestion(`Question no ${index}`);

    // if(){}
  };

  //for submitting the answers and evaluating
  const onSubmit = () => {
    alert("test is over");
    navigate("/results-score");
    // let marks = 5;
    // const totalMarks = 100;
    //let finaliseMark
    // if (
    //   questionnaire[index]?.data.correctAnswer ===
    //   options.values[index].toNumber()
    // ) {
    //    finaliseMark = marks[index] = marks[index] + 5;
    // finaliseMark > 0 && `Your score is ${finaliseMark}/totalMarks`
    // }else{
    // finaliseMark = marks[index] = marks[index] - 5;
    //finaliseMark <0 && "Your score is 0"
    //}
  };

  //index is 0

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "4px",
        padding: "20px 20px",
      }}
    >
      <h1>Welcome to Quiz</h1>
      <h2>Here are your questions,fill out all and complete</h2>
      <h2 style={{ color: "red" }}>
        Make sure to fill all your answers so that you cannot get back to mark
        again
      </h2>
      {questionnaire ? (
        <>
          <h2 key={questionnaire[index]?.id}>
            {questionnaire[index]?.data.question}
          </h2>

          {index < 3 && (
            <>
              <Select options={options} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={nextButton}>Go to Next</button>
              </div>
            </>
          )}

          {index > 2 && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button onClick={onSubmit}>Submit all answers</button>
            </div>
          )}
        </>
      ) : (
        <span>Hold on a sec, just updating recently added questions...</span>
      )}
    </div>
  );
};

export default Quizzes;

/**
 {questionnaire &&
        questionnaire.map((q) => (
          <div key={q.id}>
            <h2>{q.data.question}</h2>
            <option value={q.data.answer1}>{q.data.answer1}</option>
            <option value={q.data.answer2}>{q.data.answer2}</option>
            <option value={q.data.answer3}>{q.data.answer3}</option>
            <option value={q.data.answer4}>{q.data.answer4}</option>
          </div>
        ))} 
 */

/*
        <h3 value={questionnaire[index]?.data.answer1}>
        {questionnaire[index]?.data.answer1}
      </h3>
      <h3 value={questionnaire[index]?.data.answer2}>
        {questionnaire[index]?.data.answer2}
      </h3>
      <h3 value={questionnaire[index]?.data.answer3}>
        {questionnaire[index]?.data.answer3}
      </h3>
      <h3 value={questionnaire[index]?.data.answer4}>
        {questionnaire[index]?.data.answer4}
      </h3>
      */

/**
        <form>
            <h2 key={questionnaire[index]?.id}>
              {questionnaire[index]?.data.question}
            </h2>
            <div>
              <input
                type="checkbox"
                id={questionnaire[index]?.data.answer1}
                name={questionnaire[index]?.data.answer1}
                value={questionnaire[index]?.data.answer1}
              />
              <label htmlFor={questionnaire[index]?.data.answer1}>
                {questionnaire[index]?.data.answer1}
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id={questionnaire[index]?.data.answer2}
                name={questionnaire[index]?.data.answer2}
                value={questionnaire[index]?.data.answer2}
              />
              <label htmlFor={questionnaire[index]?.data.answer2}>
                {questionnaire[index]?.data.answer2}
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id={questionnaire[index]?.data.answer3}
                name={questionnaire[index]?.data.answer3}
                value={questionnaire[index]?.data.answer3}
              />
              <label htmlFor={questionnaire[index]?.data.answer3}>
                {questionnaire[index]?.data.answer3}
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id={questionnaire[index]?.data.answer4}
                name={questionnaire[index]?.data.answer4}
                value={questionnaire[index]?.data.answer4}
              />
              <label htmlFor={questionnaire[index]?.data.answer4}>
                {questionnaire[index]?.data.answer4}
              </label>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button onClick={nextButton}>Go to Next</button>
            </div>
          </form>
       */
