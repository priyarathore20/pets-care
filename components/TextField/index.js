import React from "react";
import "./styles.css";

const TextField = ({ placeholder, onChange, name }) => {
  return (
    <div class="input-container w-full">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        name="fname"
        value=""
        aria-labelledby="label-fname"
        className="bg-white dark:bg-primaryBlue"
      />
      <fieldset class="label bg-transparent" for="fname" id="label-fname">
        <legend class="text bg-transparent">{name}</legend>
      </fieldset>
    </div>
  );
};

export default TextField;
