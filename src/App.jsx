// Components
import Trait from "./components/trait";

//Icons
import { IoIosArrowDown, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TbSettingsCheck, TbShieldDollar } from "react-icons/tb";
import { MdPersonAddAlt } from "react-icons/md";
import { FaGithub, FaGitlab, FaGoogle } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

// picture
import bgImage from "./assets/pictures/codewall.jpg";

// css
import "./App.css";
import Form from "./components/form/Form";

function App() {
  return (
    <>
      <div id="bgParent">
        <img src={bgImage} alt="a wall of code." id="bgImage" />
      </div>
      <main>
        <article>
          <div className="introduction flex flex-col justify-between">
            <div className="flex flex-col midGap">
              <div className="flex flex-col minGap">
                <h2>Start your 30-day free trial</h2>
                <p className="flex items-center minGap text-gray font-sm">
                  <IoIosCheckmarkCircleOutline /> No credit card required
                </p>
              </div>
              <div className="flex flex-col midGap">
                <Trait
                  icon={<MdPersonAddAlt className="traitIcon" />}
                  title="Invite unlimited colleagues"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                />
                <Trait
                  icon={<TbSettingsCheck className="traitIcon" />}
                  title="Ensure compliance"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                />
                <Trait
                  icon={<TbShieldDollar className="traitIcon" />}
                  title="Built-in security"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                />
              </div>
            </div>
            <div className="flex midGap">
              <div className="flex minGap items-center font-sm text-gray termsParent">
                <button className="text-gray pointer transition">Terms</button>
                <span>•</span>
                <button className="text-gray pointer transition">Privacy</button>
                <span>•</span>
                <button className="text-gray pointer transition">Docs</button>
                <span>•</span>
                <button className="text-gray pointer transition">Helps</button>
              </div>
              <div className="flex items-center minGap font-sm pointer">
                <BsGlobe2 />
                <span>English</span>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
          <div className="login">
            <div className="flex flex-col items-center minGap full-width">
              <span className="text-slate">Register with:</span>
              <div className="flex logOptionParent justify-center minGap full-width">
                <button className="pointer logOption text-slate flex minGap items-center font-sm transition">
                  <FaGoogle /> Google
                </button>
                <button className="pointer logOption text-slate flex minGap items-center font-sm transition">
                  <FaGithub /> Github
                </button>
                <button className="pointer logOption text-slate flex minGap items-center font-sm transition">
                  <FaGitlab /> Gitlab
                </button>
              </div>
            </div>
            <div className="flex items-center minGap full-width">
              <hr />
              <span className="font-sm text-slate">OR</span>
              <hr />
            </div>
            <Form />
          </div>
        </article>
      </main>
    </>
  );
}

export default App;