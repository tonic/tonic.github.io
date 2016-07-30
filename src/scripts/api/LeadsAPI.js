import axios from 'axios';

const LeadsAPI = {
  create(params) {
    return axios.post('http://leads.tonic.io/api/leads', params);
  }
};

export default LeadsAPI;
