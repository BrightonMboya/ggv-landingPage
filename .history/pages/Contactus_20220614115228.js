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
        <div className="flex items-center justify-center text-white">
          <div className={styles.content}>
            <h3 className="text-lg font-semibold md:text-xl text-center px-5">
              If you believe in our mission, you can join us as a tourist and
              also as an Investor
            </h3>
            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div class="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                <form class="mb-0 space-y-6" action="#" method="POST">
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div class="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        class=""
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="password"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div class="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        required
                        class=""
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="company-size"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Company size
                    </label>
                    <div class="mt-1">
                      <select name="company-size" id="company-size" class="">
                        <option value="">Please select</option>
                        <option value="small">1 to 10 employees</option>
                        <option value="medium">11 to 50 employees</option>
                        <option value="large">50+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <input
                      id="terms-and-privacy"
                      name="terms-and-privacy"
                      type="checkbox"
                      class=""
                    />
                    <label
                      for="terms-and-privacy"
                      class="ml-2 block text-sm text-gray-900"
                    >
                      I agree to the
                      <a href="#" class="text-indigo-600 hover:text-indigo-500">
                        Terms
                      </a>
                      and
                      <a href="#" class="text-indigo-600 hover:text-indigo-500">
                        Privacy Policy
                      </a>
                      .
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
