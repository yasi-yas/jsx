import "./App.css";
import myGif from "./download.gif";

function App() {
  let myNumber = Math.floor(Math.random() * 10) + 1;
  if (myNumber === 7) {
    return (
      <div>
        <button>Sec code : {myNumber}</button>
        <img
          src={myGif}
          alt="My Gif"
        />
      </div>
    );
  } else {
    return (<button>Sec code : {myNumber}</button>);
  }
  // return (
  // <div className="h-screen bg-cyan-600 flex flex-col justify-center items-center">
  //   <form className="h-96 w-96 bg-gray-200 flex flex-col justify-center items-center rounded-md">
  //     <div className="h-12 w-56 flex flex-col justify-center items-center mb-4 rounded-md font-bold text-3xl te">
  //       ورود
  //     </div>
  //     <input
  //       type="text"
  //       placeholder="نــام کاربری"
  //       className="h-16 w-80 bg-gray-300 my-3 rounded-md shadow-lg text-center text-gray-500 font-semibold"
  //     />

  //     <input
  //       type="text"
  //       placeholder="رمــز عبــور"
  //       className="h-16 w-80 bg-gray-300 my-3 rounded-md shadow-lg text-center text-gray-500 font-semibold"
  //     />

  //     <button className="h-14 w-80 bg-cyan-600 mt-4 rounded-md shadow-lg text-slate-100 font-semibold">
  //       ورود
  //     </button>
  // </form>
  // </div>
  // );
}

export default App;
