import React from 'react';
import { useNavigate } from 'react-router-dom';
import data from './cses-solutions.json'; // path to your JSON file

function CSES() {
  const navigate = useNavigate();

  return (
    <div className="cses-container">
      <h1>CSES Solutions</h1>

      {Object.keys(data).map(section => (
        <div key={section} className="section">
          <h2>{section}</h2>
          <div className="problem-list">
            {data[section].map((item, index) => (
              <div
                key={index}
                className="problem-card"
                onClick={() =>
                  navigate(`/cses/solution/${encodeURIComponent(item.title.toLowerCase().replace(/\s+/g, '-'))}`)
                }
              >
                <h3>{item.title}</h3>
                <p>{item.explanation ? item.explanation.slice(0, 100) : 'No explanation available'}...</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CSES;
