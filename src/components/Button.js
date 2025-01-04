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
    <div className='main-container'>
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
                <button onClick={() =>Toggle('\\bf {ABC}')}>ボールド体</button>
                <button onClick={() =>Toggle('\\it {ABC}')}>イタリック体</button>
                <button onClick={() =>Toggle('\\sf {ABC}')}>サンセリフ体</button>
                <button onClick={() =>Toggle('\\mathbb {ABC}')}>白抜き文字</button>
                <button onClick={() =>Toggle('\\overbrace {a + b + c}')}>上括弧</button>
                <button onClick={() =>Toggle('\\underbrace {a + b + c}')}>下括弧</button>
                <button onClick={() =>Toggle('\\overline {a + b + c}')}>上線</button>
                <button onClick={() =>Toggle('\\underline {a + b + c}')}>下線</button>
                <button onClick={() =>Toggle('\\cdots')}>トッド</button>
            </div>}

        {/* 演算子 */}
        {selectedIndex === 1 && 
            <div className="button-wrapper">      
                <button onClick={() =>Toggle('\\lt')}>＜</button>
                <button onClick={() =>Toggle('\\leq')}>≦</button>
                <button onClick={() =>Toggle('\\gt')}>＞</button>
                <button onClick={() =>Toggle('\\geq')}>≧</button>
                <button onClick={() =>Toggle('\\angle')}>角</button>
                <button onClick={() =>Toggle('\\perp')}>垂直</button>
                <button onClick={() =>Toggle('\\parallel')}>平行</button>
            </div>}

        {/* 論理 */}
        {selectedIndex === 2 && 
            <div className="button-wrapper">
                <button onClick={() =>Toggle('\\to')}>→</button>
                <button onClick={() =>Toggle('\\gets')}>←</button>
                <button onClick={() =>Toggle('\\leftrightarrow')}>↔</button>
                <button onClick={() =>Toggle('\\lnot')}>否定</button>
                <button onClick={() =>Toggle('\\land')}>論理積</button>
                <button onClick={() =>Toggle('\\lor')}>論理和</button>
                <button onClick={() =>Toggle('\\oplus')}>非他的論理和</button>
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
