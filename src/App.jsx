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
  } = useInputs();
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Output
          education={education}
          experience={experience}
          personal={personal}
          skills={skills}
          languages={languages}
          certificate={certificate}
        />
        <Inputs
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
