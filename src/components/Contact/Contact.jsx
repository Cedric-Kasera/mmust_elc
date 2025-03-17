import "./Contact.css"
import message_icon from "../../assets/msg-icon.png"
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LuSendHorizontal } from "react-icons/lu";
import { useState } from "react";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "5351bda1-d187-4bb0-aaab-93e884b19632")

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send Us a Message <img src={message_icon} alt="" /></h3>
                <p>
                    Your <b className="uppercase">feedback</b>, <b className="uppercase">questions</b>, and <b className="uppercase">suggestions</b> are important to us as we strive to provide exceptional service to our Chapter. Feel free to reach out through the contact form or find our contact information below.
                </p>

                <ul>
                    <li>
                        <IoMailOutline className="icon" />
                        <a href="mailto:omarkasera50@gmail.com">omarkasera50@gmail.com
                            <FaArrowUpRightFromSquare />
                        </a>
                    </li>
                    <li>
                        <IoCallOutline className="icon" />
                        0757835421 | 0112273993
                    </li>
                    <li>
                        <IoLocationOutline className="icon" />
                        P.O BOX 150 - 00100 <br /> Kakamega, Kenya
                    </li>
                </ul>
            </div>

            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Full Name</label>
                    <input type="text" name="name" placeholder="eg. John Doe" required />

                    <label>Subject</label>
                    <input type="text" name="subject" placeholder="eg. My Subject" required />

                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="eg. example@mail.com" required />

                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="eg +254 700 000 000" required />

                    <label>Message</label>
                    <textarea name="message" rows="6" placeholder="Enter your message here..." required></textarea>

                    <button type="submit" className="button dark-btn">Send your Message
                        <LuSendHorizontal />
                    </button>
                </form>

                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
