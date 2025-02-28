import { useState } from "react";

const ShowForms = () => {
  const [activeForm, setActiveForm] = useState("");
  const [BackforFrom, setBackFrom] = useState(true);
  const handleFormChange = (formType) => {
    setActiveForm(formType);
    setBackFrom(true);
  };
  const handleBackForm = () => {
    setBackFrom(false);
  };
  return { activeForm, BackforFrom, handleBackForm, handleFormChange };
};
export default ShowForms;
