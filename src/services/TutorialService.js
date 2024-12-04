import axios from 'axios'; 
const API_URL = 'http://localhost:8080/api/tutorials'; 
const getAll = () => { 
  console.log('Fetching all tutorials'); 
  return axios.get(API_URL) 
    .then(response => { 
      console.log('Fetched all tutorials:', response.data); 
      return response; 
    }) 
    .catch(error => { 
      console.error('Error fetching all tutorials:', error.message, error.stack); 
      throw error; 
    }); 
}; 


const get = id => { 
  console.log(`Fetching tutorial with id: ${id}`); 
  return axios.get(`${API_URL}/${id}`) 
    .then(response => { 
      console.log(`Fetched tutorial with id ${id}:`, response.data); 
      return response; 
    }) 
    .catch(error => { 
      console.error(`Error fetching tutorial with id ${id}:`, error.message, error.stack); 
      throw error; 
    }); 
}; 
const create = data => { 
  console.log('Creating new tutorial with data:', data); 
  return axios.post(API_URL, data) 
    .then(response => { 
      console.log('Created new tutorial:', response.data); 
      return response; 
    }) 
    .catch(error => { 
      console.error('Error creating new tutorial:', error.message, error.stack); 
      throw error; 
    }); 
}; 
const update = (id, data) => { 
  console.log(`Updating tutorial with id ${id} with data:`, data); 
  return axios.put(`${API_URL}/${id}`, data) 
    .then(response => { 
      console.log(`Updated tutorial with id ${id}:`, response.data); 
      return response; 
    }) 
    .catch(error => { 
      console.error(`Error updating tutorial with id ${id}:`, error.message, error.stack); 
      throw error; 
    }); 
}; 
const remove = id => { 
  console.log(`Deleting tutorial with id: ${id}`); 
  return axios.delete(`${API_URL}/${id}`) 
    .then(response => { 
      console.log(`Deleted tutorial with id ${id}:`, response.data); 
      return response; 
    }) 
    .catch(error => { 
      console.error(`Error deleting tutorial with id ${id}:`, error.message, error.stack); 
      throw error; 
    }); 
}; 
const removeAll = () => { 
  console.log('Deleting all tutorials'); 
  return axios.delete(API_URL) 
    .then(response => { 
      console.log('Deleted all tutorials:', response.data); 
      return response; 
    }) 
    .catch(error => { 
      console.error('Error deleting all tutorials:', error.message, error.stack); 
      throw error; 
    }); 
}; 
const findByTitle = title => { 
  console.log(`Finding tutorials with title: ${title}`); 
  return axios.get(`${API_URL}?title=${title}`) 
    .then(response => { 
      console.log(`Found tutorials with title ${title}:`, response.data); 
      return response; 
    }) 
    .catch(error => { 
      console.error(`Error finding tutorials with title ${title}:`, error.message, error.stack); 
      throw error; 
    }); 
}; 
export default { 
  getAll, 
  get, 
  create, 
  update, 
  remove, 
  removeAll, 
  findByTitle 
};