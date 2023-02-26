import React from "react";
import { Link } from "react-router-dom";
const SignInForm = () => {
  return (
    <div>
      <form action="">
        <div className="bg-slate-200 pb-[3rem] px-[2rem] pt-[2rem] rounded-xl inline-flex ml-[35%] mt-[3%] flex-col gap-[2rem] ">
          <div className="m-auto text-3xl font-bold font-ubuntu text-blue-700 ">
            Login Form
          </div>
          <div className=" flex flex-col">
            <label className="font-ubuntu text-xl " htmlFor="">
              Enter your email
            </label>
            <input
              className="outline-none text-lg rounded-t border-b-2 bg-red-100 border-y-gray-600 h-[3rem] w-[30vw] "
              type="email"
              name=""
              id=""
            />
          </div>
          <div className=" flex flex-col">
            <label className="font-ubuntu text-xl " htmlFor="">
              Enter your password
            </label>
            <input
              className="outline-none rounded-t text-xl border-b-2 bg-red-100 border-y-gray-600 h-[3rem] w-[30vw] "
              type="password"
              name=""
              id=""
            />
          </div>

          <div>
            <input
              className="cursor-pointer text-xl font-ubuntu px-[3rem] py-2 rounded-3xl bg-yellow-300"
              type="submit"
              value="logIn"
            />
          </div>
          <div>
            <div></div>
            <div className="ml-[8.5rem]">
              if you don't have,{" "}
              <Link className="cursor-pointer font-bold text-blue-800 ">
                create an acount.
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
