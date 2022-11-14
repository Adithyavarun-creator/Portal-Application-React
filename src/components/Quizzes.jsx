import React, { useEffect } from "react";
import { useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Quizzes = () => {
  const [questionnaire, setQuestionnaire] = useState([]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");

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

  console.log(questionnaire);

  const nextButton = () => {
    setIndex(index + 1);
    setQuestion(`Question no ${index}`);
    //setQuestion(`This is question no ${index}`);
    //console.log(questionnaire[index]);
  };

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
      <h2>
        This is {index} question of {questionnaire.length} complete sets, main
        starts from next one
      </h2>
      {questionnaire && (
        <>
          <h2 key={questionnaire[index]?.id}>
            {questionnaire[index]?.data.question}
          </h2>
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={nextButton}>Go to Next</button>
          </div>
        </>
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
