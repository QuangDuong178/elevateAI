import {ReactNode} from "react";

type TableProps = {
    header: {
        name: string,
        sortHaving : boolean,
        handleSort : () => void
    },
    data : Array<ReactNode>,


}
export const Table = () => {

}