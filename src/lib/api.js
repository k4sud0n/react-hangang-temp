import axios from 'axios';

export function getAPI() {
    return axios.get('https://hangang-river-temperature-api.now.sh/');
}
  