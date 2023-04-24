import AuthWrapper from "../components/auth-wrapper/authWrapper.component";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

const SignInAndSignUp = () => {
    const user = useSelector((state) => state.user.currentUser);

    if (user) {
        return <Navigate replace to="/" />;
    }
    return (
        <div className="container">
            <AuthWrapper />
        </div>
    );
};

export default SignInAndSignUp;
