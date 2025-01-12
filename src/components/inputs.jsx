import { useState } from "react";
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

const Inputs = ({
  setPersonal,
  personal,
  experience,
  setExperience,
  education,
  setEducation,
  certificates,
  setCertificates,
  skills,
  setSkills,
  languages,
  setLanguages,
  hidden,
  setHidden,
}) => {
  const { months, years, skillsProficiency, languageProficiency } = useData();
  const [active, setActive] = useState(null);

  const buttons = [
    {
      img: profileIcon,
      title: "Personal Details",
      component: Personal,
    },
    {
      img: briefcaseIcon,
      title: "Experience",
      component: Experience,
    },
    { img: graduationIcon, title: "Education", component: Education },
    { img: lightningIcon, title: "Skills", component: Skills },
    { img: languageIcon, title: "Languages", component: Languages },
    { img: certificateIcon, title: "Certificates", component: Certificates },
  ];

  const ActiveComponent = buttons[active]?.component;
  return (
    <main className="flex w-full flex-col gap-2 p-8 md:h-full md:min-h-screen md:w-1/2">
      {ActiveComponent ? (
        <ActiveComponent
          languages={languages}
          setLanguages={setLanguages}
          skills={skills}
          setSkills={setSkills}
          certificates={certificates}
          setCertificates={setCertificates}
          education={education}
          setEducation={setEducation}
          setExperience={setExperience}
          experience={experience}
          personal={personal}
          setPersonal={setPersonal}
          months={months}
          years={years}
          languageProficiency={languageProficiency}
          skillsProficiency={skillsProficiency}
          onClose={() => setActive(null)}
        />
      ) : (
        <>
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
            <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 p-3 text-white transition-colors duration-300 ease-in-out hover:bg-blue-700">
              <img className="w-4 pb-1" src={downloadIcon} />
              Download
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default Inputs;
