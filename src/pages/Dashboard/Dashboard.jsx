import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTheme } from '../../context/ThemeContext';

import codechefData from '../CodeChef/codechef-solutions.json';
import codeforcesData from '../CodeForces/codeforces-solutions.json';
import leetcodeData from '../LeetCode/leetcode-solutions.json';
import csesData from '../CSES/cses-solutions.json';
import atcoderData from '../Atcoder/atcoder-solutions.json';
import gfgData from '../gfg/gfg-solutions.json';

const Dashboard = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      codechef: codechefData,
      codeforces: codeforcesData,
      leetcode: leetcodeData,
      cses: csesData,
      atcoder: atcoderData,
      geeksforgeeks: gfgData
    });
  }, []);

  const platforms = [
    { key: 'codechef', label: 'CodeChef' },
    { key: 'codeforces', label: 'Codeforces' },
    { key: 'leetcode', label: 'LeetCode' },
    { key: 'cses', label: 'CSES' },
    { key: 'atcoder', label: 'AtCoder' },
    { key: 'geeksforgeeks', label: 'GeeksforGeeks' },
  ];

  return (
    <div className={`container-fluid py-4 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      {platforms.map(({ key, label }) => (
        <div key={key} className="mb-5">
          <h5 className="fw-bold mb-3">{label}</h5>

          {data[key]?.length > 0 ? (
            <div className="d-flex flex-wrap gap-3">
              {data[key].slice(0, 3).map((q, idx) => (
                <div
                  key={idx}
                  className={`card shadow ${darkMode ? 'bg-secondary text-white' : 'bg-white text-dark'}`}
                  style={{ width: '18rem' }}
                >
                  <div className="card-body">
                    <h6 className="card-title fw-semibold">{q.title}</h6>
                    <p className={`card-text ${darkMode ? 'text-light' : 'text-muted'}`} style={{ fontSize: '0.9rem' }}>
                      {(q.description || '').slice(0, 80)}...
                    </p>
                  </div>
                </div>
              ))}
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ width: '18rem' }}
              >
                <button
                  className="btn btn-outline-primary"
                  onClick={() => navigate(`/${key}`)}
                >
                  View more
                </button>
              </div>
            </div>
          ) : (
            <div
              className={`p-3 border rounded ${darkMode ? 'bg-secondary text-light' : 'bg-white text-muted'}`}
              style={{ width: 'fit-content' }}
            >
              Nothing at the moment.
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
