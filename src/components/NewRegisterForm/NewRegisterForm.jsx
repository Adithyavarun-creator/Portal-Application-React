import React, { useState } from "react";
import classes from "./NewRegisterForm.module.css";
import { useForm, ValidationError } from "@formspree/react";

//this is purely for getting email notification about each college form
const NewRegisterForm = () => {
  const [state, handleSubmit] = useForm("mlekjdkl");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [principal, setPrincipal] = useState("");
  const [college, setCollege] = useState("");
  const [address, setAddress] = useState("");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className={classes.NewRegisterFormContainer}>
      <div>
        <h2 className={classes.NewRegisterFormHeading}>
          Fill below form to connect with your College/University
        </h2>
      </div>

      <div>
        <form
          className={classes.NewRegisterFormContent}
          action="https://formspree.io/f/mlekjdkl"
          method="POST"
        >
          <div className={classes.NewRegisterFormLabelPos}>
            <label htmlFor="name" className={classes.NewRegisterFormLabel}>
              Name
            </label>
            <input
              className={classes.NewRegisterFormInput}
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className={classes.NewRegisterFormLabelPos}>
            <label htmlFor="email" className={classes.NewRegisterFormLabel}>
              Email address
            </label>
            <input
              className={classes.NewRegisterFormInput}
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className={classes.NewRegisterFormLabelPos}>
            <label htmlFor="mobile" className={classes.NewRegisterFormLabel}>
              Mobile Number
            </label>
            <input
              id="mobile"
              className={classes.NewRegisterFormInput}
              type="number"
              name="mobile"
              placeholder="Enter Your Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <ValidationError
              prefix="Number"
              field="number"
              errors={state.errors}
            />
          </div>

          <div className={classes.NewRegisterFormLabelPos}>
            <label htmlFor="principal" className={classes.NewRegisterFormLabel}>
              Principal Name
            </label>
            <input
              id="principal"
              className={classes.NewRegisterFormInput}
              type="text"
              name="principal"
              placeholder="Enter Principal name"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
            <ValidationError
              prefix="Principal"
              field="name"
              errors={state.errors}
            />
          </div>

          <div className={classes.NewRegisterFormLabelPos}>
            <label
              htmlFor="collegeName"
              className={classes.NewRegisterFormLabel}
            >
              College/University Name
            </label>
            <input
              className={classes.NewRegisterFormInput}
              type="text"
              id="collegeName"
              name="collegeName"
              placeholder="Enter College/University Name"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              required
            />
            <ValidationError
              prefix="College"
              field="name"
              errors={state.errors}
            />
          </div>

          <div className={classes.NewRegisterFormLabelPos}>
            <label
              htmlFor="collegeAddress"
              className={classes.NewRegisterFormLabel}
            >
              Address of College/University
            </label>
            <input
              id="collegeAddress"
              className={classes.NewRegisterFormInput}
              type="text"
              name="collegeAddress"
              placeholder="Enter Address of College/University"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <ValidationError
              prefix="Address"
              field="name"
              errors={state.errors}
            />
          </div>

          <div className={classes.NewRegisterFormButtonBox}>
            <button
              className={classes.NewRegisterFormButton}
              disabled={state.submitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRegisterForm;
