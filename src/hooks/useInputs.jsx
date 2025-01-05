import { useState } from "react";

const useInputs = () => {
  const [personal, setPersonal] = useState({
    avatar: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    phoneNumber: "",
    emailAddress: "",
    website: "",
    city: "",
    stateCountry: "",
  });

  const [experience, setExperience] = useState({
    jobTitle: "",
    company: "",
    companyWebsite: "",
    startMonth: "",
    startYear: "",
    toPresent: false,
    jobDescription: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    toPresent: false,
  });

  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [certificates, setCertificates] = useState({
    certificateName: "",
    credentialWebsite: "",
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
