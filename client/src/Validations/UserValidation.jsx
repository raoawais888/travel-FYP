import * as Yup from 'yup';

 class UserSchema {

 static register =  Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    companyEmail: Yup.string()
        .email('Invalid email')
        .required('Company email is required'),
    companyName: Yup.string()
        .required('Company name is required'),
    country: Yup.string()
        .required('Country is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
});

 static login=  Yup.object().shape({
   
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
});

  }

export default UserSchema;
