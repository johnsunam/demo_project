import Router from 'next/router';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const Secret = () => {

  const onLogoutClick = () => {
    cookies.remove('token')
    Router.push("/");
  }

  return (<div>
    <p>Authenticated page</p>
    <button onClick={() => onLogoutClick()}>Logout</button>
  </div>)
}

export default Secret;