import { useState } from "react";
import rectBig from "/imgs/Rectangle 4@2x.png";
import fbBig from "/imgs/Rectangle 17@2x.png";
import gBig from "/imgs/Group 9@2x.png";
import bgSm from "/imgs/Rectangle 1.png";
import bgLg from "/imgs/Rectangle 1@2x.png";

function App() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    <>
      <div
        style={{
          "--bg-sm-image": `url(${bgSm})`,
          "--bg-lg-image": `url(${bgLg})`,
          "--bg-sm-size": "auto 40%",
          "--bg-lg-size": "100% 30%",
          backgroundAttachment: "fixed",
        }}
        className={`flex flex-col items-center justify-center h-screen bg-no-repeat bg-[image:var(--bg-sm-image)] lg:bg-[image:var(--bg-lg-image)] bg-[length:var(--bg-sm-size)] lg:bg-[length:var(--bg-lg-size)]`}
      >
        <div className="rounded bg-white">
          <div className="shadow-lg text-center p-1">
            <img
              src="imgs/amazon.svg"
              alt="Amazon"
              className="h-10 lg:h-15 w-auto mx-auto"
            />
          </div>
          <div className="w-[80%] mx-auto p-1 lg:p-2">
            <h1 className="text-2xl lg:text-4xl text-my-green text-center">
              Login
            </h1>
            <picture>
              <source media="(min-width: 1280px)" srcSet={rectBig} />
              <img src="imgs/Rectangle 4.png" alt="" />
            </picture>
            <form
              action=""
              method="post"
              className="m-2 lg:m-4 flex flex-col gap-4"
            >
              <input
                type="email"
                className="block border-b-2 border-b-gray-300 focus:outline-none focus:border-b-blue-400 p-1 min-w-full text-md lg:text-xl"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                autoComplete="off"
              />
              {emailError && (
                <p className="text-my-error flex items-center gap-2 text-sm lg:text-md">
                  <img
                    src="imgs/Group 2.svg"
                    alt=""
                    className="size-3 lg:size-5"
                  />
                  {email == ""
                    ? "The email feild is required"
                    : "Invalid email!!"}
                </p>
              )}
              <input
                type="password"
                className="block border-b-2 border-b-gray-300 focus:outline-none focus:border-b-blue-400 p-1 min-w-full text-md lg:text-xl"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
              />
              {passwordError && (
                <p className="text-my-error flex items-center gap-2 text-sm lg:text-md">
                  <img
                    src="imgs/Group 2.svg"
                    alt=""
                    className="size-3 lg:size-5"
                  />
                  Password must be at least 8 characters
                </p>
              )}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (!re.test(email)) {
                    setEmailError(true);
                  }
                  if (password.length < 8) {
                    setPasswordError(true);
                  }
                }}
                type="submit"
                className="block min-w-full text-white text-center rounded-full p-2 bg-my-green text-sm lg:text-2xl hover:cursor-pointer"
              >
                Sign In
              </button>
            </form>
            <div className="flex justify-between text-xs lg:text-xl">
              <a href="/">Forgot Password?</a>
              <a href="/" className="text-my-red">
                New User? Sign Up
              </a>
            </div>
            <p className="p-2 text-center">or</p>
            <button className="flex bg-google text-white rounded p-2 w-full my-2 justify-between items-center hover:cursor-pointer">
              <picture>
                <source media="(min-width: 1280px)" srcSet={gBig} />
                <img
                  src="imgs/Group 9.png"
                  alt=""
                  className="size-5 lg:size-8"
                />
              </picture>
              <div className="mx-auto">Sign in with Google</div>
            </button>
            <button className="flex bg-facebook text-white rounded p-2 w-full my-2 justify-between items-center hover:cursor-pointer">
              <picture>
                <source media="(min-width: 1280px)" srcSet={fbBig} />
                <img
                  src="imgs/Rectangle 17.png"
                  alt=""
                  className="size-5 lg:size-8"
                />
              </picture>
              <div className="mx-auto">Sign in with Facebook</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
