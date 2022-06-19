import React from "react";
import { useState } from "react";
import validation from "./validation";

const SignupForm = () => {
    const [values,setValues] = useState({
        fullname:"",
        email:"",
        password:""
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => setErrors(validation(values)),1000
        );

        
    };

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
            // target hmesa name attribute ko target krke value leta h
        });
    }
    return(
        <div className="form-container">
      <h1 className="header">Registration</h1>
    <form className="app"> 
    {/* use different diffrent tag for each input name jisse saare inputs alag alag line se suru ho jayenge */}
        <div>
            <label className="name">Full Name</label>
            <input onChange={handleChange} 
            className="form-field" 
            placeholder="Please enter your full name"
            name="fullname"
            value={values.name} 
            type="text" />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
        </div>
      
      <div>
          <label className="mail">Email</label>
          <input onChange={handleChange} 
          className="form-field" 
          placeholder="Please enter your email" 
          value={values.email} 
          type="email"
          name="email"/>
          {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
          <label className="pwd">Password</label>
          <input onChange={handleChange} 
          className="form-field" 
          placeholder="Please enter your password" 
          value={values.password} 
          type="password"
          name="password"></input>
          {errors.password && <p className="error">{errors.password}</p>}
      </div>
      
      
      <button onClick={handleSubmit} className="btn">Submit</button>
    </form>
    
    </div>
    )
}

export default SignupForm;
// difference b/w useState and ref
// useState - jaise jaise user update krega value wo value tumhare console m show hoti rahegi
// ref - jaise hi user update krta jayega and submit krdega form tb only last input hi show hoga