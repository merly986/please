import axios from "axios";

const baseURL = 'http://92.53.119.132/api/v1'

export async function getEntity(entityType, entityID) {
  const axiosConfig = {
      method: 'get',
      baseURL: baseURL,
      url: `/entity/${entityType}/${entityID}`,
      headers: {'Authorization': 'Token d856d08d44f4eb3f357e408ab47d3ff3703fb73f'},
  };

  try {
    const response = await axios(axiosConfig);
    return response.data[0];
  } catch (error) {
    console.error(error);
  };
};