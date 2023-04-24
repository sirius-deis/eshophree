import AuthWrapper from "../components/auth-wrapper/authWrapper.component";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const SignInAndSignUp = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.currentUser);
    if (user) {
        navigate("/");
    }
    return (
        <div className="container">
            <AuthWrapper />
        </div>
    );
};

export default SignInAndSignUp;
