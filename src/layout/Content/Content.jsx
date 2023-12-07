import classes from './Content.module.scss';

const Content = ({children}) => {
  return (
    <div className={classes.content}>
      <div className={classes.title}>Hello Evano 👋🏼,</div>
      {children}
    </div>
  );
};

export default Content;
