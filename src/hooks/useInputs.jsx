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

  const [skills, setSkills] = useState({
    skill: "",
    proficiency: "",
  });

  const [languages, setLanguages] = useState({
    language: "",
    proficiency: "",
  });

  const [certificates, setCertificates] = useState({
    certificationName: "",
    credentialURL: "",
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
    hidden,
    setHidden,
    downloadPDF,
    targetRef,
  };
};

export default useInputs;
