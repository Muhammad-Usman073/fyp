import React, { useState } from "react";
import {
  signInWithGooglePopUp,
  signInUsingEmailAndPassword,
} from "../../../utils/Firebase.utils";
const SignInForm = ({ handleSignUpLinkClick, setJoinUs }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [available, setAvailable] = useState(false);
  // conditional css for input fields

  const googleSignInHandler = async (event) => {
    event.preventDefault();
    const { user } = await signInWithGooglePopUp();
    if (user.emailVerified === true) {
      setJoinUs(false);
      if (document.body.classList.contains("overflow-hidden")) {
        document.body.classList.remove("overflow-hidden");
      }
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const signIn = await signInUsingEmailAndPassword(email, password);
      if (email.trim().length === 0 && password.trim().length === 0) {
        alert("please addd your credentials first..!");
      } else {
        return signIn;
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setAvailable(true);
      } else {
      }
    }
    setEmail("");
    setPassword("");
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className=" flex flex-col mt-[4rem] items-center ">
          <div className=" flex flex-col items-center gap-[1rem] ">
            <p className=" font-[700] text-[24px] font-Sans">
              Welcome back, multifasahalaza.store
            </p>
            <p className=" text-[16px] font-[200] text-gray-400 font-Sans">
              welcome back! please enter your details.
            </p>
            <button
              onClick={googleSignInHandler}
              className=" flex items-center gap-[8px] px-[3.5rem] font-[200] py-[.5rem] text-[16px] shadow-md font-Sans border-[1px] rounded "
            >
              <span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAE0ElEQVRIia1WaWxUVRQ+575338ybme4dW8qkrKVKi8i+BgktIphglKCRoglR40JjjKI/XIKSgAhi9IdICtEoCGrAQCzFqJgQF5YgDWCxZVNo04JlgFnevDdvucc/tDNTZjol8P2855zvu+fce889SETQL6zTbfHmo1bLSedsq/ivC4QArkiBIVLF3Ur1WGXCJHlQWT/hmFHAsaM7tmkb14MWBtWHigskGRjrsTrgWGTGKXpNumeir36FOnvOLQjE9u6JvLEc3F705gCymx36bIVCQVZekf9xAx86PJuA4wTrn7EP7sfCEkDMQp0qI9pbfGs+9z2+JKOA0LQrj8wlLYxuzy1Q9yJugFv1Nx5AtzuNAFlW9/yZYMaBK2mCLZPiBjgWEAEy4Aq63CDJvXaK6+yuMv/OfYlzAgCAhEfw2TowdHC5IRVk6BTsUGoXKffXyIFyVLjQNPvcWaPxO3H6OBaWgiyTobPB5f5vGm+u6o0Moju2ah+sxPziVG4SXf+4n1yeu/wVlpeXJqszbaG3X3P+PiZVTSzevjtt2ZCIRDR6uXKoVDkckuWJ6HJ7/ra9rnET0kb2IrJlU87Tz2W6EUhETusq/Yc12vb70Cugp4Ci83xR02E+bET/7FmBRGTtQ1TBuZYXbqgQUYYK0dXLOe9/6nlgwW2yAwAT3YcAgWzO8iIFrx/l1TG67khjJt8RdgCQ6cofN8oiJAKWW/dXbDAoczfeEXYAkCl8OOlskQxUJxOfMiVTwLtfG5uP2T45kz2BuICHRkoy6S19Lg/6+iuOR4EhPnQPQEAQBDViYLcA8CQBALUye/QAwBC6Y5StU94eBAEDuQrASqwhgN52pwQ4AxnVKgonHQOiFG7qJ8aw4JJOHimNya9i8nMWBCU+RPvUBtH+KjAOAAgko703UlowsWl6YFxagYhOpt13EQFUFyzcEHNEomWYDtRUSDIWT4cLAAwYWBLC6vCc1XrB/OYt0wOfpBXIUdP3nO6Q6NKoxJOwWgJGD2aM+acCAUcrJAoXBB/+Il5UJcGR0OmmM7+kJcqEhp/MfCVF27Bp7DCJAQAvf+f3WNmYq7WdxPNQAEApz6s7uOrc1QsDZG8+b3/VbLuSHgcRuGWsDEgMALSKFTODlaXocEh8nyNcRdMal/3ZeSIr+/HzsPQzo9Sbsn3NhhdncQBgAOBVvF9OqA9akWQPBCx3FdT+/NLKXz+8boTTUkfN2NpDHy3c1TTI5cWkfkAAhk1LZimQ/Cc/9n39qehFlfX9kHVhtpuhxSXTagLTynPLuMR127gY7jzQeeTbSwcDPNfDY1yb5+l4GdABFADQHaP1j7rmjecpApZjzdj5RFzYCkvTaExhG2SZwiEghshRciPv9SQ0mFPobV8rmf6Ibc6pYO/VqTcqkTy2aGasdveysKN7bspjAHCIhZ2OtyapMxqeT4Sn9CKv4vlt8Y5J+ZVdZoggy8zaBwSsw6CacfuT2ftm0Is9bT++cGSdjyk5ssogy3wngCK2rpO1eeqbD46c3ceacfi1hbPt5K51LVtDjp4juRTkHBnrmVMdEjY5cbKjTjxf9qwYvfSpexdJmKZDZZ6ue9B65dzRrhMng22toX+7jKAA4igFVP+o3CHVRaPGl1ZXFvc3efwPzr8hgoXBddMAAAAASUVORK5CYII="
                  alt=""
                />
              </span>
              Sign up with Google
            </button>

            <p className=" font-Sans font-[500]">Or</p>
          </div>

          <div className="flex gap-[3rem] mt-[2rem] items-center flex-col">
            <input
              value={email}
              className="border-b outline-none w-[15rem] font-[200] font-Sans"
              placeholder="Email"
              type="email"
              onChange={emailHandler}
            />
            <input
              value={password}
              className="border-b outline-none w-[15rem] font-[200] font-Sans"
              placeholder="Password"
              type="password"
              onChange={passwordHandler}
            />
            {available && (
              <p className="font-Sans text-red-500 ">
                sorry, email or password that you entered does not exist..!{" "}
              </p>
            )}
            <input
              className=" cursor-pointer px-[7rem] font-[200] py-[.6rem] text-[16px] shadow-md bg-black text-white font-Sans rounded "
              type="submit"
              value="Log in"
            />
          </div>
          <div>
            <p className=" mt-[1rem] text-[14px] font-[200] font-Sans">
              Dont't have an account?{" "}
              <span
                onClick={handleSignUpLinkClick}
                className="cursor-pointer font-Sans font-[500] "
              >
                Create an account
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
