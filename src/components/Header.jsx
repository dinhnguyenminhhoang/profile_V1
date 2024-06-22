import React from "react";
import logoGif from "../assets/imgs/logo.gif";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="h-[60px] flex justify-between items-center p-6  border-b border-[rgba(255,255,255,.4)] bg-[#000001] fixed top-0 right-0 left-0">
            <div className="flex items-center gap-2">
                <img src={logoGif} width={70} height={60} />
                <h1 className="text-xl font-bold font-primary filter bg-gradient-to-r bg-clip-text  text-transparent  from-indigo-500 via-purple-500 to-indigo-500 animate-text">
                    HoàngDev
                </h1>
            </div>
            <div className="flex items-center gap-4 text-lg font-SRegukar text-white">
                <Link
                    to="/"
                    className="hover:text-[rgba(255,255,255,.6)] transition-all"
                >
                    PROJECT
                </Link>
                <Link
                    to="/profile"
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
    );
};

export default Header;
