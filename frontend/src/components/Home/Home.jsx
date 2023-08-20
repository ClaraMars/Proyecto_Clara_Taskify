import classes from "./Home.module.css";
import HomeImage from "../../assets/images/image3.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={classes.home}>
        <div className={classes["home-text"]}>
          <h1>Simplify your life, achieve your balance!</h1>
          <h3>
            Discover our task list app, designed to simplify your life and help
            you efficiently manage your daily activities.
          </h3>
          <div className={classes["home-buttons"]}>
            <button>Schedule A Demo</button>
            <button>
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
        <div className={classes["home-image"]}>
          <img src={HomeImage} alt="Team working" />
        </div>
      </div>
      <div className={classes.work}>
        <div className={classes["work-intro"]}>
          <h2>How Taskify Works</h2>
          <p>
            Our platform is meticulously designed to streamline your life and
            empower you to effectively oversee your day-to-day tasks.
          </p>
        </div>
        <div className={classes["work-plan"]}>
          <div className={classes["work-guide"]}>G</div>
          <div className={classes["work-cards"]}>
            <div className={classes["work-card"]}>
              <h2>Effortless Task Management</h2>
              <p>
                Taskify revolutionizes the way you handle tasks. With its
                intuitive interface, you can easily add, organize, and
                prioritize tasks according to your unique needs. Say goodbye to
                chaos and welcome seamless efficiency.
              </p>
            </div>
            <div className={classes["work-card"]}>
              <h2>Intelligent Prioritization</h2>
              <p>
                Taskify understands that not all tasks are created equal.
                Utilize our smart prioritization features to allocate your time
                and effort wisely. Focus on what truly matters and attain the
                balance you deserve.
              </p>
            </div>
            <div className={classes["work-card"]}>
              <h2>Collaborate Seamlessly</h2>
              <p>
                Enhance teamwork and collaboration by sharing tasks and lists
                with your colleagues, friends, or family. Taskify promotes
                synergy, ensuring everyone stays on the same page and
                accomplishes goals together.
              </p>
            </div>
            <div className={classes["work-card"]}>
              <h2>Stay Informed, Never Miss Out</h2>
              <p>
                Taskify keeps you in the loop with timely reminders and
                notifications. Whether it's an important meeting, a deadline, or
                a personal milestone, we've got your back to ensure you're
                always on track.
              </p>
            </div>
            <div className={classes["work-card"]}>
              <h2>Your Task Universe, Customized</h2>
              <p>
                Tailor Taskify to align with your preferences. Choose themes,
                colors, and layouts that resonate with your style. Your task
                universe, your rules.
              </p>
            </div>
            <div className={classes["work-card"]}>
              <h2>Experience Taskify Today</h2>
              <p>
                Join countless individuals who have already discovered the
                transformative power of Taskify. It's time to simplify,
                prioritize, and conquer. Embrace a balanced life with Taskify,
                because every task matters.
              </p>
            </div>
            <div className={classes["work-button"]}>
              <button>Get Started </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
