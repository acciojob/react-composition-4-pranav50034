import React, { useState } from "react";
import "./../styles/App.css";
import Form from "./Form";

const App = () => {
   let [name, setName] = useState("Enter Name");
   let [email, setEmail] = useState("");
   let [password, setPassword] = useState("");

   function submitForm(e) {
      e.preventDefault();
      let obj = {
         name,
         email,
         password,
      };
      console.log(obj);
   }
   return (
      <div>
         <form onSubmit={submitForm}>
            <Form
               type={"text"}
               placeholder={"Name"}
               updateName={setName}
               label={"Name"}
            />

            <br></br>
            <Form
               type={"email"}
               placeholder={"e@mail.com"}
               updateName={setEmail}
               label={"Email"}
            />
            <br></br>
            <Form
               type={"password"}
               placeholder={""}
               updateName={setPassword}
               label={"Password"}
            />
            <br></br>
            {/* <Form /> */}
            <button type="submit">Submit</button>
         </form>

         {/* <h1>Hello world</h1> */}
      </div>
   );
};

export default App;
