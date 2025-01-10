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
import Skills from "./skills";
import Certificates from "./certificates";
import Personal from "./personal";

const Inputs = ({
  setPersonal,
  personal,
  experience,
  setExperience,
  education,
  setEducation,
  certificate,
  setCertificate,
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
    <main className="flex w-full flex-col gap-10 p-4 md:h-full md:min-h-screen md:w-1/2">
      {ActiveComponent ? (
        <ActiveComponent
          certificate={certificate}
          setCertificate={setCertificate}
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
          <h1 className="text-xl font-medium">CV</h1>
          <ul className="flex flex-col gap-10 divide-y">
            {buttons.map((button, index) => (
              <Button
                key={index}
                onClick={() => setActive(index)}
                img={button.img}
                title={button.title}
              />
            ))}
          </ul>
          <button className="w-full rounded-lg p-2 outline outline-1">
            Download
          </button>
        </>
      )}
    </main>
  );
};

export default Inputs;
