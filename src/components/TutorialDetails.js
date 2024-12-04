import React, { useState, useEffect } from 'react'; 
import TutorialService from '../services/TutorialService'; 
const TutorialDetails = ({ tutorial }) => { 
  const [currentTutorial, setCurrentTutorial] = useState(tutorial); 
  const [message, setMessage] = useState(''); 
  useEffect(() => { 
    setCurrentTutorial(tutorial); 
  }, [tutorial]); 
  const updatePublished = status => { 
    const data = { 
      ...currentTutorial, 
      published: status 
    }; 
    TutorialService.update(currentTutorial.id, data) 
      .then(response => { 
        console.log('Updated tutorial status:', response.data); 
        setCurrentTutorial({ ...currentTutorial, published: status }); 
        setMessage('The status was updated successfully!'); 
      }) 
      .catch(e => { 
        console.error('Error updating tutorial status:', e.message, e.stack); 
      }); 
  }; 
  const updateTutorial = () => { 
    TutorialService.update(currentTutorial.id, currentTutorial) 
      .then(response => { 
        console.log('Updated tutorial:', response.data); 
        setMessage('This tutorial was updated successfully!'); 
      }) 
      .catch(e => { 
        console.error('Error updating tutorial:', e.message, e.stack); 
      }); 
  }; 
  const deleteTutorial = () => { 
    TutorialService.delete(currentTutorial.id) 
      .then(response => { 
        console.log('Deleted tutorial:', response.data); 
        setMessage('The tutorial was deleted successfully!'); 
      }) 
      .catch(e => { 
        console.error('Error deleting tutorial:', e.message, e.stack); 
      }); 
  }; 
  return ( 
    <div> 
      {currentTutorial ? ( 
        <div className="edit-form"> 
          <h4>Tutorial</h4> 
          <form> 
            <div className="form-group"> 
              <label htmlFor="title">Title</label> 
              <input 
                type="text" 
                className="form-control" 
                id="title" 
                value={currentTutorial.title} 
                onChange={e => setCurrentTutorial({ ...currentTutorial, title: e.target.value })} 
              /> 
            </div> 
            <div className="form-group"> 
              <label htmlFor="description">Description</label> 
              <input 
                type="text" 
                className="form-control" 
                id="description" 
                value={currentTutorial.description} 
                onChange={e => setCurrentTutorial({ ...currentTutorial, description: e.target.value })} 
              /> 
            </div> 
            <div className="form-group"> 
              <label> 
                <strong>Status:</strong> 
              </label> 
              {currentTutorial.published ? 'Published' : 'Pending'} 
            </div> 
          </form> 
          {currentTutorial.published ? ( 
            <button className="badge badge-primary mr-2" onClick={() => updatePublished(false)}> 
              UnPublish 
            </button> 
          ) : ( 
            <button className="badge badge-primary mr-2" onClick={() => updatePublished(true)}> 
              Publish 
            </button> 
          )} 
          <button className="badge badge-danger mr-2" onClick={deleteTutorial}> 
            Delete 
          </button> 
          <button type="submit" className="badge badge-success" onClick={updateTutorial}> 
            Update 
          </button> 
          <p>{message}</p> 
        </div> 
      ) : ( 
        <div> 
          <br /> 
          <p>Please select a Tutorial...</p> 
        </div> 
      )} 
    </div> 
  ); 
}; 
export default TutorialDetails;