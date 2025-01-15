import phoneIcon from "../assets/phone-icon.svg";
import mailIcon from "../assets/mail-icon.svg";
import locationIcon from "../assets/location-icon.svg";
import linkIcon from "../assets/link-icon.svg";
import ExperienceOutput from "./experience-output";
import EducationOutput from "./education-output";
import CertificatesOutput from "./certificates-output";
import { useEffect } from "react";

const Output = ({
  personal,
  experience,
  education,
  skills,
  languages,
  certificates,
  hidden,
  targetRef,
}) => {
  const monthNumber = (month) => {
    const months = {
      January: "01",
      February: "02",
      March: "03",
      April: "04",
      May: "05",
      June: "06",
      July: "07",
      August: "08",
      September: "09",
      October: "10",
      November: "11",
      December: "12",
    };
    return months[month];
  };

  useEffect(() => {
    console.log(certificates);
  }, [certificates]);

  return (
    <>
      <section className="flex w-full bg-gray-200 bg-dots bg-cover bg-no-repeat p-4 text-xs md:h-full md:min-h-screen md:w-1/2">
        <div
          ref={targetRef}
          className="flex w-full flex-1 flex-col gap-4 bg-white p-4 shadow-md"
        >
          <div className="flex justify-between">
            <div className="flex gap-1">
              {personal.avatar === "" ? null : (
                <img
                  className="h-10 w-10 rounded-full object-contain"
                  src={personal.avatar}
                />
              )}
              <div className="flex flex-col">
                <span className="text-lg font-bold">
                  {personal.firstName} <span>{personal.lastName}</span>
                </span>
                <span>{personal.jobTitle}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-1">
                <img className="w-3 object-contain" src={phoneIcon} />
                {personal.phoneNumber}
              </span>
              <span className="flex items-center gap-1">
                <img className="w-3 object-contain" src={mailIcon} />
                {personal.emailAddress}
              </span>
              <span className="flex items-center gap-1">
                <img className="w-3 object-contain" src={locationIcon} />
                {personal.city},<span>{personal.stateCountry}</span>
              </span>
            </div>
          </div>
          {!hidden.experience && (
            <div className="flex flex-col gap-4">
              <span className="border-b border-dashed border-gray-500 py-2 uppercase tracking-widest">
                Experience
              </span>
              {experience.map((i, index) => (
                <ExperienceOutput
                  key={index}
                  experience={i}
                  linkIcon={linkIcon}
                  monthNumber={monthNumber}
                />
              ))}
            </div>
          )}
          {!hidden.education && (
            <div className="flex flex-col gap-4">
              <span className="border-b border-dashed border-gray-500 py-2 uppercase">
                Education
              </span>
              {education.map((i, index) => (
                <EducationOutput
                  key={index}
                  education={i}
                  monthNumber={monthNumber}
                />
              ))}
            </div>
          )}
          {!hidden.certificates && (
            <div className="flex flex-col gap-4">
              <span className="border-b border-dashed border-gray-500 py-2 uppercase">
                Certificates
              </span>
              {certificates.map((i, index) => (
                <CertificatesOutput
                  key={index}
                  certificates={i}
                  linkIcon={linkIcon}
                  monthNumber={monthNumber}
                />
              ))}
            </div>
          )}
          {!hidden.skills && (
            <div className="flex flex-col gap-4">
              <span className="border-b border-dashed border-gray-500 py-2 uppercase">
                Skills
              </span>
              {skills.map((i, index) => (
                <div key={index} className="flex justify-between">
                  <span>{i.skill}</span>
                  <span>{i.proficiency}</span>
                </div>
              ))}
            </div>
          )}
          {!hidden.languages && (
            <div className="flex flex-col gap-4">
              <span className="border-b border-dashed border-gray-500 py-2 uppercase">
                Languages
              </span>
              {languages.map((i, index) => (
                <div key={index} className="flex justify-between">
                  <span>{i.language}</span>
                  <span>{i.proficiency}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Output;
