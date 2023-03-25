import { Route, Routes, Navigate } from 'react-router-dom';
import { Users } from './Users/Users';
import { Header } from './NavMenu/NavMenu';
// import { refresh } from 'redux/authOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from 'redux/operations';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { selectIsLoggedIn, selectToken } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';
import { AddUserForm } from './AddUserForm/AddUserForm';

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  // useEffect(() => {
  //   dispatch(refresh());
  // }, [dispatch]);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchUsers(token));
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/login" element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/users" element={<Users />} />
            <Route path="/addUsers" element={<AddUserForm />} />
          </Route>
          <Route path="*" element={<Navigate to="/users" />} />
        </Route>
      </Routes>
    </>
  );
};
