import { MenuItem } from '@/types/enums/menu-item.ts';
import HomeIcon from '@/assets/img/home-icon.png';
import NewIcon from '@/assets/img/new-icons.png';
import ToolIcon from '@/assets/img/tool-icon.png';
import PromptIcon from '@/assets/img/prompt-icon.png';
import OjtIcon from '@/assets/img/ojt-icon.png';

export const useNavigator = () => {
  const createIconReactNode = (icon: Image, alt: string) => {
    return <img src={icon} alt={alt} />;
  };
  const menuItems: Array<MenuItem> = [
    {
      key: 1,
      icon: createIconReactNode(HomeIcon, 'Home'),
      label: 'ホーム',
    },
    {
      key: 2,
      icon: createIconReactNode(NewIcon, 'News'),
      label: 'AI News',
    },
    {
      key: 3,
      icon: createIconReactNode(ToolIcon, 'Tool'),
      label: 'AI／ITツール',
    },
    {
      key: 4,
      icon: createIconReactNode(PromptIcon, 'Prompt'),
      label: 'プロンプト',
    },
    {
      key: 5,
      icon: createIconReactNode(OjtIcon, 'Ojt'),
      label: 'AI-OJT',
    },
  ];

  return {
    menuItems,
  };

};