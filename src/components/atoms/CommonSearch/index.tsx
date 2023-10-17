import {SearchOutlined} from "@ant-design/icons";
import React, {ChangeEvent} from "react";
import "./style.scss"

type CommonSearchProps = {
    name: string;
    placeHolder: string;
    value: string;
    setInputValue: (value: string) => void;
}
export const CommonSearch = (props: CommonSearchProps) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.setInputValue(event.target.value);
    };
    return (
        // <div className="common-search-atom">
        //     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        //     <span className="text-gray-500 sm:text-sm"><SearchOutlined/></span>
        // </div>
        //     <input type="text" name={props.name}
        //            onChange={handleInputChange}
        //            className={"search-input"}
        //            placeholder={props.placeHolder}/>
        // </div>
        <div className={"relative common-search-atom cursor-pointer-none"}>
            <svg className={"absolute search-icon"} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M12.8645 11.3208H12.0515L11.7633 11.0429C12.8067 9.83261 13.3802 8.28751 13.3791 6.68954C13.3791 5.36647 12.9867 4.07312 12.2517 2.97303C11.5166 1.87294 10.4719 1.01553 9.24951 0.509214C8.02716 0.00289847 6.68212 -0.129577 5.38447 0.128541C4.08683 0.386658 2.89487 1.02377 1.95932 1.95932C1.02377 2.89487 0.386658 4.08683 0.128541 5.38447C-0.129577 6.68212 0.00289847 8.02716 0.509214 9.24951C1.01553 10.4719 1.87294 11.5166 2.97303 12.2517C4.07312 12.9867 5.36647 13.3791 6.68954 13.3791C8.34649 13.3791 9.86964 12.7719 11.0429 11.7633L11.3208 12.0515V12.8645L16.4666 18L18 16.4666L12.8645 11.3208ZM6.68954 11.3208C4.12693 11.3208 2.05832 9.25214 2.05832 6.68954C2.05832 4.12693 4.12693 2.05832 6.68954 2.05832C9.25214 2.05832 11.3208 4.12693 11.3208 6.68954C11.3208 9.25214 9.25214 11.3208 6.68954 11.3208Z" fill="#A3A3A3"/>
            </svg>
            <input type={"text"} className={"search-input w-full"} name={props.name} placeholder={props.placeHolder} onInput={handleInputChange}/>
        </div>



    )
}