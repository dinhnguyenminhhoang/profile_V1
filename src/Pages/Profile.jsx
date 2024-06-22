import Header from "../components/Header";

const Profile = () => {
    return (
        <div>
            <Header />
            <div className="flex justify-center content-center mt-[60px]">
                <div className="border border-gray-300 shadow-lg py-10 px-10 w-4/5 mt-10 mb-10 bg-[rgba(0,0,0,0.4)] rounded-md">
                    <header>
                        <ul className="flex flex-wrap justify-end gap-2">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/minh-ho%C3%A0ng-33b99a299"
                                    className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                                >
                                    <svg
                                        className="w-5 h-5 fill-current"
                                        role="img"
                                        viewBox="0 0 256 256"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g>
                                            <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/dinhnguyenminhhoang"
                                    className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="w-5"
                                        fill="currentColor"
                                    >
                                        <path d="M16.5 2h-9C5.13 2 4 3.13 4 4.5v15c0 1.37 1.13 2.5 2.5 2.5h5.59v-7.33H9.5v-2.84h2.59V9.5c0-2.56 1.68-3.96 4.08-3.96 1.14 0 2.22.08 2.52.12v2.7h-1.73c-1.35 0-1.62.64-1.62 1.59v2.08h3.24l-.42 2.84h-2.82V22H19c1.37 0 2.5-1.13 2.5-2.5v-15C21.5 3.13 20.37 2 19 2z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/dinhnguyenminhhoang"
                                    className="bg-gray-900 p-2 font-medium text-white inline-flex items-center space-x-2 rounded"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        className="w-5"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                    >
                                        <g fill="none">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                                                fill="currentColor"
                                            />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <div className="flex justify-between items-center">
                            <div>
                                <div
                                    className="bg-cover bg-no-repeat rounded-full h-52 w-52"
                                    // style="background-image: url(../bootstrap/dog.jpg)"
                                ></div>
                            </div>
                            <div className="grid justify-items-end">
                                <h1 className="text-7xl font-extrabold">
                                    Đinh Nguyễn Minh Hoàng
                                </h1>
                                <p className="text-xl mt-5">
                                    Aspiring Full-Stack Developer
                                </p>
                            </div>
                        </div>
                    </header>
                    <div className="flex gap-x-10 mt-10">
                        <div className="w-2/6 ">
                            <strong className="text-xl font-medium">
                                CONTACT ME :
                            </strong>
                            <ul className="mt-2 mb-10">
                                <li className="mt-1">
                                    <strong className="mr-1">
                                        Phone(Zalo) : 0337972340
                                    </strong>
                                </li>
                                <li className="mt-1">
                                    <strong className="mr-1">
                                        E-mail : dinhnguyenminhhoang28@gmail.com
                                    </strong>
                                </li>
                                <li className="mt-1">
                                    <strong className="mr-1">
                                        Location : Thủ Đức - Hồ Chí Minh
                                    </strong>
                                </li>
                            </ul>

                            <strong className="text-xl font-medium">
                                SKILLS :
                            </strong>
                            <div className="flex">
                                <ul className="mt-2 mb-10">
                                    <li className="px-2 mt-1">
                                        HTML / CSS / JAVASCRIPT / TYPESCRIPT
                                    </li>
                                    <li className="px-2 mt-1">
                                        CSS MODULE/ TAILWIND CSS / BOOTRAP /
                                        ANTD / SHADUI / MUI
                                    </li>
                                    <li className="px-2 mt-1">
                                        REACTJS / VITEJS / NEXTJS(13,14) /
                                        NODEJS / REACT - NATIVE
                                    </li>
                                    <li className="px-2 mt-1">
                                        REDUX / REDUX - TOOLKIT /REDUX - SAGA /
                                        SWR / CONTEXT
                                    </li>
                                    <li className="px-2 mt-1">
                                        MYSQL / MONGODB
                                    </li>
                                </ul>
                            </div>
                            <strong className="text-xl font-medium">
                                Interests & Hobbies
                            </strong>
                            <ul className="mt-2">
                                <li className="mt-1">
                                    CODE - CODE - CODE - CODE - CODE
                                </li>
                            </ul>
                        </div>
                        <div className="w-4/6">
                            <section>
                                <h2 className="text-2xl pb-1 border-b font-semibold">
                                    About
                                </h2>
                                <p className="mt-4 text-xs">
                                    I have over 1 year of experience working
                                    with ReactJs/NextJs/NodeJs/React-Native, and
                                    I have worked in various roles such as
                                    Front-end Developer, Back-end Developer, and
                                    Mobile Developer. I have participated in
                                    numerous projects with different positions
                                    and technologies. Currently, I am a
                                    freelance developer aiming to provide the
                                    best experience for clients.
                                </p>
                            </section>
                            <section>
                                <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">
                                    Projects
                                </h2>
                                <ul className="mt-1">
                                    <li className="py-2">
                                        <div className="flex justify-between my-1">
                                            <strong>TEACHNOLOGY SHOP</strong>
                                            <p className="flex flex-wrap ">
                                                <span className="bg-gray-600 mb-2 text-white px-2 py-1 ml-1 text-xs rounded">
                                                    Javascript / TypeScript
                                                </span>
                                                <span className="bg-gray-600 mb-2 text-white px-2 py-1 ml-1 text-xs rounded">
                                                    REACTJS / VITEJS
                                                </span>
                                                <span className="bg-gray-600 mb-2 text-white px-2 py-1 ml-1 text-xs rounded">
                                                    REDUX / REDUX - TOOLKIT
                                                </span>
                                                <span className="bg-gray-600 mb-2 text-white px-2 py-1 ml-1 text-xs rounded">
                                                    TAILWINDCSS
                                                </span>
                                                <span className="bg-gray-600 mb-2 text-white px-2 py-1 ml-1 text-xs rounded">
                                                    C#
                                                </span>
                                                <span className="bg-gray-600 mb-2 text-white px-2 py-1 ml-1 text-xs rounded">
                                                    MYSQL
                                                </span>
                                            </p>
                                        </div>
                                        <p className="text-xs">
                                            Mobile and Laptop Sales Management
                                            System: The system manages the sales
                                            of mobile phones and laptops,
                                            involving key entities such as
                                            Employees, Customers, Products,
                                            Suppliers, Orders, and various other
                                            management functionalities. Admin
                                            view / User view,
                                            Authentication/Authorization, CRUD
                                            Employee/Access Control by
                                            Role/Search Employee, CRUD
                                            Customer/Search Customer, Product
                                            and Product Version Management:
                                            CRUD, Search, Supplier Management:
                                            CRUD, Search, Import and Import
                                            Shipments Management: CRUD, Import
                                            History, Order and Order Detail
                                            Management, Cart Item Management,
                                            Product Review and Feedback
                                            Management...
                                        </p>
                                    </li>
                                    <li className="py-2">
                                        <div className="flex justify-between my-1">
                                            <strong>
                                                READING COMIC WEBSITE
                                            </strong>
                                            <p className="flex flex-wrap">
                                                <span className="bg-gray-600 mb-2 text-white px-2 py-1 ml-1 text-xs rounded">
                                                    REACTJS
                                                </span>
                                                <span className="bg-gray-600 mb-2 text-white px-2 py-1 ml-1 text-xs rounded">
                                                    CSS MODULE / BOOSTRAP 5
                                                </span>
                                                <span className="bg-gray-600 mb-2 text-white px-2 py-1 ml-1 text-xs rounded">
                                                    NODEJS / EXPRESSJS
                                                </span>
                                                <span className="bg-gray-600 mb-2 text-white px-2 py-1 ml-1 text-xs rounded">
                                                    MYSQL
                                                </span>
                                                <span className="bg-gray-600 mb-2 text-white px-2 py-1 ml-1 text-xs rounded">
                                                    REDUX / REDUX - TOOLKIT
                                                </span>
                                            </p>
                                        </div>
                                        <ul className="flex mb-2">
                                            <li>
                                                <a
                                                    href="https://github.com/dinhnguyenminhhoang/comicsReact"
                                                    className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                                                >
                                                    SRC CODE
                                                </a>
                                            </li>
                                        </ul>
                                        <p className="text-xs">
                                            Website is an online platform built
                                            to provide a diverse and engaging
                                            reading experience for users, with
                                            the purpose of entertainment and
                                            learning. This project utilizes
                                            modern technologies such as ReactJs
                                            (Frontend), NodeJs and ExpressJs
                                            (Backend), along with a SQL
                                            database. The platform offers a
                                            variety of features including story
                                            and chapter management, user and
                                            admin account management, story
                                            search functionality, commenting,
                                            rating, and collection management.
                                        </p>
                                    </li>
                                    <li className="py-2">
                                        <div className="flex justify-between my-1">
                                            <strong>READING COMICS APP</strong>
                                            <p className="flex flex-wrap">
                                                <span className="bg-gray-600 mb-2 text-white px-2 py-1 ml-1 text-xs rounded">
                                                    REACT NATIVE / EXPOGO
                                                </span>
                                                <span className="bg-gray-600 mb-2 text-white px-2 py-1 ml-1 text-xs rounded">
                                                    JAVASCRIPT / TYPESCRIPT
                                                </span>
                                                <span className="bg-gray-600 mb-2 text-white px-2 py-1 ml-1 text-xs rounded">
                                                    REDUX / REDUX - TOOLKIT
                                                </span>
                                                <span className="bg-gray-600 mb-2 text-white px-2 py-1 ml-1 text-xs rounded">
                                                    GOLANG
                                                </span>
                                                <span className="bg-gray-600 mb-2 text-white px-2 py-1 ml-1 text-xs rounded">
                                                    MY SQL
                                                </span>
                                            </p>
                                        </div>
                                        <ul className="flex mb-2">
                                            <li>
                                                <a
                                                    href="https://github.com/dinhnguyenminhhoang/Comics_app_2024"
                                                    className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                                                >
                                                    SRC CODE
                                                </a>
                                            </li>
                                        </ul>
                                        <p className="text-xs">
                                            The Mobile App Reading Comics
                                            project is a personal endeavor aimed
                                            at enabling users to view comic
                                            series, stories divided into
                                            chapters, categorized by genre.Some
                                            key features include viewing the
                                            list of comics, viewing comic
                                            details, reading chapters and
                                            selecting chapters, logging in,
                                            logging out, profile management,
                                            commenting, viewing history of
                                            comics read, viewing history of
                                            comments made, and searching for
                                            comics,...
                                        </p>
                                    </li>

                                    <li className="py-2">
                                        <div className="flex justify-between my-1">
                                            <strong>CLOTHING SHOP</strong>
                                            <p className="flex">
                                                <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded  p-2">
                                                    NEXTJS(FRONTEND)
                                                </span>
                                                <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded  p-2">
                                                    TAILWIND
                                                </span>
                                                <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded  p-2">
                                                    MONGODB
                                                </span>
                                                <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded  p-2">
                                                    NEXTJS(BACKEND)
                                                </span>
                                            </p>
                                        </div>
                                        <ul className="flex mb-2">
                                            <li>
                                                <a
                                                    href="https://github.com/dinhnguyenminhhoang/e-commerce__nextJs"
                                                    className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                                                >
                                                    SRC CODE
                                                </a>
                                            </li>
                                        </ul>
                                        <p className="text-xs">
                                            The clothing web project is built
                                            using Next.js for modern React web
                                            applications, Tailwind CSS for
                                            customizable UI design, and
                                            JavaScript for client-side
                                            functionality. MongoDB stores and
                                            manages store data including product
                                            and order information. Firebase
                                            handles user authentication,
                                            real-time database operations, and
                                            integrates additional useful
                                            features. JWT ensures secure
                                            transactions between server and
                                            client. This personal project aims
                                            to enhance software development
                                            skills with features like product
                                            management, cart and order handling,
                                            address management, and user
                                            management functionalities.
                                        </p>
                                    </li>
                                </ul>
                            </section>
                            <section>
                                <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">
                                    Work Experiences
                                </h2>
                                <ul className="mt-2">
                                    <li className="pt-2">
                                        <p className="flex justify-between text-sm">
                                            <strong className="text-base">
                                                AFFINA
                                            </strong>
                                            2024 - now
                                        </p>
                                        <p className="flex justify-between text-base">
                                            FE & MOBILE DEVELOPER
                                            <small>HỒ CHÍ MINH</small>
                                        </p>
                                        <p className="text-justify text-xs">
                                            At the company, I undertake coding
                                            tasks to create user interfaces
                                            handling cases related to image
                                            processing. I also handle tasks
                                            related to JavaScript in two main
                                            projects using class components and
                                            functional components combined with
                                            the latest libraries. For mobile
                                            development, I use React Native CLI
                                            to develop applications related to
                                            insurance sales and customer
                                            insurance management.
                                        </p>
                                    </li>
                                    <li className="pt-2">
                                        <p className="flex justify-between text-sm">
                                            <strong className="text-base">
                                                FREELANCER
                                            </strong>
                                            2023 - now
                                        </p>
                                        <p className="flex justify-between text-base">
                                            FULL STACK DEVELOPER
                                            <small>REMOTE</small>
                                        </p>
                                        <p className="text-justify text-xs">
                                            I am a seasoned Full Stack Developer
                                            specializing in remote freelance
                                            work since 2023. My expertise spans
                                            front-end and back-end development,
                                            focusing on creating intuitive user
                                            interfaces and robust server-side
                                            logic. I excel in leveraging modern
                                            frameworks and methodologies to
                                            deliver scalable and impactful
                                            digital solutions.
                                        </p>
                                        <h3 className="text-md my-2">
                                            Key Skills:
                                        </h3>
                                        <ul className="text-xs flex flex-col gap-2">
                                            <li>
                                                Front-end: Advanced proficiency
                                                in crafting responsive and
                                                engaging user interfaces.
                                            </li>
                                            <li>
                                                Back-end: Strong capabilities in
                                                designing and implementing
                                                scalable server-side
                                                architectures.
                                            </li>
                                            <li>
                                                Technologies: Experienced in
                                                using JavaScript frameworks,
                                                libraries, and tools to optimize
                                                performance and functionality.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Profile;
