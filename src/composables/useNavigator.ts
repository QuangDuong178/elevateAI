import {MenuItem} from '@/types/enums/menu-item.ts';
import HomeIcon from '@/assets/img/home-icon.png';
import NewIcon from '@/assets/img/new-icons.png';
import ToolIcon from '@/assets/img/tool-icon.png';
import PromptIcon from '@/assets/img/prompt-icon.png';
import OjtIcon from '@/assets/img/ojt-icon.png';
import Avatar from '@/assets/img/avatar.png';
import {APP_ROUTE} from "@/constant/routes.ts";
import {useState} from "react";
import { Account } from '@/types/models/account.ts';

export const useNavigator = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
    const handleActionSidebar = () => {
        setIsCollapsed(!isCollapsed)
    }

    const user : Account = {
        email : "email.com",
        password: "password",
        avatar :Avatar,
        name:"山田 太郎"
    }

    const menuItems: Array<MenuItem> = [
        {
            link: APP_ROUTE.HOME,
            name: 'ホーム',
            tooltip: 'ホーム',
            icon: HomeIcon,
        },
        {
            link: APP_ROUTE.AI_NEWS,
            name: 'AI News',
            tooltip: 'AI News',
            icon: NewIcon,
        },
        {
            link: APP_ROUTE.AI_IT_TOOLS,
            name: 'AI／ITツール',
            tooltip: 'AI／ITツール',
            icon: ToolIcon,
        },
        {
            link: APP_ROUTE.PROMPT,
            name: 'プロンプト',
            tooltip: 'プロンプト',
            icon: PromptIcon,
        },
        {
            link: APP_ROUTE.AI_OJT,
            name: 'AI-OJT',
            tooltip: 'AI-OJT',
            icon: OjtIcon,
        },
    ];

    return {
        user,
        menuItems,
        isCollapsed,
        handleActionSidebar
    };

};