import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function ResearchResults() {
  const [researchResults, setResearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/research-results';
    axios.get(apiUrl)
      .then(response => {
        if (Array.isArray(response.data)) {
          setResearchResults(response.data);
        } else {
          setError('Unexpected data format');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Error fetching data: ' + err.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div aria-live="assertive">{error}</div>;
  }

  if (loading) {
    return <div aria-live="polite">Loading...</div>;
  }

  return (
    <div>
      <h1>Research Results</h1>
      {researchResults.length > 0 ? (
        <ul>
          {researchResults.map(result => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

ResearchResults.propTypes = {
  researchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default ResearchResults;