import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useData from "../hooks/useData";
import Button from "./button";
import profileIcon from "../assets/profile-icon.svg";
import briefcaseIcon from "../assets/briefcase-icon.svg";
import graduationIcon from "../assets/graduation-icon.svg";
import lightningIcon from "../assets/lightning-icon.svg";
import languageIcon from "../assets/language-icon.svg";
import certificateIcon from "../assets/certificate-icon.svg";
import Education from "./education";
import Experience from "./experience";
import Languages from "./languages";
import Certificates from "./certificates";
import Personal from "./personal";
import Skills from "./skills";
import downloadIcon from "../assets/download-icon.svg";

const buttons = [
  { img: profileIcon, title: "Personal Details", component: Personal },
  { img: briefcaseIcon, title: "Experience", component: Experience },
  { img: graduationIcon, title: "Education", component: Education },
  { img: lightningIcon, title: "Skills", component: Skills },
  { img: languageIcon, title: "Languages", component: Languages },
  { img: certificateIcon, title: "Certificates", component: Certificates },
];

const MainMenu = ({ setActive, hidden, setHidden, download }) => (
  <motion.div
    initial={{ opacity: 0, x: "-30%" }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: "-30%" }}
    transition={{ duration: 0.3 }}
    className="w-full"
  >
    <h1 className="text-xl font-bold">CV</h1>
    <div className="flex flex-col gap-10">
      <ul className="flex flex-col gap-6 divide-y">
        {buttons.map((button, index) => (
          <Button
            key={index}
            onClick={() => setActive(index)}
            img={button.img}
            title={button.title}
            hidden={hidden}
            setHidden={setHidden}
          />
        ))}
      </ul>
      <button
        onClick={download}
        className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 p-3 text-white transition-colors duration-300 ease-in-out hover:bg-blue-700"
      >
        <img className="w-4 pb-1" src={downloadIcon} alt="Download" />
        Download
      </button>
    </div>
  </motion.div>
);

const ActiveComponent = ({ active, setActive, ...props }) => {
  const Component = buttons[active].component;
  return (
    <motion.div
      initial={{ opacity: 0, x: "30%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "30%" }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Component {...props} onClose={() => setActive(null)} />
    </motion.div>
  );
};

const Inputs = ({
  personal,
  experience,
  education,
  certificates,
  skills,
  languages,
  hidden,
  setHidden,
  download,
  addExperience,
  updateExperience,
  addCertificates,
  updateCertificates,
  addEducation,
  updateEducation,
  addSkills,
  updateSkills,
  addLanguages,
  updateLanguages,
  setPersonal,
  deleteLanguage,
  deleteCertificate,
  deleteEducation,
  deleteExperience,
  deleteSkill,
}) => {
  const { months, years, skillsProficiency, languageProficiency } = useData();
  const [active, setActive] = useState(null);

  const sharedProps = {
    deleteExperience,
    deleteSkill,
    deleteEducation,
    deleteCertificate,
    deleteLanguage,
    setPersonal,
    addLanguages,
    updateLanguages,
    addSkills,
    updateSkills,
    addEducation,
    updateEducation,
    addCertificates,
    updateCertificates,
    addExperience,
    updateExperience,
    languages,
    skills,
    certificates,
    education,
    experience,
    personal,
    months,
    years,
    languageProficiency,
    skillsProficiency,
  };

  return (
    <main className="relative flex max-h-screen w-full flex-col gap-2 overflow-hidden ~md/lg:~p-6/8 md:h-full md:min-h-screen md:max-w-screen-sm">
      <AnimatePresence initial={false} mode="wait">
        {active === null ? (
          <MainMenu
            key="menu"
            setActive={setActive}
            hidden={hidden}
            setHidden={setHidden}
            download={download}
          />
        ) : (
          <ActiveComponent
            key="active"
            active={active}
            setActive={setActive}
            {...sharedProps}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Inputs;
