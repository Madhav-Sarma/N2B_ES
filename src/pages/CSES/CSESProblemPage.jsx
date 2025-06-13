import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../../context/ThemeContext';
import csesData from './cses-solutions.json';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const CSESProblemPage = () => {
  const { slug } = useParams(); // e.g. 'missing-number'
  const { darkMode } = useTheme();

  const [code, setCode] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const allProblems = Object.values(csesData).flat();
    const problem = allProblems.find(p => p.slug === slug);
    if (!problem) return;

    setTitle(problem.title);

    if (problem.solution) {
      fetch(problem.solution)
        .then(res => res.text())
        .then(setCode);
    }

    if (problem.explanation) {
      fetch(problem.explanation)
        .then(res => res.text())
        .then(setMarkdown);
    }
  }, [slug]);

  return (
    <div className={`container py-4 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <h3 className="fw-bold mb-4">{title}</h3>

      <h5 className="mt-4">🧠 Solution Code (.py)</h5>
      <SyntaxHighlighter language="python" style={darkMode ? oneDark : oneLight}>
        {code}
      </SyntaxHighlighter>

      <h5 className="mt-5">📘 Explanation (.md)</h5>
      <div className={`p-3 rounded ${darkMode ? 'bg-secondary' : 'bg-white'}`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default CSESProblemPage;
