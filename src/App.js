// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import CodeChef from './pages/CodeChef/CodeChef';
import CodeForces from './pages/CodeForces/CodeForces';
import LeetCode from './pages/LeetCode/LeetCode';
import CSES from './pages/CSES/CSES';
import Dashboard from './pages/Dashboard/Dashboard';
import Atcoder from './pages/Atcoder/Atcoder';
import GFG from './pages/gfg/gfg';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path="codechef" element={<CodeChef />} />
          <Route path="codeforces" element={<CodeForces />} />
          <Route path="leetcode" element={<LeetCode />} />
          <Route path="cses" element={<CSES />} />
          <Route path="atcoder" element={<Atcoder />} />
          <Route path="GeeksforGeeks" element={<GFG/>} />
          {/* Add more pages inside this layout */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
