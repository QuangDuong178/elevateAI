import './App.css'
import '@/styles/global.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "@/components/pages/LoginPage";
import {APP_ROUTE} from '@/constant/routes.ts';
import {HomePage} from '@/components/pages/HomePage';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={APP_ROUTE.LOGIN} element={<LoginPage/>}>
                </Route>
                <Route path={APP_ROUTE.HOME} element={<HomePage/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
