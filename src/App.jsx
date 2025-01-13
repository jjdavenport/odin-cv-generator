import useInputs from "./hooks/useInputs";
import Inputs from "./components/inputs";
import Output from "./components/output";

function App() {
  const {
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
  } = useInputs();
  return (
    <>
      <div className="flex flex-col font-custom md:flex-row">
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
        <Inputs
          download={downloadPDF}
          hidden={hidden}
          setHidden={setHidden}
          languages={languages}
          setLanguages={setLanguages}
          skills={skills}
          setSkills={setSkills}
          certificates={certificates}
          setCertificates={setCertificates}
          education={education}
          setEducation={setEducation}
          experience={experience}
          setExperience={setExperience}
          personal={personal}
          setPersonal={setPersonal}
        />
      </div>
    </>
  );
}

export default App;
