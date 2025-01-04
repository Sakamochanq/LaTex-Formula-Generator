import React, { useState, useEffect, useRef } from 'react';

const Generator = () => {

  const [latex, setLatex] = useState('x = {-b \\pm \\sqrt{b^2 - 4ac} \\over 2a}');
  const previewRef = useRef(null);

  const handleChange = (e) => {
    setLatex(e.target.value);
  };

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise([previewRef.current]).catch(err => console.error(err));
    }
  }, [latex]);

  return (
    <div className="latex-container">
      <textarea value={latex} id="inputBox" onChange={handleChange} />
      <div className="preview-wrapper">
        <span className='LaTex'  ref={previewRef} dangerouslySetInnerHTML={{ __html: `\\(${latex}\\)` }} />
      </div>
    </div>
  );
};
export default Generator;