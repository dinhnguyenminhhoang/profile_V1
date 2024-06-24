import { useRef, useState } from "react";
import "./App.css";
import Profile from "./Pages/Profile";
import { Link } from "react-router-dom";
import logoGif from "./assets/imgs/logo.gif";
function App() {
    const [refProfile, setRefProfile] = useState();
    const footerRef = useRef();
    const handleStarted = () => {
        refProfile?.scrollIntoView({ behavior: "smooth" });
    };
    const setRef = (ref) => {
        setRefProfile(ref);
    };
    const handleContact = () => {
        footerRef?.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="min-h-screen">
            <div className="h-[60px] flex justify-between items-center p-6  border-b border-[rgba(255,255,255,.4)] bg-[rgba(0,0,0,0.8)] fixed top-0 right-0 left-0  z-[999999]">
                <button
                    onClick={(e) => {
                        e.preventDefault(); // Prevent the default anchor behavior
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth", // Smooth scroll
                        });
                    }}
                    className="flex items-center cursor-pointer scroll-smooth duration-300"
                >
                    <img src={logoGif} width={70} height={60} />
                    <h1 className="text-xl font-bold font-primary filter bg-gradient-to-r bg-clip-text  text-transparent  from-indigo-500 via-purple-500 to-indigo-500 animate-text">
                        HoàngDev
                    </h1>
                </button>
                <div className="flex items-center gap-4 text-lg font-SRegukar text-white">
                    <button
                        onClick={handleStarted}
                        className="hover:text-[rgba(255,255,255,.6)] transition-all"
                    >
                        PROFILE
                    </button>

                    <button
                        onClick={handleContact}
                        className="hover:text-[rgba(255,255,255,.6)] transition-all"
                    >
                        CONTACT ME
                    </button>
                </div>
            </div>
            <div className="h-full flex justify-center p-10 items-start mt-[60px]">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-white font-DBold text-4xl">
                        Hello word!
                    </h1>
                    <h1 className="text-white font-DBold text-[6rem] relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-32 after:bg-lime-600 after:shadow-md after:shadow-white">
                        I'm full - stack developer
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
                    <button
                        onClick={handleStarted}
                        className="p-2 text-black font-RMerriweather text-sm bg-white rounded-lg btn animate1"
                    >
                        Get Started
                    </button>
                    <Profile setRef={setRef} />
                </div>
            </div>
            <section
                ref={footerRef}
                className="bg-[rgba(0,0,0,.4)] flex justify-center w-full"
            >
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <p className="text-4xl font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                            Contact
                        </p>
                    </div>
                    <div className="mb-6 md:mb-0 flex justify-between items-center w-full gap-8">
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="h-6 w-6"
                                >
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="text-lg font-medium leading-6">
                                    Address
                                </h3>
                                <p className="">Thủ Đức - Hồ CHí Minh</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="h-6 w-6"
                                >
                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="text-lg font-medium leading-6">
                                    Contact
                                </h3>
                                <p className="">0337972340</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-5"
                                    fill="currentColor"
                                >
                                    <path d="M16.5 2h-9C5.13 2 4 3.13 4 4.5v15c0 1.37 1.13 2.5 2.5 2.5h5.59v-7.33H9.5v-2.84h2.59V9.5c0-2.56 1.68-3.96 4.08-3.96 1.14 0 2.22.08 2.52.12v2.7h-1.73c-1.35 0-1.62.64-1.62 1.59v2.08h3.24l-.42 2.84h-2.82V22H19c1.37 0 2.5-1.13 2.5-2.5v-15C21.5 3.13 20.37 2 19 2z" />
                                </svg>
                            </div>
                            <a
                                href="https://www.facebook.com/dinhnguyenminhhoang"
                                className="ml-4 mb-4"
                            >
                                <h3 className="text-lg font-medium leading-6">
                                    Facebook
                                </h3>
                                <p className="">Đinh Nguyễn Minh Hoàng</p>
                            </a>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    classNamed="h-6 w-6"
                                >
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="text-lg font-medium leading-6">
                                    Email
                                </h3>
                                <p className="">
                                    dinhnguyenminhhoang28@gmail.com
                                </p>
                            </div>
                        </li>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
