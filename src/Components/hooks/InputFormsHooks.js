const InputFormsHooks = () => {
  const INPUT_AltirButsSINGup = [
    { type: "text", name: "name", id: "name", placeholder: "" },
    { type: "email", name: "email", id: "email", placeholder: "" },
    { type: "password", name: "password", id: "password", placeholder: "" },
  ];
  const LABEL_AlterButisSINGup = [
    { htmlFor: "name", text: "name" },
    { htmlFor: "email", text: "email" },
    { htmlFor: "password", text: "password" },
  ];
  const INPUT_AltirButsLOGin = [
    { type: "email", name: "email", id: "email", placeholder: "" },
    { type: "password", name: "password", id: "password", placeholder: "" },
  ];
  const LABEL_AlterButisLOGin = [
    { htmlFor: "email", text: "email" },
    { htmlFor: "password", text: "password" },
  ];
  return {
    INPUT_AltirButsLOGin,
    INPUT_AltirButsSINGup,
    LABEL_AlterButisLOGin,
    LABEL_AlterButisSINGup,
  };
};

export default InputFormsHooks;
