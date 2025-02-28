import { useEffect, useState } from "react";
import "./App.css";
import Headar from "./Components/Heders/Headar";
import From_login from "./Components/Forms/Form/From_login";
import Form_sigup from "./Components/Forms/Form/Form_sigup";
import ShowForms from "./Components/hooks/ShowForms";
import Contant_show from "./Components/Contant/Contant_show";

function App() {
  const { activeForm, BackforFrom, handleBackForm, handleFormChange } =
    ShowForms();

  const [isHeaderVisible, setHeaderVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setHeaderVisible(currentScrollY < 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isHeaderVisible && <Headar onFormChange={handleFormChange} />}

      {activeForm === "login" && BackforFrom && (
        <From_login handleBackForm={handleBackForm} />
      )}

      {activeForm === "signup" && BackforFrom && (
        <Form_sigup handleBackForm={handleBackForm} />
      )}

      <Contant_show />
    </>
  );
}

export default App;
