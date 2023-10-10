import {LoginTemplate} from "@/components/templates/LoginTemplate/LoginTemplate.tsx";
import {LayoutLogin} from "@/layouts/LayoutLogin.tsx";

export const LoginPage = () => {
    return (
        <LayoutLogin>
            <LoginTemplate/>
        </LayoutLogin>
    )
}