import axios from 'axios';
import Router from 'next/router';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();
export const serverUrl = 'http://localhost:3001';

export async function handleAuthSSR(params) {
  let token = null;
  const {ctx, router} = params;
  if (ctx.req) {
    token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  }
  else {
    token = cookies.get('token')
  }

  try {
    const response = await axios.get(serverUrl + "/api/token/ping", { headers: { 'Authorization': token } });
    console.log("token ping:", response.data.msg)
  } catch (err) {
  if(router.route !== "/")
    if (ctx.res) {

      ctx.res.writeHead(302, {
        Location: '/'
      })
      ctx.res.end()
    } else {
      Router.push('/')
    }
  }
}