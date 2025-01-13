import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import avatarIcon from "../assets/avatar-icon.png";

const useInputs = () => {
  const targetRef = useRef(null);

  const downloadPDF = () => {
    const input = targetRef.current;
    if (!input) return;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = pdfWidth / imgWidth;
      const imgX = 0;
      const imgY = 0;

      pdf.addImage(imgData, "PNG", imgX, imgY, pdfWidth, imgHeight * ratio);
      pdf.save("cv.pdf");
    });
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
