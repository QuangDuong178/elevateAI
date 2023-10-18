import {useState} from 'react';
import {AiNews} from "@/types/models/ai-news.ts";

export const useModalAINewsOrganism = () => {
    const [searchValue, setSearchValue] = useState<string>("")
    const [data, setData] = useState<Array<AiNews>>([
        {
            originalArticlePostingDateAndTime: "2023年12月1日16:00",
            distinguish: "区分",
            articleTitle: "記事タイトル記事タイトル記事タイトル記事",
            overview: "記事の内容記事の内容記事の内容記事の内容記事の内容",
            tag: "タグタグタグタグタグタグ",
            link: "http://10.1.37.218:9000/ai-news"
        },
        {
            originalArticlePostingDateAndTime: "2023年12月1日16:00",
            distinguish: "区分",
            articleTitle: "記事タイトル記事タイトル記事タイトル記事",
            overview: "記事の内容記事の内容記事の内容記事の内容記事の内容",
            tag: "タグタグタグタグタグタグ",
            link: "http://10.1.37.218:9000/ai-news"
        },
        {
            originalArticlePostingDateAndTime: "2023年12月1日16:00",
            distinguish: "区分",
            articleTitle: "記事タイトル記事タイトル記事タイトル記事",
            overview: "記事の内容記事の内容記事の内容記事の内容記事の内容",
            tag: "タグタグタグタグタグタグ",
            link: "http://10.1.37.218:9000/ai-news"
        },
        {
            originalArticlePostingDateAndTime: "2023年12月1日16:00",
            distinguish: "区分",
            articleTitle: "記事タイトル記事タイトル記事タイトル記事",
            overview: "記事の内容記事の内容記事の内容記事の内容記事の内容",
            tag: "タグタグタグタグタグタグ",
            link: "http://10.1.37.218:9000/ai-news"
        },
        {
            originalArticlePostingDateAndTime: "2023年12月1日16:00",
            distinguish: "区分",
            articleTitle: "記事タイトル記事タイトル記事タイトル記事",
            overview: "記事の内容記事の内容記事の内容記事の内容記事の内容",
            tag: "タグタグタグタグタグタグ",
            link: "http://10.1.37.218:9000/ai-news"
        }
    ])
    const handleClickSearch = () => {
    };
    return {
        data,
        searchValue,
        setSearchValue,
        handleClickSearch
    };
};
