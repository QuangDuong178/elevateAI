import {LoginTemplate} from "@/components/templates/LoginTemplate/index.tsx";
import {LayoutLogin} from "@/layouts/LayoutLogin.tsx";

export const LoginPage = () => {
    return (
        <LayoutLogin>
            <LoginTemplate/>
        </LayoutLogin>
    )
}