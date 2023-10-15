import { Avatar, Image, Layout } from 'antd';
import { useNavigator } from '@/composables/useNavigator.ts';
import './style.scss';
import logo from '@/assets/img/logo.png';
import collapse from '@/assets/img/collapse-icon.png';
import dot from '@/assets/img/3dot.png';
import { CSSTransition } from 'react-transition-group';

export const Navigator = () => {
  const { Sider } = Layout;
  const { user, menuItems, isCollapsed, handleActionSidebar } = useNavigator();
  return (
    <Sider className={'navigator-organism'} width={'max-content'}>
      <div className={`sidebar ${isCollapsed ? 'open' : ''}`}>
        <div className='menu-item logo-details'>
          <img src={logo} alt='menu-logo' className='menu-logo bx' />
          <CSSTransition unmountOnExit={true} timeout={300} in={isCollapsed}
                         classNames='slide-fade'>
            <div
              className={'logo-name ml-2'}>ElevateAI
            </div>
          </CSSTransition>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexGrow: 1,
            maxHeight: 'calc(100% - 60px)',
          }}
        >
          <div id='my-scroll' className='my-scroll-active'>
            <ul className='nav-list' style={{ overflow: 'visible' }}>
              {menuItems.map((menuItem, index) => (
                <li key={index}>

                  <div className='menu-item'>
                    <a href={menuItem.link}>
                      <Image preview={false} src={menuItem.icon} className='bx image-icon' />

                      <CSSTransition unmountOnExit={true} timeout={500} in={isCollapsed}
                                     classNames='slide-fade'>
                        <div
                          className={'links_name ml-4'}>{menuItem.name}</div>
                      </CSSTransition>
                    </a>
                  </div>

                </li>
              ))}
            </ul>
            <div className={`flex justify-end sidebar-icon ${isCollapsed ? '' : 'collapsed'}`}>
              <img src={collapse} onClick={handleActionSidebar} alt={''} />
            </div>
          </div>

          <div className='profile'>
            <div className='menu-item flex place-items-center justify-between'>
              <div>
                <Avatar src={user.avatar} className='bx image-icon' />
                <CSSTransition unmountOnExit={true} timeout={500} in={isCollapsed}
                               classNames='slide-fade'>
                          <span
                            className={isCollapsed ? 'links_name ml-4' : 'links_name ml-4'}>{isCollapsed && user.name}</span>

                </CSSTransition>
              </div>
              <CSSTransition unmountOnExit={true} timeout={200} in={isCollapsed}
                             classNames='slide-fade'>
                <Image preview={false} src={dot} className='show-info' />

              </CSSTransition>


            </div>
          </div>
        </div>
      </div>
    </Sider>

  );
};