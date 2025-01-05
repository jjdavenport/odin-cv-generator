import useInputs from "./hooks/useInputs";
import Inputs from "./components/inputs";
import Output from "./components/output";

function App() {
  const { personal, setPersonal } = useInputs();
  return (
    <>
      <div>
        <Output />
        <Inputs />
      </div>
    </>
  );
}

export default App;
