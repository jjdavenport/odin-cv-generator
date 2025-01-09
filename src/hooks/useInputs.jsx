import { useState } from "react";
import avatarIcon from "../assets/avatar-icon.png";

const useInputs = () => {
  const [personal, setPersonal] = useState({
    avatar: avatarIcon,
    firstName: "John",
    lastName: "Smith",
    jobTitle: "Programmer",
    phoneNumber: "954358968",
    emailAddress: "johnsmith@email.com",
    website: "www.johnsmith.com",
    city: "London",
    stateCountry: "UK",
  });

  const [experience, setExperience] = useState({
    jobTitle: "Programmer",
    company: "Mega Corp",
    companyWebsite: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    toPresent: false,
    accomplishments: "Front end developer for Mega Corp.",
  });

  const [education, setEducation] = useState({
    school: "Havard",
    degree: "Computer Science",
    fieldOfStudy: "transistors",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    toPresent: false,
    achievements: "",
  });

  const [skills, setSkills] = useState(["JavaScript", "Intermediate"]);
  const [languages, setLanguages] = useState(["English", "Native"]);
  const [certificates, setCertificates] = useState({
    name: "",
    website: "",
    issuingOrganization: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    doesNotExpire: false,
    description: "",
  });

  return {
    personal,
    setPersonal,
    experience,
    setExperience,
    education,
    setEducation,
    skills,
    setSkills,
    languages,
    setLanguages,
    certificates,
    setCertificates,
  };
};

export default useInputs;
