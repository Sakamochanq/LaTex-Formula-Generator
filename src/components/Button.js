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

        {selectedIndex === 0 &&
            <div className="button-wrapper">
                <button>ローマン体</button>
                <button>ボールド体</button>
                <button>イタリック体</button>
                <button>サンセリフ体</button>
                <button>白抜き文字</button>
            </div>}

        {/* 演算子 */}
        {selectedIndex === 1 && 
            <div className="button-wrapper">    
                <button>加算</button>
                <button>減算</button>
                <button onClick={() => Toggle('\\times')}>掛け算</button>
                <button>割り算</button>
                <button>積分</button>          
            </div>}

        {/* 論理 */}
        {selectedIndex === 2 && 
            <div className="button-wrapper">
                <button>論理積</button>
                <button>論理和</button>
                <button>否定</button>
                <button>合意</button>
                <button>同値</button>
            </div>}

        {/* 指数 */}
        {selectedIndex === 3 && 
            <div className="button-wrapper"> 
                <button>ローマン体</button>
                <button>ボールド体</button>
                <button>イタリック体</button>
                <button>サンセリフ体</button>
                <button>白抜き文字</button>
            </div>}

        {/* 総和 */}
        {selectedIndex === 4 && 
            <div className="button-wrapper">  
                <button>指数</button>
                <button>平方根</button>
                <button>自然対数</button>
                <button>対数</button>
            </div>}

        {/* 集合 */}
        {selectedIndex === 5 && 
            <div className="button-wrapper">  
                <button>記号</button>
                <button>積分記号</button>
                <button>合計</button>
                <button>積分</button>
            </div>}

        {/* 行列 */}
        {selectedIndex === 6 && 
            <div className="button-wrapper"> 
                <button>集合記号</button>
                <button>交差</button>
                <button>和集合</button>
                <button>補集合</button>
            </div>}

      </div>
    </div>
  );
};

export default Button;
