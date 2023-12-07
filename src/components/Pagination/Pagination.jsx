import React, {useState} from 'react';
import classes from './Pagination.module.scss';

const Pagination = ({data, currentPage, setCurrentPage}) => {
  const [indexes, setIndexes] = useState([0, 8]);

  const setPage = (a, b) => {
    setCurrentPage(a, b);
    setIndexes(a, b);
  };
  return (
    <div className={classes.pagination}>
      <div className={classes.info}>
        Showing data {indexes[0] === 0 ? '1' : indexes[0] + 1} to {indexes[1]} of {data.length} entries
      </div>
      <div className={classes.buttons}>
        <button onClick={() => setPage([0, 8])}>{'<'}</button>
        <button onClick={() => setPage([0, 8])}>1</button>
        <button onClick={() => setPage([8, 16])}>2</button>
        <button onClick={() => setPage([16, 24])}>3</button>
        <button onClick={() => setPage([24, 32])}>4</button>
        <button title='in progress...'>...</button>
        <button onClick={() => setPage([96, 100])}>{'>'}</button>
      </div>
    </div>
  );
};

export default Pagination;
