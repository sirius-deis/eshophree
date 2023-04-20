import { Routes, Route } from "react-router";

import Header from "./components/header/header.component";
import Home from "./pages/home";
import SignInAndSignUp from "./pages/signIn-and-signUp";
import "./App.css";

function App() {
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
