import React, { useContext } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/AuthContext';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // useEffect(() => {
  //   const loggedInInfo = localStorage.getItem('isLoggedIn');
  //   if (loggedInInfo === "Yes") {
  //     setIsLoggedIn(true);
  //   }
  // }, [])
  // const loginHandler = (email, password, college) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('isLoggedIn','Yes')
  //   setIsLoggedIn(true);
  // };
  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn')
  //   setIsLoggedIn(false);
  // };
  const ctx =useContext(AuthContext)

  return (
    <React.Fragment>
    <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Home/>}
      </main>
      
      </React.Fragment>
  );
  }
export default App;