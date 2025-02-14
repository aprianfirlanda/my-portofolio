'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiClipboard, FiCheck } from 'react-icons/fi';

const CodeBlock = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <SyntaxHighlighter language={language} style={vscDarkPlus} className="rounded-lg">
        {code}
      </SyntaxHighlighter>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-700 text-white p-1 rounded-md hover:bg-gray-600 transition"
      >
        {copied ? <FiCheck size={16} /> : <FiClipboard size={16} />}
      </button>
    </div>
  );
};

export default CodeBlock;
