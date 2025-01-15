import useInputs from "./hooks/useInputs";
import Inputs from "./components/inputs";
import Output from "./components/output";

function App() {
  const {
    personal,
    experience,
    education,
    skills,
    languages,
    certificates,
    hidden,
    setHidden,
    downloadPDF,
    targetRef,
    updateExperience,
    addExperience,
    addEducation,
    updateEducation,
    addCertificates,
    updateCertificates,
    addSkills,
    updateSkills,
    addLanguages,
    updateLanguages,
    setPersonal,
  } = useInputs();
  return (
    <>
      <div className="flex flex-col justify-center font-custom md:flex-row">
        <div className="flex w-full justify-end bg-gray-200 md:w-1/2">
          <Output
            targetRef={targetRef}
            hidden={hidden}
            education={education}
            experience={experience}
            personal={personal}
            skills={skills}
            languages={languages}
            certificates={certificates}
          />
        </div>
        <div className="w-full md:w-1/2">
          <Inputs
            addLanguages={addLanguages}
            updateLanguages={updateLanguages}
            addSkills={addSkills}
            updateSkills={updateSkills}
            addEducation={addEducation}
            updateEducation={updateEducation}
            addCertificates={addCertificates}
            updateCertificates={updateCertificates}
            addExperience={addExperience}
            updateExperience={updateExperience}
            download={downloadPDF}
            hidden={hidden}
            setHidden={setHidden}
            languages={languages}
            skills={skills}
            certificates={certificates}
            education={education}
            experience={experience}
            setPersonal={setPersonal}
            personal={personal}
          />
        </div>
      </div>
    </>
  );
}

export default App;
