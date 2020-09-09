
import { Cookies } from 'react-cookie';
import axios from 'axios';
const cookies = new Cookies();
import { serverUrl } from '../utils/auth';


const Home = () => {

  const onLoginClick = async () => {
    console.log("Login called");
    const response = await axios.get(serverUrl + '/api/login')
    const token = response.data.token;
    cookies.set('token', token);
  }

  return (<div>
    <h2>Login page</h2>
    <br></br>
    <button onClick={() => onLoginClick()}>Get Token</button>
    <br></br>
    <br></br>
  </div >)
}

export default Home;
