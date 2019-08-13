import axios from "axios";

export const URL = 'https://jsonplaceholder.typicode.com';

export function getData(url, dir, params = '', id = '') {
  return axios
    .get(url + dir + params + id)
    .catch(error => {
      if (error) {
        const { response: { data, status, headers } } = error;
        console.warn(
          "data", data,
          "status", status,
          "headers", headers
        );
      }
    })
    .then(response => {
      return response.data;
    });
}

