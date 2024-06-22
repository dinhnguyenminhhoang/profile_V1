import { Link } from "react-router-dom";
import "./App.css";
import Profile from "./Pages/Profile";
import Header from "./components/Header";
function App() {
    return (
        <div className="h-screen mb-80">
            <Header />
            <div className="h-full flex justify-center p-10 items-start mt-[60px]">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-white font-DBold text-4xl">
                        Hello word!
                    </h1>
                    <h1 className="text-white font-DBold text-[6rem] relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-32 after:bg-lime-600 after:shadow-md after:shadow-white">
                        I'm full - stack develop
                    </h1>
                    <p className="font-RMerriweather text-sm text-white max-w-[70%] line-clamp-4">
                        With the foundation of my current experience, I am
                        fervently pursuing the path to becoming a proficient web
                        developer. My journey is marked by a relentless pursuit
                        of knowledge in new programming languages and emerging
                        technologies. I am committed to mastering the
                        intricacies of web development, from understanding the
                        nuances of user experience design to implementing the
                        latest in backend integration. My ambition is to craft
                        website products that are not only user-friendly but
                        also stand at the forefront of innovation. I aim to
                        merge a broad spectrum of creative and technical skills
                        to develop solutions that are both aesthetically
                        pleasing and functionally robust. This dedication to
                        blending creativity with a versatile skill set is driven
                        by my passion for technology and my desire to make a
                        meaningful impact in the digital world. As I continue to
                        grow and evolve as a developer, I seek to contribute to
                        projects that challenge the status quo and set new
                        benchmarks in user engagement and satisfaction.
                    </p>
                    <img
                        src="https://i.pinimg.com/originals/61/c3/6e/61c36e236bdcc77ab100077492bcea1b.gif"
                        alt=""
                        className="w-auto h-[600px]"
                    />
                    <button className="p-2 text-black font-RMerriweather text-sm bg-white rounded-lg btn animate1">
                        Get Started
                    </button>
                    <Profile />
                </div>
            </div>
        </div>
    );
}

export default App;
