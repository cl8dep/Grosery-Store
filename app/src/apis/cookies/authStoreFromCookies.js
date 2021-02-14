import Cookies from 'universal-cookie';
import moment from 'moment'

const cookies = new Cookies();
const key = 'auth';

export function loadAuthState() {
  try {
    const serializedAuthData = cookies.get(key);
    if (!serializedAuthData) return undefined;
    return serializedAuthData;
  } catch (error) {
    return undefined;
  }
}

export function clearAuthState() {
  cookies.remove(key, {
    path: '/'
  });
}

export function saveAuthState(authState) {
  try {
    let serializedData = JSON.stringify(authState);
    cookies.set(key, serializedData, {
      path: '/',
      expires: moment().add(1, 'month').toDate()
    });
  } catch (error) {
  }
}
