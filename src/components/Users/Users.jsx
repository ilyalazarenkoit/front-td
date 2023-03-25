import { Filter } from 'components/Filter/Filter';
import { UserList } from 'components/UserList/UserList';
import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';
import css from '../App.module.css';

export const Users = () => {
  const users = useSelector(selectUsers);

  return (
    <div className={css.container}>
      {users.length > 0 ? <Filter /> : null}
      {!users.length ? (
        <h2 className={css.title}>You have no users yet</h2>
      ) : (
        <UserList />
      )}
    </div>
  );
};
