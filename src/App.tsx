import './App.css'
import '@/styles/global.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "@/components/pages/LoginPage.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/login"} element={<LoginPage/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
