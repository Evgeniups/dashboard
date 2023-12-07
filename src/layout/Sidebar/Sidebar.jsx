import {NavLink} from 'react-router-dom';
import settings from '/setting.svg';
import dashboard from '/sidebar/dashboard.svg';
import product from '/sidebar/product.svg';
import customers from '/sidebar/customers.svg';
import income from '/sidebar/income.svg';
import promote from '/sidebar/promote.svg';
import help from '/sidebar/help.svg';
import close from '/close.svg';
import user from '/sidebar/user-photo.jpg';

import cn from 'classnames';
import classes from './Sidebar.module.scss';

const Sidebar = ({isActive, setIsActive}) => {
  const isSmall = window.innerWidth < 991;
  return (
    <div className={cn(classes.sidebar, isActive ? classes.active : classes.hidden)}>
      {/* <div className={cn(classes.sidebar, {[classes.active]: isActive})}> */}
      <div onClick={() => setIsActive(false)} className={classes.close}>
        <img src={close} alt='' />
      </div>
      <div className={classes.header}>
        <img src={settings} alt='' />
        <div className={classes.head}>
          <div className={classes.title}>Dashboard</div> <span>v.01</span>
        </div>
      </div>
      <div className={classes.menu}>
        <NavLink
          onClick={() => (isSmall ? setIsActive(false) : '')}
          className={({isActive}) => cn(classes.links, classes.withoutLink, {[classes['active-link']]: isActive})}
          to='/'
        >
          <img src={dashboard} alt='' />
          Dashboard
        </NavLink>
        <NavLink
          onClick={() => (isSmall ? setIsActive(false) : '')}
          className={({isActive}) => cn(classes.link, {[classes['active-link']]: isActive})}
          to='/product'
        >
          <img src={product} alt='' />
          Product
        </NavLink>
        <NavLink
          onClick={() => (isSmall ? setIsActive(false) : '')}
          className={({isActive}) => cn(classes.link, {[classes['active-link']]: isActive})}
          to='/customers'
        >
          <img src={customers} alt='' />
          Customers
        </NavLink>
        <NavLink
          onClick={() => (isSmall ? setIsActive(false) : '')}
          className={({isActive}) => cn(classes.link, {[classes['active-link']]: isActive})}
          to='/income'
        >
          <img src={income} alt='' />
          Income
        </NavLink>
        <NavLink
          onClick={() => (isSmall ? setIsActive(false) : '')}
          className={({isActive}) => cn(classes.link, {[classes['active-link']]: isActive})}
          to='/promote'
        >
          <img src={promote} alt='' />
          Promote
        </NavLink>
        <NavLink
          onClick={() => (isSmall ? setIsActive(false) : '')}
          className={({isActive}) => cn(classes.link, {[classes['active-link']]: isActive})}
          to='/help'
        >
          <img src={help} alt='' />
          Help
        </NavLink>
      </div>
      <div className={classes.user}>
        <div className={classes.photo}>
          <img src={user} alt='' />
        </div>
        <div className={classes.info}>
          <div className={classes.name}>Evano</div>
          <div className={classes.position}>Project Manager</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
