import { signInWIthGooglePopUp, createUserDocumentFromAuth } from '../../utils/firebase.utils';

const SignIn = () => {
    const signIn = async () => {
        const { user } = await signInWIthGooglePopUp();
        await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={signIn}>Sign in</button>
        </div>
    )
};

export default SignIn;