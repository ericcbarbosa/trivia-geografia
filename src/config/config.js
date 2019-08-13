const env = process.env.NODE_ENV;
const CURRENT_CONFIG = require(`./config/config.${env}.js`);
// import API_URL from `./config/config.${env}.js`

export default CURRENT_CONFIG.default;