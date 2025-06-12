import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const RenderSolution = ({ codePath, explanationPath, language = "python" }) => {
  const [code, setCode] = useState('');
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(codePath).then(res => res.text()).then(setCode);
    fetch(explanationPath).then(res => res.text()).then(setMarkdown);
  }, [codePath, explanationPath]);

  return (
    <div style={{ padding: '1rem' }}>
      <h3>🧾 Code</h3>
      <pre>
        <code>{code}</code>
      </pre>

      <h3>🧠 Explanation</h3>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default RenderSolution;
