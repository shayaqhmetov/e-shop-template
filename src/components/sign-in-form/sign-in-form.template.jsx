import { useState } from 'react';

import {
    signInWIthGooglePopUp,
    customSignInWithEmailAndPassword
} from '../../utils/firebase.utils';

import Button from '../button/button.template';
import FormInput from '../form-input/form-input.template';


import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const signInWithGoogle = async () => {
        await signInWIthGooglePopUp();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await customSignInWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (err) {
            switch (err.code) {
                case "auth/user-not-found":
                    alert("User not found");
                    break;
                case "auth/wrong-password":
                    alert("Incorrect password for email");
                    break;
                default:
                    console.log("user creation encoutered an error", err);
            }
            if (err.code === "auth/user-not-found") {
            } else if (err.code === "auth/wrong-password") {
            } else {
            }
        }
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
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
                <div className='buttons-container'>
                    <Button type='submit'>Sign in</Button>
                    <Button type='button' buttonType="google" onClick={signInWithGoogle}>Google Sign in</Button>
                </div>
            </form>

        </div>
    )
}

export default SignInForm;