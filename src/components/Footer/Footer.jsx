import "./Footer.css";
import Logo from "../../assets/Logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="border-t-2 bg-slate-50">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-8 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex items-center space-x-2">
                            <img src={Logo} alt="" className="w-12" />
                            <p className="logo-text">
                                <span className=" font-bold text-xl">MMUST-ELC</span>
                                <span className="text-xs block">An Epitome of Excellence</span>
                            </p>
                        </div>

                        <p className="mt-4 max-w-xs text-gray-500">
                            MMUST ELC acknowledges the principles of <b>integrity</b>, <b>leadership</b> and <b>responsibility</b> as fundamental to its governance.
                        </p>

                        <ul className="mt-8 flex gap-6">
                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-[#652727ff] transition hover:opacity-80"
                                >
                                    <span className="sr-only">Facebook</span>

                                    <FaFacebook className="size-6" />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-[#652727ff] transition hover:opacity-80"
                                >
                                    <span className="sr-only">LinkedIn</span>

                                    <FaLinkedin className="size-6" />
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                        <div>
                            <p className="font-medium text-gray-900">Services</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Mentorship </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Peer Training </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Community Events </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Leadership Training </a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Chapter</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Gallery </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Helpful Links</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> FAQs </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> WhatsApp </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Legal</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Terms of Service </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Privacy Policy </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Cookies </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <p className="text-xs text-gray-500">&copy; 2025. MMUST-ELC. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer

// <div className="footer">
//     <p>&copy; 2025 MMUST-ELC. All Rights Reserved.</p>

//     <ul>
//         <li><a href="#">Terms of Service</a></li>
//         <span className="ml-4 font-bold text-xl">&middot;</span>
//         <li><a href="#">Privacy Policy</a></li>
//     </ul>
// </div>