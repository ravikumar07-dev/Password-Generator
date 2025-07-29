import { useState } from "react";
import { IoCopy } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [password, setpassword] = useState("");
  const [length, setLength] = useState(12);
  const [IncludeUppercase, setIncludeUppercase] = useState(false);
  const [IncludeLowercase, setIncludeLowerCase] = useState(false);
  const [IncludeNumbers, setIncludeNumbers] = useState(false);
  const [IncludeSymbols, setIncludeSymbols] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    toast.success("Password Copied!");
  };

  const generatePassword = () => {
    let character = "";
    if (IncludeUppercase) character += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (IncludeLowercase) character += "abcdefghijklmnopqrestuvwxyz";
    if (IncludeNumbers) character += "0123456789";
    if (IncludeSymbols) character += "!@#$%^&*";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }

    if (character.length === 0) {
      toast.error("Please select at least one option!");
      return;
    }
    setpassword(newPassword);
  };
  return (
    <>
      <main className="flex flex-col gap-5 items-center place-content-center h-fit py-3 w-86 bg-[#2c2b2bda] rounded-2xl">
        <h1 className="text-3xl pt-3 font-bold text-white">
          Password Generator
        </h1>
        <div className="flex flex-col w-80 items-center gap-2 text-white ">
          <div className="flex items-center place-content-center w-full h-12 bg-[#24232b] px-4 rounded-2xl">
            <input
              value={password}
              type="text"
              placeholder="R@vI07"
              className="w-full h-full outline-none"
            />
            <IoCopy
              onClick={copyToClipboard}
              className="cursor-pointer text-green-600"
            />
          </div>

          <div className="bg-[rgb(36,35,43)] w-full space-y-4 rounded-2xl">
            <div className="flex justify-between items-center px-4 pt-4">
              <p>Charater Length</p>
              <p className="text-green-600 text-[1.5rem] ">{length}</p>
            </div>

            <div className="flex justify-center ">
              <input
                type="range"
                min="6"
                max="20"
                value={length}
                className="w-70 accent-green-600 cursor-pointer"
                onChange={(e) => setLength(Number(e.target.value))}
              />
            </div>

            <div className="flex items-center gap-5 px-4">
              <input
                type="checkbox"
                name="uppercase"
                className="accent-green-600 size-5 cursor-pointer"
                onChange={() => setIncludeUppercase(!IncludeUppercase)}
              />
              <p>Include Uppercase</p>
            </div>

            <div className="flex items-center gap-5 px-4">
              <input
                type="checkbox"
                name="uppercase"
                className="accent-green-600 size-5 cursor-pointer"
                onChange={() => setIncludeLowerCase(!IncludeLowercase)}
              />
              <p>Include Lowercase</p>
            </div>

            <div className="flex items-center gap-5 px-4">
              <input
                type="checkbox"
                name="uppercase"
                className="accent-green-600 size-5 cursor-pointer"
                onChange={() => setIncludeNumbers(!IncludeNumbers)}
              />
              <p>Include Numbers</p>
            </div>

            <div className="flex items-center gap-5 px-4">
              <input
                type="checkbox"
                name="uppercase"
                className="accent-green-600 size-5 cursor-pointer"
                onChange={() => setIncludeSymbols(!IncludeSymbols)}
              />
              <p>Include Symbsol</p>
            </div>

            <div className="flex justify-center h-20 p-4">
              <button
                className="w-full h-full bg-green-600 rounded-2xl text-xl cursor-pointer"
                onClick={generatePassword}
              >
                Generate Password
              </button>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
    </>
  );
}

export default App;
