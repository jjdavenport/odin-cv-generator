import { useState, useRef } from "react";
import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";

import avatarIcon from "../assets/avatar-icon.png";

const useInputs = () => {
  const targetRef = useRef(null);

  const downloadPDF = () => {
    if (targetRef.current) {
      toPng(targetRef.current)
        .then((dataUrl) => {
          const pdf = new jsPDF();
          const imgProps = pdf.getImageProperties(dataUrl);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
          pdf.save("cv.pdf");
        })
        .catch((error) => {
          console.error("Error generating PDF:", error);
        });
    }
  };

  const [hidden, setHidden] = useState({
    experience: false,
    education: false,
    certificates: false,
    skills: false,
    languages: false,
  });

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

  const [experience, setExperience] = useState([
    {
      jobTitle: "Programmer",
      company: "Mega Corp",
      companyWebsite: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      toPresent: false,
      accomplishments: "Front end developer for Mega Corp.",
    },
  ]);

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        jobTitle: "",
        company: "",
        companyWebsite: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
        toPresent: false,
        accomplishments: "",
      },
    ]);
  };

  const updateExperience = (index, input, value) => {
    const newExperience = [...experience];
    newExperience[index] = { ...experience[index], [input]: value };
    setExperience(newExperience);
  };

  const deleteExperience = (deleteIndex) => {
    if (experience.length > 1) {
      const newExperience = experience.filter(
        (_, index) => index !== deleteIndex,
      );
      setExperience(newExperience);
    }
  };

  const [education, setEducation] = useState([
    {
      school: "Havard",
      degree: "Computer Science",
      fieldOfStudy: "transistors",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      toPresent: false,
      achievements: "",
    },
  ]);

  const addEducation = () => {
    setEducation([
      ...education,
      {
        school: "",
        degree: "",
        fieldOfStudy: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
        toPresent: false,
        achievements: "",
      },
    ]);
  };

  const updateEducation = (index, input, value) => {
    const newEducation = [...education];
    newEducation[index] = { ...education[index], [input]: value };
    setEducation(newEducation);
  };

  const deleteEducation = (deleteIndex) => {
    if (education.length > 1) {
      const newEducation = education.filter(
        (_, index) => index !== deleteIndex,
      );
      setEducation(newEducation);
    }
  };

  const [skills, setSkills] = useState([
    {
      skill: "",
      proficiency: "",
    },
  ]);

  const addSkills = () => {
    setSkills([
      ...skills,
      {
        skill: "",
        proficiency: "",
      },
    ]);
  };

  const updateSkills = (index, input, value) => {
    const newSkill = [...skills];
    newSkill[index] = { ...skills[index], [input]: value };
    setSkills(newSkill);
  };

  const deleteSkill = (deleteIndex) => {
    if (skills.length > 1) {
      const newSkills = skills.filter((_, index) => index !== deleteIndex);
      setSkills(newSkills);
    }
  };

  const [languages, setLanguages] = useState([
    {
      language: "",
      proficiency: "",
    },
  ]);

  const addLanguages = () => {
    setLanguages([
      ...languages,
      {
        language: "",
        proficiency: "",
      },
    ]);
  };

  const updateLanguages = (index, input, value) => {
    const newLanguage = [...languages];
    newLanguage[index] = { ...languages[index], [input]: value };
    setLanguages(newLanguage);
  };

  const deleteLanguage = (deleteIndex) => {
    if (languages.length > 1) {
      const newLanguages = languages.filter(
        (_, index) => index !== deleteIndex,
      );
      setLanguages(newLanguages);
    }
  };

  const [certificates, setCertificates] = useState([
    {
      certificationName: "",
      credentialURL: "",
      issuingOrganization: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      doesNotExpire: false,
      description: "",
    },
  ]);

  const addCertificates = () => {
    setCertificates([
      ...certificates,
      {
        certificationName: "",
        credentialURL: "",
        issuingOrganization: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
        doesNotExpire: false,
        description: "",
      },
    ]);
  };

  const updateCertificates = (index, input, value) => {
    const newCertificate = [...certificates];
    newCertificate[index] = { ...certificates[index], [input]: value };
    setCertificates(newCertificate);
  };

  const deleteCertificate = (deleteIndex) => {
    if (certificates.length > 1) {
      const newCertificates = certificates.filter(
        (_, index) => index !== deleteIndex,
      );
      setCertificates(newCertificates);
    }
  };

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
    hidden,
    setHidden,
    downloadPDF,
    targetRef,
    addExperience,
    addEducation,
    addSkills,
    addLanguages,
    addCertificates,
    updateExperience,
    updateEducation,
    updateSkills,
    updateLanguages,
    updateCertificates,
    deleteExperience,
    deleteEducation,
    deleteCertificate,
    deleteSkill,
    deleteLanguage,
  };
};

export default useInputs;
