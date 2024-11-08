import { BiLock } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { MdPersonAddAlt } from "react-icons/md";

export default function Form() {
  return (
    <form action="#" className="flex flex-col full-width">
      <div className="flex flex-col items-center midGap">
        <div className="flex minGap full-width  nameSectionContainer">
          <div className="flex flex-col minGap full-width">
            <label htmlFor="firstname" className="font-sm text-slate pointer">
              First Name
            </label>
            <div className="flex items-center minGap inputContainer transition">
              <MdPersonAddAlt className="traitIcon" />
              <input type="text" id="firstname" placeholder="First Name" />
            </div>
          </div>
          <div className="flex flex-col minGap full-width">
            <label htmlFor="lastname" className="font-sm text-slate pointer">
              Last Name
            </label>
            <div className="flex items-center minGap inputContainer transition">
              <MdPersonAddAlt className="traitIcon" />
              <input type="text" id="lastname" placeholder="Last Name" />
            </div>
          </div>
        </div>
        <div className="flex flex-col minGap full-width">
          <div>
            <label htmlFor="username" className="font-sm text-slate pointer">
              Username
            </label>
            <div className="flex items-center minGap inputContainer transition">
              <BsPersonCircle className="traitIcon" />
              <input type="text" id="username" placeholder="Username" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="font-sm text-slate pointer">
              Email
            </label>
            <div className="flex items-center minGap inputContainer transition">
              <CgMail className="traitIcon" />
              <input type="email" id="email" placeholder="Email" />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="font-sm text-slate pointer">
              Password
            </label>
            <div className="flex items-center minGap inputContainer transition">
              <BiLock className="traitIcon" />
              <input type="password" id="password" placeholder="Password" />
            </div>
          </div>
          <div>
            <input type="submit" value="Submit" className="submit" />
          </div>
        </div>
        <p className="font-sm text-gray text-start full-width">
          By creating an account, you agree to the{" "}
          <a href="#" className="important">Terms of Service</a>. We'll
          occasionally send your account-related emails.{" "}
        </p>
        <p className="font-sm text-slate flex minGap items-center">Already have an account? <button className="log pointer">Login</button></p>
      </div>
    </form>
  );
}
