import { useState } from "react";
import phoneIcon from "../assets/phone-icon.svg";
import mailIcon from "../assets/mail-icon.svg";
import locationIcon from "../assets/location-icon.svg";

const Output = ({
  personal,
  experience,
  education,
  skills,
  languages,
  certificates,
}) => {
  const [hidden, setHidden] = useState({
    personalI: false,
    experienceI: false,
    educationI: false,
    skillsI: false,
    languagesI: false,
    certificatesI: false,
  });

  return (
    <>
      <section className="flex w-full bg-gray-300 p-4 md:h-full md:min-h-screen md:w-1/2">
        <div className="flex w-full flex-1 flex-col gap-4 bg-white p-4 shadow-md">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <img src={personal.avatar} />
              <span>
                {personal.firstName} <span>{personal.lastName}</span>
              </span>
              <span>{personal.jobTitle}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="flex gap-1">
                <img className="w-3 object-contain" src={phoneIcon} />
                {personal.phoneNumber}
              </span>
              <span className="flex gap-1">
                <img className="w-3 object-contain" src={mailIcon} />
                {personal.emailAddress}
              </span>
              <span className="flex gap-1">
                <img className="w-3 object-contain" src={locationIcon} />
                {personal.city},<span>{personal.stateCountry}</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="uppercase">Experience</span>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>{experience.jobTitle}</span>
                <span>{experience.company}</span>
                <span>{experience.jobDescription}</span>
              </div>
              <div>
                <span>
                  {experience.startMonth}/<span>{experience.startYear}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="uppercase">Education</span>
            <div className="flex justify-between">
              <div className="flex gap-1">
                <span>{education.school}</span>
                <span>-</span>
                <span>{education.degree}</span>
              </div>
              <div>
                <span>{education.startMonth}</span>
                <span>/</span>
                <span>{education.startYear}</span>
              </div>
            </div>
          </div>
          <div>
            <span className="uppercase">Skills</span>
            <div className="flex justify-between">
              <span>{skills[0]}</span>
              <span>{skills[1]}</span>
            </div>
          </div>
          <div>
            <span className="uppercase">Languages</span>
            <div className="flex justify-between">
              <span>{languages[0]}</span>
              <span>{languages[1]}</span>
            </div>
          </div>
          {certificates !== "" ? null : (
            <div>
              <span className="uppercase">Certificates</span>
              <div className="flex justify-between">
                <span>{certificates.name}</span>
                <span>{certificates.website}</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Output;
