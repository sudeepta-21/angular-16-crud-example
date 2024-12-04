import React, { useState, useEffect } from 'react';
import TutorialService from '../services/TutorialService';
import TutorialDetails from './TutorialDetails';

const TutorialList = () => {
  const [tutorials, setTutorials] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState('');

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const retrieveTutorials = () => {
    TutorialService.getAll()
      .then(response => {
        console.log('Retrieved tutorials:', response.data);
        setTutorials(response.data);
      })
      .catch(e => {
        console.error('Error retrieving tutorials:', e.message, e.stack);
      });
  };

  const refreshList = () => {
    retrieveTutorials();
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };

  const removeAllTutorials = () => {
    TutorialService.deleteAll()
      .then(response => {
        console.log('All tutorials removed:', response.data);
        refreshList();
      })
      .catch(e => {
        console.error('Error removing all tutorials:', e.message, e.stack);
      });
  };

  const findByTitle = () => {
    TutorialService.findByTitle(searchTitle)
      .then(response => {
        console.log('Found tutorials by title:', response.data);
        setTutorials(response.data);
      })
      .catch(e => {
        console.error('Error finding tutorials by title:', e.message, e.stack);
      });
  };

  return (
    <div className="list row justify-content-center text-center">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={e => setSearchTitle(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={findByTitle}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Tutorials List</h4>
        <ul className="list-group">
          {tutorials &&
            tutorials.map((tutorial, index) => (
              <li
                className={`list-group-item ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setActiveTutorial(tutorial, index)}
                key={index}
              >
                {tutorial.title}
              </li>
            ))}
        </ul>
        <button className="m-3 btn btn-sm btn-danger" onClick={removeAllTutorials}>
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentTutorial ? (
          <TutorialDetails tutorial={currentTutorial} />
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialList;