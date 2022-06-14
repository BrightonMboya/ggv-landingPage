import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const Contactus = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="">
      <div className={`${styles.bgWrap} ${styles.bg}`}>
        <Image
          src="/contact.jpg"
          layout="fill"
          // width={900}
          // height={800}
          objectFit="cover"
          quality={100}
        />
        <div className="md:flex items-center justify-center text-white">
          <div className={styles.content}>
            <div className="mt-7 flex justify-center items-center">
              <div className="mt-8">
                <h3 className="text-lg font-semibold ml-[15vh] md:text-xl">
                  Book a Demo
                </h3>
                <p className="text-center ml-5 mr-4 md:text-lg ml-0">
                  Get in touch with us to book a demo or for media queries
                </p>
              </div>
            </div>
            <div className="w-full max-w-xs ml-[5vh] mt-8">
              <form
                onSubmit={submitHandler}
                className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4">
                  <label className="text-lg">UserName</label>
                  <input
                    type="text"
                    value={enteredName}
                    onChange={nameChangeHandler}
                    placeholder="Enter Your Name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-6">
                  <label className="text-lg">Email</label>
                  <input
                    type="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={passwordChangeHandler}
                    placeholder="EnterYourEmail"
                    value={enteredPassword}
                  />
                </div>

                <div>
                  <label className="text-lg">Password</label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Type Your Password"
                    value={enteredMessage}
                    onChange={messageChangeHandler}
                  />
                </div>
                <div className="flex items-center mt-4">
                  <input type="checkbox" className="mr-2 leading-tigh" />
                  <span className="text-sm text-center">
                    I Consent to get news, product and service updates from
                    skope.
                  </span>
                </div>

                <div className="mt-5 ml-[8vh]">
                  <button className="shadow bg-skope-blue focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
