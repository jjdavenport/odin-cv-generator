import { useState } from "react";

const useInputs = () => {
  const [personal, setPersonal] = useState({
    avatar: "",
    firstName: "John",
    lastName: "Smith",
    jobTitle: "Programmer",
    phoneNumber: "000-000-0000",
    emailAddress: "johnsmith@email.com",
    website: "www.johnsmith.com",
    city: "London",
    stateCountry: "UK",
  });

  const [experience, setExperience] = useState({
    jobTitle: "Programmer",
    company: "Mega Corp",
    companyWebsite: "",
    startMonth: "09",
    startYear: "2023",
    endMonth: "09",
    endYear: "2023",
    toPresent: false,
    jobDescription: "Front end developer for Mega Corp.",
  });

  const [education, setEducation] = useState({
    school: "Havard",
    degree: "Computer Science",
    fieldOfStudy: "transistors",
    startMonth: "02",
    startYear: "2020",
    endMonth: "01",
    endYear: "2023",
    toPresent: false,
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
