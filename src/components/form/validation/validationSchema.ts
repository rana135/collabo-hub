import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const adminSchema = yup.object().shape({
    password: yup.string().min(6).max(32).required(),
    admin: yup.object().shape({ 
        email: yup.string().email().required("Email is required"),
        password: yup.string().matches(passwordRules, { message: "Please create a stronger password" }).required("Required"),
        name: yup.string().required("Name is required"),
        title: yup.string().required("Title is required"),
        phone: yup.number().required("Number is required"),
        feedback: yup.string().required("Feedback is required"),
        username: yup.string().required("Feedback is required")
    })
})

        