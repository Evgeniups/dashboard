import {useState} from 'react';
import {customers} from '../../state/state';

import {Helmet} from 'react-helmet';
import Pagination from '../../components/Pagination/Pagination';
import Status from '../../components/Status/Status';

import classes from './Customers.module.scss';

import cn from 'classnames';

const Customers = () => {
  const [inputValue, setInputValue] = useState('');

  const [data, setData] = useState(customers);
  const [currentPage, setCurrentPage] = useState([0, 8]);

  const filteredAlbums = () =>
    data.filter(album => {
      return album.name.toLowerCase().includes(inputValue.toLowerCase());
    });
  return (
    <>
      <Helmet>
        <title>Customers</title>
      </Helmet>

      <div className={classes.customers}>
        <div className={classes.header}>
          <div className={classes.text}>
            <h1 className={classes.title}>All Customers</h1>
            <div className={classes.subtitle}>Active Members</div>
          </div>
          <label className={classes.search}>
            <input
              placeholder='Search'
              value={inputValue}
              type='search'
              onChange={e => setInputValue(e.target.value)}
            />
          </label>
        </div>
        <div className={classes.table}>
          <table>
            <thead>
              <tr className={classes.head}>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredAlbums()
                .slice(currentPage[0], currentPage[1])
                .map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.сompany}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.country}</td>
                    <td>{<Status active={item.status} />}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className={classes.cards}>
          {filteredAlbums()
            .slice(currentPage[0], currentPage[1])
            .map(item => (
              <div key={item.id} className={classes.card}>
                <div className={(cn(classes.name), classes['card-item'])}>
                  <span>Name</span>
                  {item.name}
                </div>
                <div className={(cn(classes.сompany), classes['card-item'])}>
                  <span>Company</span>
                  {item.сompany}
                </div>
                <div className={(cn(classes.phone), classes['card-item'])}>
                  <span>Phone</span>
                  {item.phone}
                </div>
                <div className={(cn(classes.email), classes['card-item'])}>
                  <span>email</span>
                  {item.email}
                </div>
                <div className={(cn(classes.country), classes['card-item'])}>
                  <span>Name</span>
                  {item.country}
                </div>

                <div className={(cn(classes.status), classes['card-item'])}>
                  {' '}
                  <span>Status</span>
                  {<Status active={item.status} />}
                </div>
              </div>
            ))}
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} data={data} />
      </div>
    </>
  );
};

export default Customers;
