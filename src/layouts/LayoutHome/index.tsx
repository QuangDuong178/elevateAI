import {ReactNode} from 'react';
import {Layout} from "antd";
import {Navigator} from "@/components/organisms/Navigator";

type Props = {
    children: ReactNode
}
export const LayoutHome = (props: Props) => {
    const {Content} = Layout;
    const {children} = props;
    return <Layout className='h-screen bg-bg-grey-184'>
        <Navigator/>
        <Content>
            {children}
        </Content>

    </Layout>;
};