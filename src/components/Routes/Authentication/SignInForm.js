import React from "react";

const SignInForm = () => {
  return (
    <div className=" relative w-[100vw] h-[100vh] ">
    <form action="">
        <div className="absolute right-[35vw] bottom-[35vh] flex flex-col gap-[1rem] ">
          <div className=" flex flex-col">
            <label className="font-ubuntu text-xl " htmlFor="">
              Enter your email
            </label>
            <input
              className="outline-none border-b-2 bg-red-100 border-black h-[3rem] w-[30vw] "
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
              className="outline-none border-b-2 bg-red-100 border-black h-[3rem] w-[30vw] "
              type="password"
              name=""
              id=""
            />
          </div>

          <div>
            {" "}
            <input
              className=" text-xl font-ubuntu px-[3rem] py-2 rounded-3xl bg-yellow-300"
              type="submit"
              value="logIn"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
