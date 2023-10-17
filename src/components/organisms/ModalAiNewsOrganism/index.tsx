import {SearchBox} from "@/components/molecules/SearchBox";
import {useModalAINewsOrganism} from "@/composables/useModalAINewsOrganism.ts";
import {Title} from "@/components/atoms/Title";
import "./style.scss"

export const ModalAINewsOrganism = () => {
    const {searchValue,setSearchValue,handleClickSearch} = useModalAINewsOrganism();
    return <div className={"modal-ai-news-organism"}>
        <SearchBox title={"検索"} name={"search"} placeHolder={"記事タイトル / 区分 / タグ"} value={searchValue} setInputValue={setSearchValue} handleClickSearch={ handleClickSearch}/>
        <div className={"ai-news-content"}>
            <Title text={"AI News 一覧"}/>

        </div>
    </div>
}