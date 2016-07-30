import axios from 'axios';

const LeadsAPI = {
  create(params) {
    return axios.post(__API__ + 'api/leads', params);
  }
};

export default LeadsAPI;
