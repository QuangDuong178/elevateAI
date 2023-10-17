import {Title} from "@/components/atoms/Title";
import {CommonSearch} from "@/components/atoms/CommonSearch";
import {Button} from "antd";
import "./style.scss"

type SearchBoxProps = {
    title: string;
    name: string;
    placeHolder: string;
    value: string;
    setInputValue: (value: string) => void;
    handleClickSearch: () => void
}
export const SearchBox = (props: SearchBoxProps) => {

    return (
        <div className={"search-box-molecules"}>
            <Title text={props.title}/>
            <div className={"flex place-items-center mt-2"}>
                <CommonSearch name={props.name} placeHolder={props.placeHolder} value={props.value}
                              setInputValue={props.setInputValue}/>
                <Button className={"ml-2"} type="primary" ghost>
                    検索
                </Button>
            </div>
        </div>
    )

}