// import axios from 'axios';
// import vueCookie from "vue-cookie";
//
// export default ({app, store, req}) => {
//
//   if (typeof window != "undefined") {
//     let api_token = vueCookie.get('api_token');
//     let access_token = vueCookie.get('access_token');
//     let created_token = false;
//     if (api_token != null && access_token != null) {
//       axios.defaults.params = {access_token: access_token, api_token: api_token};
//       store.commit('API_TOKEN',api_token);
//       store.commit('ACCESS_TOKEN',access_token);
//       created_token = true;
//     } else {
//       created_token = false;
//       axios.interceptors.response.use(function (response) {
//         if (!created_token) {
//           console.log('create token');
//           if (typeof response.data.access_token != "undefined") {
//             api_token = response.data.api_token;
//             access_token = response.data.access_token;
//             vueCookie.set('api_token', api_token, {expires: '1M'});
//             vueCookie.set('access_token', access_token, {expires: '1M'});
//             store.commit('API_TOKEN',api_token);
//             store.commit('ACCESS_TOKEN',access_token);
//
//             axios.interceptors.request.use((config) => {
//               config.params = {access_token: access_token, api_token: api_token};
//               return config
//             });
//             created_token = true;
//           }
//         }
//         return response;
//       });
//     }
//   }
//
// }
//
//
