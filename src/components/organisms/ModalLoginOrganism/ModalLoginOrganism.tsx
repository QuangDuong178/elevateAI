import {Title} from "@/components/atoms/Title.tsx";
import {TextInputWithTitle} from "@/components/molecules/TextInputWithTitle/TextInputWithTitle.tsx";

const ModalLoginOrganism = () => {
    return (
        <div className={"bg-white p-10 modal-login-organism"}>
            <Title text={"ログイン"}/>
            <Title text={}/>
            <TextInputWithTitle title={"メールアドレス"}></TextInputWithTitle>
        </div>
    )
}

export default ModalLoginOrganism;