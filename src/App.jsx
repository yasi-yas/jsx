import "./App.css";

function App() {
  return (
    <div className="h-screen bg-cyan-600 flex flex-col justify-center items-center">
      <div className="h-96 w-96 bg-gray-200 flex flex-col justify-center items-center rounded-md">
        <div className="h-12 w-56 flex flex-col justify-center items-center mb-7 rounded-md font-bold text-3xl te">
          ورود
        </div>
        <div className="h-14 w-80 bg-gray-300 flex flex-col justify-center items-center my-3 rounded-md shadow-lg text-gray-500 font-semibold">
          نام کاربری
        </div>
        <div className="h-14 w-80 bg-gray-300 flex flex-col justify-center items-center my-3 rounded-md shadow-lg text-gray-500 font-semibold">
          رمز عبور
        </div>
        <div className="h-14 w-80 bg-cyan-600 flex flex-col justify-center items-center mt-4 rounded-md shadow-lg text-slate-100 font-semibold">
          ورود
        </div>
      </div>
    </div>
  );
}

export default App;
