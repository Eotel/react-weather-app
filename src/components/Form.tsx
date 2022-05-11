import React from "react";

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = (props: FormPropsType) => {
  return (
    <form onSubmit={props.getWeather}>
      <input
        type={"text"}
        name={"city"}
        placeholder={"都市名を入力してください"}
        onChange={(event) => props.setCity(event.target.value)}
      />
      <button type={"submit"}>Get Weather</button>
    </form>
  );
};

export default Form;
