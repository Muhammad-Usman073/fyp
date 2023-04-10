import React, { useState } from "react";
import JoinModal from "./CredentialsModal";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import blackMen from "../../../assets/blackMen.jpg";
const JoinUs = ({ joinUs, setJoinUs }) => {
  const joinHandler = () => {
    if (joinUs === true) {
      setJoinUs(false);
      if (document.body.classList.contains("overflow-hidden")) {
        document.body.classList.remove("overflow-hidden");
      }
    }
  };

  const [signInActive, setSignInActive] = useState(true);
  const [signUpActive, setSignUpActive] = useState(false);

  const handleSignInLinkClick = () => {
    setSignInActive(true);
    setSignUpActive(false);
  };

  const handleSignUpLinkClick = () => {
    setSignInActive(false);
    setSignUpActive(true);
  };
  return (
    <JoinModal>
      <div className="flex shadow-2xl ">
        <div className=" h-[90vh] w-[70vw] bg-white text-black ">
          {signInActive && (
            <SignInForm
              joinUs={joinUs}
              setJoinUs={setJoinUs}
              handleSignUpLinkClick={handleSignUpLinkClick}
            />
          )}
          {signUpActive && (
            <SignUpForm handleSignInLinkClick={handleSignInLinkClick} />
          )}
        </div>
        <div className="h-[90vh] relative w-[70vw]">
          <span
            onClick={joinHandler}
            className="material-symbols-outlined absolute p-[1rem] right-0 cursor-pointer text-white z-50 hover:bg-white hover:rounded-full hover:text-black text-[2rem] "
          >
            close
          </span>

          <img className="h-[90vh] w-[70vw]" src={blackMen} alt="blackMen" />
          <div className=" absolute bg-opacity-[.8] bg-black top-0 bottom-0 left-0 right-0 ">
            <div className="flex flex-col items-start px-[2rem] gap-4 mt-[13rem] ">
              <span className="material-symbols-outlined text-opacity-[1] text-[5rem] text-white ">
                format_quote
              </span>
              <p className="text-white font-[700] text-opacity-[1] text-[30px] font-Sans  ">
                "Fashion is not something that exists in dresses only. Fashion
                is in the sky, in the street; fashion has to do with ideas, the
                way we live, what is happening." - Coco Chanel
              </p>
            </div>
          </div>
        </div>
      </div>
    </JoinModal>
  );
};

export default JoinUs;
