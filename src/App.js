import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './pages/Dashboard/Dashboard';
import CodeChef from './pages/CodeChef/CodeChef';
import CodeForces from './pages/CodeForces/CodeForces';
import LeetCode from './pages/LeetCode/LeetCode';
import CSES from './pages/CSES/CSES';
import Atcoder from './pages/Atcoder/Atcoder';
import GFG from './pages/gfg/gfg';
import CSESProblemPage from './pages/CSES/CSESProblemPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Dashboard />} />  // ← this ensures "/" loads Dashboard
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="codechef" element={<CodeChef />} />
          <Route path="codeforces" element={<CodeForces />} />
          <Route path="leetcode" element={<LeetCode />} />
          <Route path="cses" element={<CSES />} />
          <Route path="cses/solution/:slug" element={<CSESProblemPage />} />
          <Route path="atcoder" element={<Atcoder />} />
          <Route path="geeksforgeeks" element={<GFG />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;