import React, { useEffect, useState } from 'react';
// modules
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { login, reset } from '../slices/authSlice';
import { toast } from 'react-toastify';
// slice
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
// styles
import styles from '../styles/UserLogin.module.css';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      // navigate('/profil');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  // const navigate = useNavigate('');

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(`${API_URL}/user/login`, {
  //       email,
  //       password,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       navigate('/profil');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       if (error.response && error.response.status === 400) {
  //         setErrorMessage('Invalid email or password');
  //       } else {
  //         setErrorMessage('An error occurred. Please try again later.');
  //       }
  //     });
  // };

  return (
    <>
      <header>
        <Header />
        <nav className={styles.mainnav}>
          <Link className={styles.mainnavitem} to="/connexion">
            <i className={styles.signinicon}>
              <FontAwesomeIcon icon={faCircleUser} />
            </i>
            Sign In
          </Link>
        </nav>
      </header>
      <div className={styles.main}>
        <main className={styles.mainsignin}>
          <section className={styles.signincontent}>
            <i className={styles.signinicon}>
              <FontAwesomeIcon icon={faCircleUser} />
            </i>
            <h1>Sign In</h1>
            <form onSubmit={onSubmit}>
              <div className={styles.inputwrapper}>
                <label htmlFor="username">Username</label>
                <input
                  type="email"
                  name="email"
                  id="username"
                  value={email}
                  onChange={onChange}
                />
                <div className="email error"></div>
              </div>
              <div className={styles.inputwrapper}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={onChange}
                />
                <div className="password error"></div>
              </div>
              <div className={styles.inputremember}>
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <button className={styles.signinbutton} type="submit">
                Sign In
              </button>
            </form>
          </section>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default UserLogin;
