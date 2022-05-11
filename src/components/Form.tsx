import React from "react";

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
  city: string;
};

const Form = ({ getWeather, setCity, city }: FormPropsType) => {
  return (
    <form onSubmit={getWeather}>
      <input
        type={"text"}
        name={"city"}
        value={city}
        placeholder={"都市名を入力してください"}
        onChange={(event) => setCity(event.target.value)}
      />
      <button type={"submit"}>Get Weather</button>
    </form>
  );
};

export default Form;
