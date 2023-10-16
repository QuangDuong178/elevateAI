import {Title} from "@/components/atoms/Title";
import {AINewsHome} from "@/components/molecules/AINewsHome";
import {useModalHomeOrganism} from "@/composables/useModalHomeOrganism.ts";


export const ModalHomeOrganism = () => {
    const {aiNewList} = useModalHomeOrganism();
    return <div>
        <div>
            <Title text={"AI News"}/>
            <div className={"grid grid-cols-3 gap-x-4 mt-4"}>
                {/*<AINewsHome tag={"業務改善"} date={"2023/10/22"}*/}
                {/*            title={"エンジニアによるChatGPT活用術10選【Qiitaから厳選】 | 株式会社SaaSis"}*/}
                {/*            description={"今回の記事では、エンジニアに関する知識を記録・共有するためのサービス「Qiita」でバズったChatGPTに関する記事を紹介します！ "}*/}
                {/*            link={"#"}/>*/}
                {/*<AINewsHome tag={"業務改善"} date={"2023/10/22"}*/}
                {/*            title={"エンジニアによるChatGPT活用術10選【Qiitaから厳選】 | 株式会社SaaSis"}*/}
                {/*            description={"今回の記事では、エンジニアに関する知識を記録・共有するためのサービス「Qiita」でバズったChatGPTに関する記事を紹介します！ "}*/}
                {/*            link={"#"}/>*/}
                {/*<AINewsHome tag={"業務改善"} date={"2023/10/22"}*/}
                {/*            title={"エンジニアによるChatGPT活用術10選【Qiitaから厳選】 | 株式会社SaaSis"}*/}
                {/*            description={"今回の記事では、エンジニアに関する知識を記録・共有するためのサービス「Qiita」でバズったChatGPTに関する記事を紹介します！ "}*/}
                {/*            link={"#"}/>*/}
                {aiNewList.map(item => (
                    <AINewsHome aiNews={item}/>
                ))}
            </div>
        </div>
        <div className={"mt-10 grid grid-cols-2 gap-x-14 "}>
            <div className={"mt-4"}>
                <Title text={"よく使うAIツール"}/>
                <div className={"ai-tools"}>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
}