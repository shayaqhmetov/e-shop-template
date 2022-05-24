import { useState } from 'react';

import { createUserDocumentFromAuth, customCreateUserWithEmailAndPassword } from '../../utils/firebase.utils';

import FormInput from "../../components/form-input/form-input.template";
import Button from "../../components/button/button.template";


import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password doesnt match");
            return;
        }
        try {
            const { user } = await customCreateUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                alert("can not create user email already exsists");
            } else {
                console.log("user creation encoutered an error", err);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }
    return (
        <div className='sign-up-container'>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display name"
                    inputOptions={{
                        onChange: handleChange,
                        value: displayName,
                        name: "displayName",
                        type: "text"
                    }}
                />

                <FormInput
                    label="Email"
                    inputOptions={{
                        onChange: handleChange,
                        value: email,
                        name: "email",
                        type: "email"
                    }}
                />

                <FormInput
                    label="Password"
                    inputOptions={{
                        onChange: handleChange,
                        value: password,
                        name: "password",
                        type: "password"
                    }}
                />

                <FormInput
                    label="Confirm password"
                    inputOptions={{
                        onChange: handleChange,
                        value: confirmPassword,
                        name: "confirmPassword",
                        type: "password"
                    }}
                />

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;