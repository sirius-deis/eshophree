import { Routes, Route } from "react-router";

import Header from "./components/header/header.component";
import Home from "./pages/home";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
