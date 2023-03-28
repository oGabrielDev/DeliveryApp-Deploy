import axios from 'axios';

const endpointRequest = axios.create({
  baseURL: 'https://deliveryapp-deploy-production.up.railway.app/',
});

export const signLogin = async (endpoint, body) => {
  const { data } = await endpointRequest.post(endpoint, body);
  return data;
};

export const getAllProducts = async (endpoint) => {
  const { data } = await endpointRequest.get(endpoint);
  return data;
};

export const getData = async (endpoint, token) => {
  const { data } = await endpointRequest.get(endpoint, {
    headers: { Authorization: token },
  });
  return data;
};

export const postData = async (endpoint, body, token) => {
  const { data } = await endpointRequest.post(endpoint, body, {
    headers: { Authorization: token },
  });
  return data;
};

export const deleteData = async (endpoint, token) => {
  await endpointRequest.delete(endpoint, { headers: { Authorization: token } });
};

export const updateData = async (endpoint, token) => {
  await endpointRequest.patch(endpoint, {}, { headers: { Authorization: token } });
};

export default endpointRequest;
