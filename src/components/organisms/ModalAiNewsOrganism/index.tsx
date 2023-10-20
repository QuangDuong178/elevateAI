import {SearchBox} from "@/components/molecules/SearchBox";
import {useModalAINewsOrganism} from "@/composables/useModalAINewsOrganism.ts";
import {Title} from "@/components/atoms/Title";
import Vector from "@/assets/img/Vector.png";
import "./style.scss"
import {Button, Col, Image, Row, Tooltip} from 'antd';
import {CommonPagination} from "@/components/atoms/CommonPagination";
import {CommonModal} from "@/components/atoms/CommonModal";
import {TextInputWithTitle} from "@/components/molecules/TextInputWithTitle";
import {TextAreaWithTitle} from "@/components/molecules/TextAreaWithTitle";

export const ModalAINewsOrganism = () => {
    const {
        tagRef,
        tags,
        titleRef,
        linkRef,
        postingDateAndTimeRef,
        distinguishRef,
        overviewRef,
        isOpenModal,
        data,
        searchValue,
        selectedPage,
        handleOpenModal,
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
                <Button onClick={handleOpenModal} className={"button-common-light"}>NEWS記事を作成</Button>
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
                <Col className={"text-center"} span={7}>概要</Col>
                <Col className={"text-center pr-10"} span={3}>タグ</Col>
            </Row>
            <div className={"table-content "}>
                {data.map((item, index) => (
                    <Row key={index} className={"py-6 mx-4 "}>
                        <Col className={"text-left text-ellipsis whitespace-nowrap pr-5"}
                             span={3}>{item.originalArticlePostingDateAndTime}</Col>
                        <Col className={"text-center text-ellipsis whitespace-nowrap px-5"} span={4}>
                            <div className={"distinguish w-full"}>{item.distinguish}</div>
                        </Col>
                        <Col className={"text-center whitespace-nowrap overflow-x-hidden px-5"}
                             span={6}>
                            <Tooltip title={item.articleTitle} placement={"topRight"}>
                                {item.articleTitle.substring(0, 19)}
                            </Tooltip></Col>
                        <Col className={"text-center text-ellipsis whitespace-nowrap overflow-x-hidden px-5"}
                             span={7}>
                            <Tooltip title={item.articleTitle} placement={"topRight"}>
                                {item.overview.substring(0, 24)}
                            </Tooltip>
                        </Col>
                        <Col className={" whitespace-nowrap overflow-x-hidden pr-10"} span={3}>{item.tag}

                        </Col>
                        <Col span={1} className={"flex place-items-center justify-end"}>
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
            <CommonModal
                title="AI News 記事登録"
                isOpen={isOpenModal}
                handleOk={() => handleOpenModal()}
                handleCancel={() => handleOpenModal()}
            >
                <div style={{width: "616px"}} className={""}>
                    <TextInputWithTitle name={"title"} placeHolder={""} inputRef={titleRef} title={"タイトル"}/>
                </div>
                <div style={{width: "616px"}} className={""}>
                    <TextAreaWithTitle name={"title"} placeHolder={""} inputRef={titleRef} title={"タイトル"}/>
                </div>
                <div style={{width: "616px"}} className={""}>
                    <TextInputWithTitle name={"title"} placeHolder={""} inputRef={titleRef} title={"タイトル"}/>
                </div>
                <div style={{width: "616px"}} className={""}>
                    <TextInputWithTitle name={"title"} placeHolder={""} inputRef={titleRef} title={"タイトル"}/>
                </div>

            </CommonModal>

            <CommonPagination className={"mt-8"} onPageChange={handleChangePage} selected={selectedPage} total={5}/>
        </div>
    </div>
}