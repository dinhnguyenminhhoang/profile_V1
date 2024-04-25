/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="h-screen">
            <div className="h-[60px] flex justify-between items-center p-6  border-b border-[rgba(255,255,255,.4)]">
                <h1 className="text-xl font-bold font-primary filter bg-gradient-to-r bg-clip-text  text-transparent  from-indigo-500 via-purple-500 to-indigo-500 animate-text">
                    HoàngDev
                </h1>
                <div className="flex items-center gap-4 text-lg font-SRegukar text-white">
                    <Link
                        to="/"
                        className="hover:text-[rgba(255,255,255,.6)] transition-all"
                    >
                        PROJECT
                    </Link>
                    <Link
                        to="/"
                        className="hover:text-[rgba(255,255,255,.6)] transition-all"
                    >
                        PROFILE
                    </Link>
                    <Link
                        to="/"
                        className="hover:text-[rgba(255,255,255,.6)] transition-all"
                    >
                        MYCV
                    </Link>
                    <Link
                        to="/"
                        className="hover:text-[rgba(255,255,255,.6)] transition-all"
                    >
                        ORTHER
                    </Link>
                </div>
            </div>
            <div className="h-full flex justify-center p-10 items-start">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-white font-DBold text-4xl">
                        Hello word!
                    </h1>
                    <h1 className="text-white font-DBold text-[6rem] relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-32 after:bg-lime-600 after:shadow-md after:shadow-white">
                        I'm frontend develop
                    </h1>
                    <img
                        src="https://i.pinimg.com/originals/61/c3/6e/61c36e236bdcc77ab100077492bcea1b.gif"
                        alt=""
                        className="w-auto h-[600px]"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
