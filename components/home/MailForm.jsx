import React, { useState } from "react";
import styles from "../../styles/main.module.css";

const MailForm = () => {
  const failed = "failed";
  const success = "success";
  const notSubmited = "not";
  const [email, setemail] = useState("");
  const [submitState, setSubmitState] = useState("not");
  const handleEmailFormSubmition = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setemail(e.target.value);
  };
  return (
    <div className="flex w-full mt-20" onSubmit={handleEmailFormSubmition}>
      <form className="flex items-center justify-between w-full md:gap-5 ">
        <label
          htmlFor="emailCollector"
          className="w-1/4 text-base font-extrabold leading-snug tracking-wider uppercase lg:w-2/4 md:w-2/5 md:text-3xl lg:text-5xl "
        >
          sign up for <span className={styles.accenttext}>future</span> Drops
        </label>
        {submitState==success&&<p className="text-base text-green">submited with sucess !</p>}
        {submitState==failed&&<p className="text-base text-red-700">submition failed please try again!</p>}
        <div
          id="input"
          className={`flex items-center w-3/4 lg:w-2/4 md:w-3/5 justify-between pr-2 md:pr-6 border-2 ${
            submitState == notSubmited && "border-white"
          } ${submitState == failed && "border-red-700"} ${
            submitState == success && "border-green"
          }  focus-within:outline-green after:boder-green`}
        >
          <input
            type="email"
            placeholder="enter your email here"
            name="emailCollector"
            required
            className="w-full py-2 pl-2 text-sm capitalize bg-transparent border-none md:text-base md:px-6 md:py-4 focus:outline-none after:boder-green"
          />

          <button className="h-6 px-4 text-sm border-2 border-white md:px-10 md:h-10 hover:bg-gradient-to-tl from-black to-green">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MailForm;
