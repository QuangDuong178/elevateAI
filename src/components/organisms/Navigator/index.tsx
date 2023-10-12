import { Layout, Menu } from 'antd';
import { useNavigator } from '@/composables/useNavigator.tsx';
import "./style.scss"

export const Navigator = () => {
  const { Sider } = Layout;
  const { menuItems } = useNavigator();
  return (
    <Sider className={'navigator-organism'} collapsible width={300}>
      <div className={'demo-logo-vertical'}></div>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['1']}
        items={menuItems}
      />

    </Sider>
  );
};