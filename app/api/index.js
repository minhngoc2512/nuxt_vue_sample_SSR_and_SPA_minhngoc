import axios from 'axios';

export async function ApiConnect({commit, key_commit, url,redirect,cache}) {
  console.time(url);
  await axios
    .get(url, {
      cache: typeof cache != "undefined"?true:false
    })
    .then(response => {
      if (response.data.status_code != 200) {
        throw response.data.message;
      }
      commit(key_commit, response.data.data);
      console.timeEnd(url);
    })
    .catch(error => {
      console.error("api error:" + error + ' , url:' + url);
      if(typeof redirect != "undefined"){
        redirect('/error/404')
      }
      throw error;
    });
}
