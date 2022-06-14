import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Head } from "next/head";

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
      <Head>
        <title>Welcome to GGV</title>
        <meta name="description" content="Join Our Family" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Syne:wght@400;500;600;700&display=swap');
        </style>
      </Head>
      <div className={`${styles.bgWrap} ${styles.bg}`}>
        <Image
          src="/contact.jpg"
          layout="fill"
          // width={900}
          // height={800}
          objectFit="cover"
          quality={100}
        />
        <div className="flex items-center justify-center text-white">
          <div className={styles.content}>
            <h3 className="text-lg font-semibold md:text-xl text-center px-5">
              If you believe in our mission, you can join us as a tourist and
              also as an Investor
            </h3>
            <div className="max-w-xs md:max-w-3xl lg:max-w-full ml-[5vh] mt-8 flex items-center justify-center">
              <form
                onSubmit={submitHandler}
                className="shadow-md rounded-lg px-7 pt-6 pb-8 mb-4 border-gray border-2"
              >
                <div className="mb-4">
                  <label className="text-lg">User Name</label>
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
                    placeholder="Enter Your Email"
                    value={enteredPassword}
                  />
                </div>

                <div>
                  <label className="text-lg">Password</label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Your Password"
                    value={enteredMessage}
                    onChange={messageChangeHandler}
                  />
                </div>
                <div className="flex items-center mt-4">
                  <div>
                    <input type="checkbox" className="mr-2 leading-tight" />
                    <span className="text-sm text-center">Tourist</span>
                  </div>
                  <div className="ml-5">
                    <input type="checkbox" className="mr-2 leading-tight" />
                    <span className="text-sm text-center">Investor</span>
                  </div>
                </div>

                <div className="mt-5 ml-[8vh]">
                  <button className="shadow bg-green focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded">
                    Join
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
