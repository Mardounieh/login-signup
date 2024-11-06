import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TbSettingsCheck } from "react-icons/tb";
import { TbShieldDollar } from "react-icons/tb";
import { MdPersonAddAlt } from "react-icons/md";
import { FaGithub, FaGitlab, FaGoogle } from "react-icons/fa";
import "./App.css";
import Trait from "./components/trait";

function App() {
  return (
    <main>
      <article>
        <div className="introduction">
          <div>
            <div>
              <h2>Start your 30-day free trial</h2>
              <p><IoIosCheckmarkCircleOutline /> No credit card required</p>
            </div>
            <div>
              <Trait
                icon={<MdPersonAddAlt />}
                title="Invite unlimited colleagues"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <Trait
                icon={<TbSettingsCheck />}
                title="Ensure compliance"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <Trait
                icon={<TbShieldDollar />}
                title="Built-in security"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
          </div>
        </div>
        <div className="login">
          <div>
            <span>Register with:</span>
            <button><FaGoogle /> Google</button>
            <button><FaGithub /> Github</button>
            <button><FaGitlab /> Gitlab</button>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
