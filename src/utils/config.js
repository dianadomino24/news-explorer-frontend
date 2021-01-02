const newsApiConfig = {
  KEY: process.env.REACT_APP_API_KEY,
  BASE_PATH: 'https://',
};

const mainApiConfig = {
  BASE_URL: 'https://',
  HEADERS: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  CREDENTIALS: 'include',
};

const apiRoutes = {
    SIGNUP: '/signup',
    SIGNIN: '/signin',
    SIGNOUT: '/signout',
    ME: '/users/me',
    ARTICLES: '/articles',
};

export {
    mainApiConfig,
    newsApiConfig,
    apiRoutes,
};