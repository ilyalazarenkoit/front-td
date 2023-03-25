import listStyles from '../UserList/UserList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, selectFilter, selectToken } from 'redux/selectors';
import { deleteUser } from 'redux/operations';

const UserList = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const filter = useSelector(selectFilter);
  const users = useSelector(selectUsers);
  function getUsers() {
    return users.filter(user => user.name.toLowerCase().includes(filter));
  }

  return (
    <>
      <ul className={listStyles.list}>
        {getUsers().map(user => {
          const { id } = user;
          return (
            <li className={listStyles.user} key={id}>
              <div>
                <p className={listStyles.text}>Name: {user.name}</p>
                <p className={listStyles.text}>Username: {user.username}</p>
                <p className={listStyles.text}>Email: {user.email}</p>
                <p className={listStyles.text}>Phone: {user.phone}</p>
              </div>
              <div>
                <p className={listStyles.text}>Address: </p>
                <p className={listStyles.text}>City: {user.address.city}</p>
                <p className={listStyles.text}>Street: {user.address.street}</p>
              </div>
              <button
                className={listStyles.delete}
                type="button"
                key={user.id}
                onClick={() => dispatch(deleteUser({ id, token }))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { UserList };
