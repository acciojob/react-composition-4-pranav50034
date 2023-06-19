import React from "react";

const Form = ({ type, label, placeholder, updateName }) => {
   return (
      <div>
         <label>{label}</label>
         <input
            type={type}
            placeholder={placeholder}
            onChange={(e) => updateName(e.target.value)}
         />
      </div>
   );
};

export default Form;
