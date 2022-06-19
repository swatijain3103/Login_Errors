const validation = (values) => {
   
    let errors={};

    if(!values.fullname){
        errors.fullname="Name is required";
    }
    else if(values.fullname.length <= 2){
        errors.fullname="Please enter atleast two characters";
    }
    if(!values.email){
        errors.email="Email is required";
    }
    else if(!/\$+@\$+\.\$+/.test(values.email)){
        errors.email="Email is invalid";
    }
    if(!values.password){
        errors.password="Password is required";
    }
    else if(values.password.length < 5){
        errors.password="Password must be of 8 characters";
    }


    return errors;
};

export default validation;