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
  } = useInputs();
  return (
    <>
      <div className="flex md:flex-row flex-col">
        <Output
          education={education}
          experience={experience}
          personal={personal}
        />
        <Inputs />
      </div>
    </>
  );
}

export default App;
