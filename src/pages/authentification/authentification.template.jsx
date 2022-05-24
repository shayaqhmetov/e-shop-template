import SignUpForm from '../../components/sign-up-form/sign-up-form.template';
import SignInForm from '../../components/sign-in-form/sign-in-form.template';

import './authentification.styles.scss'

const Authentification = () => {
    return (
        <div className='auth-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
};

export default Authentification;