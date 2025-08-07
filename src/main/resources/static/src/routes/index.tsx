import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import {Home} from "../pages/Home.tsx";



export const NavigateRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};