const config_env = {
  domain_api: "http://domain.vn/api",
  domain_website: "http://domain.vn"
};
module.exports = {
  env() {
    return config_env;
  }
};
