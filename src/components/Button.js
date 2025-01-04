import React, { useState, useRef, useEffect } from 'react';

export const Button = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [latex, setLatex] = useState('x = {-b \\pm \\sqrt{b^2 - 4ac} \\over 2a}');
  const previewRef = useRef(null);

  const handleSelectChange = (e) => {
    setSelectedIndex(parseInt(e.target.value));
  };

  const handleChange = (e) => {
    setLatex(e.target.value);
  };

  const Toggle = (code) => {
    setLatex((prevLatex) => `${prevLatex} ${code}`);
  };

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise([previewRef.current]).catch((err) =>
        console.error(err)
      );
    }
  }, [latex, selectedIndex]);

  return (
    <div>
      <div className="latex-container">
        <textarea value={latex} id="inputBox" onChange={handleChange} />
        <div className="preview-wrapper">
          <span
            className="LaTex"
            ref={previewRef}
            dangerouslySetInnerHTML={{ __html: `\\(${latex}\\)` }}
          />
        </div>
      </div>
      <div className="button-container">
        <div className="selectbox-wrapper">
          <label className="selectbox-2">
            <select onChange={handleSelectChange} value={selectedIndex}>
              <option value={0}>文字・記号</option>
              <option value={1}>演算子</option>
              <option value={2}>論理</option>
              <option value={3}>指数</option>
              <option value={4}>総和</option>
              <option value={5}>集合</option>
              <option value={6}>行列</option>
            </select>
          </label>
        </div>

        {/* 文字・記号 */}
        {selectedIndex === 0 &&
            <div className="button-wrapper">
            </div>}

        {/* 演算子 */}
        {selectedIndex === 1 && 
            <div className="button-wrapper">      
            </div>}

        {/* 論理 */}
        {selectedIndex === 2 && 
            <div className="button-wrapper">
            </div>}

        {/* 指数 */}
        {selectedIndex === 3 && 
            <div className="button-wrapper">
            </div>}

        {/* 総和 */}
        {selectedIndex === 4 && 
            <div className="button-wrapper">
            </div>}

        {/* 集合 */}
        {selectedIndex === 5 && 
            <div className="button-wrapper">
            
            </div>}

        {/* 行列 */}
        {selectedIndex === 6 && 
            <div className="button-wrapper">
            </div>}

      </div>
    </div>
  );
};

export default Button;
