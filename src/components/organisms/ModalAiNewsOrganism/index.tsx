import {SearchBox} from "@/components/molecules/SearchBox";
import {useModalAINewsOrganism} from "@/composables/useModalAINewsOrganism.ts";
import {Title} from "@/components/atoms/Title";
import Vector from "@/assets/img/Vector.png";
import "./style.scss"
import { Button, Col, Image, Row, Tooltip } from 'antd';
import {CommonPagination} from "@/components/atoms/CommonPagination";

export const ModalAINewsOrganism = () => {
    const {
        data,
        searchValue,
        selectedPage,
        handleChangePage,
        setSearchValue,
        handleClickSearch
    } = useModalAINewsOrganism();
    return <div className={"modal-ai-news-organism"}>
        <SearchBox title={"検索"} name={"search"} placeHolder={"記事タイトル / 区分 / タグ"} value={searchValue}
                   setInputValue={setSearchValue} handleClickSearch={handleClickSearch}/>
        <div className={"ai-news-content"}>
            <div className={"flex justify-between mb-6"}>
                <Title text={"AI News 一覧"}/>
                <Button className={"button-common-light"}>NEWS記事を作成</Button>
            </div>

            <Row className={"mb-2 table-header mx-4"}>
                <Col className={"flex px-3 place-items-center"} span={3}>
                    <span>元記事投稿日時</span>
                    <Image height={"10px"} width={"12px"} preview={false} className={"ml-2"} src={Vector}/>
                </Col>
                <Col className={"flex justify-center place-items-center "} span={4}>
                    <span>区分</span>
                    <Image height={"10px"} width={"12px"} preview={false} className={"ml-2"} src={Vector}/></Col>
                <Col className={"text-center"} span={6}>記事タイトル</Col>
                <Col className={"text-center"} span={8}>概要</Col>
                <Col className={"text-center"} span={3}>タグ</Col>
                {/*<Col className={"text-center"} span={}></Col>*/}
            </Row>
            <div className={"table-content "}>
                {data.map((item, index) => (
                    <Row key={index} className={"py-6 mx-4 "}>
                        <Col className={"text-left text-ellipsis whitespace-nowrap pr-5"}
                             span={3}>{item.originalArticlePostingDateAndTime}</Col>
                        <Col className={"text-center text-ellipsis whitespace-nowrap px-5"} span={4}>
                            <div className={"distinguish w-full"}>{item.distinguish}</div>
                        </Col>
                        <Col className={"text-center text-ellipsis whitespace-nowrap overflow-x-hidden px-5"}
                             span={6}>
                            <Tooltip title={item.articleTitle} placement={"topRight"}>
                                {item.articleTitle}
                            </Tooltip></Col>
                        <Col className={"text-center text-ellipsis whitespace-nowrap overflow-x-hidden px-5"}
                             span={8}>
                            <Tooltip title={item.articleTitle} placement={"topRight"}>
                                {item.overview}
                            </Tooltip>
                        </Col>
                        <Col className={"text-center text-ellipsis whitespace-nowrap overflow-x-hidden pl-5"} span={3}>{item.tag}</Col>
                        {/*<Col className={"flex justify-end whitespace-nowrap "} span={1}>*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12"*/}
                        {/*         fill="none">*/}
                        {/*        <path*/}
                        {/*            d="M7.70709 5.39485C8.09764 5.72955 8.09764 6.27312 7.70709 6.60783L1.70826 11.749C1.31771 12.0837 0.68346 12.0837 0.292912 11.749C-0.0976372 11.4143 -0.0976372 10.8707 0.292912 10.536L5.58563 6L0.296036 1.46402C-0.0945128 1.12931 -0.0945128 0.585741 0.296036 0.251032C0.686585 -0.0836773 1.32084 -0.0836773 1.71138 0.251032L7.71021 5.39217L7.70709 5.39485Z"*/}
                        {/*            fill="#4B4B4B"/>*/}
                        {/*    </svg>*/}
                        {/*</Col>*/}
                    </Row>
                ))}

            </div>

            {/*<table className={"w-full"}>*/}
            {/*    <thead className={"pb-2"}>*/}
            {/*    <tr>*/}
            {/*        <th className={"text-center pr-5"}>*/}
            {/*            <div className={"flex justify-center place-items-center"}>*/}
            {/*                <span>元記事投稿日時</span>*/}
            {/*                <Image height={"10px"} width={"12px"} preview={false} className={"ml-2"} src={Vector}/>*/}
            {/*            </div>*/}

            {/*        </th>*/}
            {/*        <th className={"text-center"}>*/}
            {/*            <span>区分</span>*/}
            {/*            <Image height={"10px"} width={"12px"} preview={false} className={"ml-2"} src={Vector}/>*/}
            {/*        </th>*/}
            {/*        <th className={"text-center"}>*/}
            {/*            <span>記事タイトル</span>*/}
            {/*        </th>*/}
            {/*        <th className={"text-center"}>*/}
            {/*            <span>概要</span>*/}
            {/*        </th>*/}
            {/*        <th className={"text-center"}>*/}
            {/*            <span>タグ</span>*/}
            {/*        </th>*/}
            {/*        <th></th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}

            {/*    <tbody className={"table-content"}>*/}
            {/*    {data.map((item, index) => (*/}
            {/*        <tr key={index}  className={"pl-6 "}>*/}
            {/*            <td className={"text-center whitespace-nowrap pr-5 ml-6"}>*/}
            {/*                    {item.originalArticlePostingDateAndTime}*/}
            {/*            </td>*/}
            {/*            <td className={"px-5"}>*/}
            {/*                <div className={"distinguish w-full text-center whitespace-nowrap"}>{item.distinguish}</div>*/}
            {/*            </td>*/}
            {/*            <td className={"text-center whitespace-nowrap overflow-x-hidden px-5"}>{item.articleTitle}</td>*/}
            {/*            <td className={"text-center whitespace-nowrap overflow-x-hidden px-5"}>{item.overview}</td>*/}
            {/*            <td className={"text-center whitespace-nowrap px-5"}>{item.tag}</td>*/}
            {/*            <td className={`text-center whitespace-nowrap py-6`}>*/}
            {/*                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12"*/}
            {/*                     fill="none">*/}
            {/*                    <path*/}
            {/*                        d="M7.70709 5.39485C8.09764 5.72955 8.09764 6.27312 7.70709 6.60783L1.70826 11.749C1.31771 12.0837 0.68346 12.0837 0.292912 11.749C-0.0976372 11.4143 -0.0976372 10.8707 0.292912 10.536L5.58563 6L0.296036 1.46402C-0.0945128 1.12931 -0.0945128 0.585741 0.296036 0.251032C0.686585 -0.0836773 1.32084 -0.0836773 1.71138 0.251032L7.71021 5.39217L7.70709 5.39485Z"*/}
            {/*                        fill="#4B4B4B"/>*/}
            {/*                </svg>*/}
            {/*            </td>*/}
            {/*        </tr>*/}
            {/*    ))}*/}

            {/*    </tbody>*/}
            {/*</table>*/}

            <CommonPagination className={"mt-8"} onPageChange={handleChangePage} selected={selectedPage} total={5}/>
        </div>
    </div>
}