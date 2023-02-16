import React, { useState } from "react";
import classes from "./AddQuestionForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const AddQuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [correct, setCorrect] = useState("");


  //add a new question and gets generated to frontend part
  const submitNewQuestion = async (e) => {
    e.preventDefault();
    if (!question || !answer1 || !answer2 || !answer3 || !answer4 || !correct) {
      alert("Please fill all fields and submit");
    }
    try {
      await addDoc(collection(db, "questions&answers"), {
        question: question,
        answer1: answer1,
        answer2: answer2,
        answer3: answer3,
        answer4: answer4,
        correct: correct,
        created: Timestamp.now(),
      });
      alert("question and answers added to the list");
      setQuestion("");
      setAnswer1("");
      setAnswer2("");
      setAnswer3("");
      setAnswer4("");
      setCorrect("");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <form className={classes.AddQuestionFormbox}>
        <div className={classes.AddQuestionFormLabelPos}>
          <label className={classes.AddQuestionFormLabel}>Enter Question</label>
          <input
            className={classes.AddQuestionFormInput}
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter Option 1"
          />
        </div>

        <div className={classes.AddQuestionFormLabelPos}>
          <label className={classes.AddQuestionFormLabel}>Enter Answer 1</label>
          <input
            className={classes.AddQuestionFormInput}
            type="text"
            placeholder="Enter Answer 1"
            value={answer1}
            onChange={(e) => setAnswer1(e.target.value)}
          />
        </div>

        <div className={classes.AddQuestionFormLabelPos}>
          <label className={classes.AddQuestionFormLabel}>Enter Answer 2</label>
          <input
            className={classes.AddQuestionFormInput}
            type="text"
            placeholder="Enter Answer 2"
            value={answer2}
            onChange={(e) => setAnswer2(e.target.value)}
          />
        </div>

        <div className={classes.AddQuestionFormLabelPos}>
          <label className={classes.AddQuestionFormLabel}>Enter Answer 3</label>
          <input
            className={classes.AddQuestionFormInput}
            type="text"
            placeholder="Enter Answer 3"
            value={answer3}
            onChange={(e) => setAnswer3(e.target.value)}
          />
        </div>

        <div className={classes.AddQuestionFormLabelPos}>
          <label className={classes.AddQuestionFormLabel}>Enter Answer 4</label>
          <input
            className={classes.AddQuestionFormInput}
            type="text"
            placeholder="Enter Answer 4"
            value={answer4}
            onChange={(e) => setAnswer4(e.target.value)}
          />
        </div>

        <div className={classes.AddQuestionFormLabelPos}>
          <label className={classes.AddQuestionFormLabel}>
            Enter Correct Answer
          </label>
          <input
            className={classes.AddQuestionFormInput}
            type="text"
            placeholder="Enter Correct Answer"
            value={correct}
            onChange={(e) => setCorrect(e.target.value)}
          />
        </div>

        <div className={classes.AddQuestionFormButtonPos}>
          <button
            className={classes.AddQuestionFormButton}
            onClick={submitNewQuestion}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AddQuestionForm;
