import { useState } from 'react';
import formStyle from '../AddUserForm/AddUserForm.module.css';
import { addUser } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUsers, selectToken } from 'redux/selectors';

export const AddUserForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [company, setCompany] = useState('');
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const handleChange = e => {
    e.preventDefault();
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    }
    if (e.target.name === 'website') {
      setWebsite(e.target.value);
    }
    if (e.target.name === 'street') {
      setStreet(e.target.value);
    }
    if (e.target.name === 'city') {
      setCity(e.target.value);
    }
    if (e.target.name === 'company') {
      setCompany(e.target.value);
    }
  };

  const onSumbit = e => {
    e.preventDefault();
    let user = {
      name: name.toUpperCase().slice(0, 1) + name.slice(1, name.length),
      username,
      email,
      address: {
        city,
        street,
      },
      phone: number,
      website,
      company: {
        name: company,
      },
    };

    if (users.find(item => item.name === user.name)) {
      alert(`${user.name} is already exist`);
      reset();
      return;
    }
    dispatch(addUser({ user, token }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    setName('');
    setUsername('');
    setCity('');
    setCompany('');
    setStreet('');
    setEmail('');
    setWebsite('');
  };

  return (
    <form onSubmit={onSumbit} className={formStyle.form}>
      <div>
        <label className={formStyle.label}>
          <p className={formStyle.text}>Email :</p>
          <input
            placeholder="helloworld123@gmail.com"
            className={formStyle.input}
            onChange={handleChange}
            value={email}
            type="email"
            name="email"
            required
          />
        </label>
        <label className={formStyle.label}>
          <p className={formStyle.text}>Name :</p>
          <input
            placeholder="Taras, Georgiy, Vasiliy ..."
            className={formStyle.input}
            onChange={handleChange}
            value={name}
            type="text"
            name="name"
            required
          />
        </label>
        <label className={formStyle.label}>
          <p className={formStyle.text}>Number :</p>
          <input
            placeholder="+380991234567"
            className={formStyle.input}
            onChange={handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <label className={formStyle.label}>
          <p className={formStyle.text}>Username :</p>
          <input
            placeholder="superman, wizzard ect..."
            className={formStyle.input}
            onChange={handleChange}
            value={username}
            type="username"
            name="username"
            required
          />
        </label>
      </div>
      <div>
        <label className={formStyle.label}>
          <p className={formStyle.text}>WebSite :</p>
          <input
            placeholder="https://github.com/"
            className={formStyle.input}
            onChange={handleChange}
            value={website}
            type="website"
            name="website"
            required
          />
        </label>
        <label className={formStyle.label}>
          <p className={formStyle.text}>City :</p>
          <input
            placeholder="London, Kiev, Berlin ect.."
            className={formStyle.input}
            onChange={handleChange}
            value={city}
            type="city"
            name="city"
            required
          />
        </label>
        <label className={formStyle.label}>
          <p className={formStyle.text}>Street :</p>
          <input
            placeholder="Backer, Vasilkivska, Sofiivska ect.."
            className={formStyle.input}
            onChange={handleChange}
            value={street}
            type="street"
            name="street"
            required
          />
        </label>
        <label className={formStyle.label}>
          <p className={formStyle.text}>Company :</p>
          <input
            placeholder="Apple, TrafficDevils, Amazon ect..."
            className={formStyle.input}
            onChange={handleChange}
            value={company}
            type="company"
            name="company"
            required
          />
        </label>
      </div>

      <button type="submit" className={formStyle.add}>
        Add to users
      </button>
    </form>
  );
};
