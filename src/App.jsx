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
    certificate,
    setCertificate,
    hidden,
    setHidden,
  } = useInputs();
  return (
    <>
      <div className="flex flex-col font-custom md:flex-row">
        <Output
          hidden={hidden}
          education={education}
          experience={experience}
          personal={personal}
          skills={skills}
          languages={languages}
          certificate={certificate}
        />
        <Inputs
          setHidden={setHidden}
          languages={languages}
          setLanguages={setLanguages}
          skills={skills}
          setSkills={setSkills}
          certificate={certificate}
          setCertificate={setCertificate}
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
