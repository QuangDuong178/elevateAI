import {SearchBox} from "@/components/molecules/SearchBox";
import {useModalAINewsOrganism} from "@/composables/useModalAINewsOrganism.ts";
import {Title} from "@/components/atoms/Title";
import "./style.scss"
import {Button, Col, Row} from "antd";

export const ModalAINewsOrganism = () => {
    const {data, searchValue, setSearchValue, handleClickSearch} = useModalAINewsOrganism();
    return <div className={"modal-ai-news-organism"}>
        <SearchBox title={"検索"} name={"search"} placeHolder={"記事タイトル / 区分 / タグ"} value={searchValue}
                   setInputValue={setSearchValue} handleClickSearch={handleClickSearch}/>
        <div className={"ai-news-content"}>
            <div className={"flex justify-between mb-6"}>
                <Title text={"AI News 一覧"}/>
                <Button className={"button-common-light"}>NEWS記事を作成</Button>
            </div>

            <Row className={"mb-2"}>
                <Col className={"text-center"} span={4}>元記事投稿日時</Col>
                <Col className={"text-center"} span={3}>区分</Col>
                <Col className={"text-center"} span={6}>記事タイトル</Col>
                <Col className={"text-center"} span={6}>概要</Col>
                <Col className={"text-center"} span={4}>タグ</Col>
                <Col className={"text-center"} span={1}></Col>
            </Row>
            <div className={"table-content"}>
                {data.map((item, index) => (
                    <Row key={index} className={"py-6"}>
                        <Col className={"text-center"} span={4}>{item.originalArticlePostingDateAndTime}</Col>
                        <Col className={"text-center"} span={3}>{item.distinguish}</Col>
                        <Col className={"text-center"} span={6}>{item.articleTitle}</Col>
                        <Col className={"text-center"} span={6}>{item.overview}</Col>
                        <Col className={"text-center"} span={4}>{item.tag}</Col>
                        <Col className={"text-center"} span={1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12"
                                 fill="none">
                                <path
                                    d="M7.70709 5.39485C8.09764 5.72955 8.09764 6.27312 7.70709 6.60783L1.70826 11.749C1.31771 12.0837 0.68346 12.0837 0.292912 11.749C-0.0976372 11.4143 -0.0976372 10.8707 0.292912 10.536L5.58563 6L0.296036 1.46402C-0.0945128 1.12931 -0.0945128 0.585741 0.296036 0.251032C0.686585 -0.0836773 1.32084 -0.0836773 1.71138 0.251032L7.71021 5.39217L7.70709 5.39485Z"
                                    fill="#4B4B4B"/>
                            </svg>
                        </Col>
                    </Row>
                ))}

            </div>
        </div>
    </div>
}