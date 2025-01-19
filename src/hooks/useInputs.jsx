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
      id: Date.now(),
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
    const newExperience = {
      id: Date.now(),
      jobTitle: "",
      company: "",
      companyWebsite: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      toPresent: false,
      accomplishments: "",
    };
    setExperience((prev) => [newExperience, ...prev]);
  };

  const updateExperience = (id, input, value) => {
    setExperience((prev) =>
      prev.map((experience) =>
        experience.id === id ? { ...experience, [input]: value } : id,
      ),
    );
  };

  const deleteExperience = (id) => {
    setExperience((prev) => prev.filter((experience) => experience.id !== id));
  };

  const [education, setEducation] = useState([
    {
      id: Date.now(),
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
    const newEducation = {
      id: Date.now(),
      school: "",
      degree: "",
      fieldOfStudy: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      toPresent: false,
      achievements: "",
    };
    setEducation((prev) => [newEducation, ...prev]);
  };

  const updateEducation = (id, input, value) => {
    setEducation((prev) =>
      prev.map((education) =>
        education.id === id ? { ...education, [input]: value } : education,
      ),
    );
  };

  const deleteEducation = (id) => {
    setEducation((prev) => prev.filter((education) => education.id !== id));
  };

  const [skills, setSkills] = useState([
    {
      id: Date.now(),
      skill: "",
      proficiency: "",
    },
  ]);

  const addSkills = () => {
    const newSkill = {
      id: Date.now(),
      skill: "",
      proficiency: "",
    };
    setSkills((prev) => [newSkill, ...prev]);
  };

  const updateSkills = (id, input, value) => {
    setSkills((prev) =>
      prev.map((skill) =>
        skill.id === id ? { ...skill, [input]: value } : skill,
      ),
    );
  };

  const deleteSkill = (id) => {
    setSkills((prev) => prev.filter((skill) => skill.id !== id));
  };

  const [languages, setLanguages] = useState([
    {
      id: Date.now(),
      language: "",
      proficiency: "",
    },
  ]);

  const addLanguages = () => {
    const newLanguage = {
      id: Date.now(),
      language: "",
      proficiency: "",
    };
    setLanguages((prev) => [newLanguage, ...prev]);
  };

  const updateLanguages = (id, input, value) => {
    setLanguages((prev) =>
      prev.map((language) =>
        language.id === id ? { ...language, [input]: value } : language,
      ),
    );
  };

  const deleteLanguage = (id) => {
    setLanguages((prev) => prev.filter((language) => language.id !== id));
  };

  const [certificates, setCertificates] = useState([
    {
      id: Date.now(),
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
    const newCertificate = {
      id: Date.now(),
      certificationName: "",
      credentialURL: "",
      issuingOrganization: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      doesNotExpire: false,
      description: "",
    };
    setCertificates((prev) => [newCertificate, ...prev]);
  };

  function updateCertificates(id, input, value) {
    setCertificates((prev) =>
      prev.map((certificate) =>
        certificate.id === id
          ? { ...certificate, [input]: value }
          : certificate,
      ),
    );
  }

  function deleteCertificate(id) {
    setCertificates((prev) =>
      prev.filter((certificate) => certificate.id !== id),
    );
  }

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
