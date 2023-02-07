import React from "react";
import Leftbar from "../../components/Leftbar/Leftbar";
import classes from "./AddQuestionPage.module.css";
import AddQuestionForm from '../../components/AddQuestionForm/AddQuestionForm'

const AddQuestionPage = () => {
  return (
    <>
      <div className={classes.AddQuestionPageContainer}>
        <div className={classes.AddQuestionPageLeftbar}>
          <Leftbar />
        </div>
        <div className={classes.AddQuestionPageMainbar}>
          <AddQuestionForm />
        </div>
      </div>
    </>
  );
};

export default AddQuestionPage;
