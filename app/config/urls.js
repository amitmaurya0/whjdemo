
export const BASE_URL = 'http://ec2-52-66-31-93.ap-south-1.compute.amazonaws.com:8080/api/v1/'
// export const BASE_URL = 'http://192.168.0.180:8080/api/v1/'
const URLS = {
  login: `${BASE_URL}user/login`,
  signup: `${BASE_URL}user/signup`,
  players: `${BASE_URL}players`,
}

export default URLS;