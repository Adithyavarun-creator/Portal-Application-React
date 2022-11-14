import React, { useEffect } from "react";
import { useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Quizzes = () => {
  const [questionnaire, setQuestionnaire] = useState([]);

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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
        padding: "20px 20px",
      }}
    >
      <h1>Welcome to Quiz</h1>
      <h2>Here are your questions,fill out all and complete</h2>
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
    </div>
  );
};

export default Quizzes;
