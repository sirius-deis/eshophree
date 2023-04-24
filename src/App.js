import { Routes, Route } from "react-router";
import { useDispatch } from "react-redux";

import "./App.css";
import useFetch from "./hooks/useFetch";
import { signIn } from "./store/user/user.actions";

import Header from "./components/header/header.component";
import Home from "./pages/home";
import SignInAndSignUp from "./pages/signIn-and-signUp";

function App() {
    const dispatch = useDispatch();
    const [data, isLoading, error] = useFetch("http://localhost:3000/api/v1/users/grab", { credentials: "include" });
    if (data?.data.user) {
        dispatch(signIn(data.data.user));
    }
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignInAndSignUp />} />
            </Routes>
        </div>
    );
}

export default App;
