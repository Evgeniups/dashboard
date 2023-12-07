import {NavLink, Outlet} from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import {useState} from 'react';

import burger from '/burger.svg';

import cn from 'classnames';
import classes from './Layout.module.scss';

const Layout = () => {
  const [isActive, setIsActive] = useState(window.innerWidth > 991 ? true : false);

  return (
    <div className={classes.layout}>
      <div onClick={() => setIsActive(!isActive)} className={cn(classes['menu-btn'], {[classes.hidden]: isActive})}>
        <img src={burger} alt='' />
      </div>
      <Sidebar isActive={isActive} setIsActive={setIsActive} />

      <Content>
        <div className={classes.wrapper}>
          <Outlet />
        </div>
      </Content>
    </div>
  );
};

export default Layout;
