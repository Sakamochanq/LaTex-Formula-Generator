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

  const remove = () => {
    setLatex('');
  }
  
  /* matrix List */
const matrix = `\\begin{matrix}
a & b \\\\
c & d
\\end{matrix}`;

const pmatrix = `\\begin{pmatrix}
a & b \\\\
c & d
\\end{pmatrix}`;

const bmatrix = `\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}`;

const vmatrix = `\\begin{vmatrix}
a & b \\\\
c & d
\\end{vmatrix}`;

const arraymatrix = `\\left(
\\begin{array}{ccc}
a & b & c \\\\
d & e & f \\\\
g & h & i
\\end{array}
\\right)`;
  
const diagonalmatrix = `\\begin{pmatrix}
\\lambda_1 & & & &  \\\\
& \\lambda_2 & & \\Huge{0} & \\\\
& & \\ddots & & \\\\
& \\Huge{0} & & \\lambda_{n-1} & \\\\
& & & & \\lambda_n
\\end{pmatrix}`;

const equationmatrix = `\\mathrm{det} A = \\begin{vmatrix}
a & b \\\\
c & d 
\\end{vmatrix} = ad - bc`;

  return (
    <div className='main-container'>
      <div className="latex-container">
        <textarea value={latex} id="inputBox" onChange={handleChange} />
        <br />
        <input className='copyButton' type="button" onClick={() => {navigator.clipboard.writeText(latex)}} value="コピー" />
        <input className='removeButton' type="button" onClick={remove} value="削除" />
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
              <option value={3}>指数・対数</option>
              <option value={4}>総和・総乗</option>
              <option value={5}>集合</option>
              <option value={6}>行列</option>
              <option value={7}>極限</option>
              <option value={8}>数学公式</option>
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
                <button onClick={() =>Toggle('+')}>加算</button>
                <button onClick={() =>Toggle('-')}>減算</button>
                <button onClick={() =>Toggle('\\times')}>乗算</button>
                <button onClick={() =>Toggle('\\div')}>除算</button>
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

        {/* 指数・対数 */}
        {selectedIndex === 3 && 
            <div className="button-wrapper">
                <button onClick={() =>Toggle('x^{n}')}>累乗</button>
                <button onClick={() =>Toggle('\\sqrt[n]{x}')}>n乗根</button>
                <button onClick={() =>Toggle('\\log_{10}{x}')}>log</button>
                <button onClick={() =>Toggle('\\ln{x}')}>ln</button>
            </div>}

        {/* 総和・総乗 */}
        {selectedIndex === 4 && 
            <div className="button-wrapper">
                <button onClick={() =>Toggle('\\infty')}>無限</button>
                <button onClick={() =>Toggle('\\sum_{i=1}^{n}x_{i}')}>Σ</button>
                <button onClick={() =>Toggle('\\prod')}>総乗</button>
            </div>}

        {/* 集合 */}
        {selectedIndex === 5 && 
            <div className="button-wrapper">
                <button onClick={() =>Toggle('\\cup')}>和集合</button>
                <button onClick={() =>Toggle('\\cap')}>積集合</button>
                <button onClick={() =>Toggle('\\in')}>属する</button>
                <button onClick={() =>Toggle('\\ni')}>属する[逆]</button>
                <button onClick={() =>Toggle('\\subset')}>部分集合</button>
                <button onClick={() =>Toggle('\\subseteq')}>部分集合[逆]</button>
                <button onClick={() =>Toggle('\\notin')}>要素の否定</button>
                <button onClick={() =>Toggle('(\\overline{A \\cup B}=\\overline{A} \\cap\\overline{B})')}>ド・モルガンの法則</button>
            </div>}

        {/* 行列 */}
        {selectedIndex === 6 && 
            <div className="button-wrapper">
              <button onClick={() =>Toggle(matrix)}>正方行列</button>
              <button onClick={() =>Toggle(pmatrix)}>括弧行列</button>
              <button onClick={() =>Toggle(bmatrix)}>ブラケット行列</button>
              <button onClick={() =>Toggle(vmatrix)}>パイプライン行列</button>
              <button onClick={() =>Toggle(arraymatrix)}>array環境行列</button>
              <button onClick={() =>Toggle(diagonalmatrix)}>対角行列</button>
              <button onClick={() =>Toggle(equationmatrix)}>行列式</button>
              <button onClick={() =>Toggle('\\mathrm{rank}')}>階数</button>
              <button onClick={() =>Toggle('\\dim')}>次元</button>
            </div>}

        {/* 極限 */}
        {selectedIndex === 7 && 
            <div className="button-wrapper">
                <button onClick={() =>Toggle('\\lim_{x \\to a}f(x)')}>極限</button>
                <button onClick={() =>Toggle('\\lim_{x \\to 0}f(x)')}>ゼロ</button>
            </div>}

        {/* 数学公式 */}
        {selectedIndex === 8 && 
            <div className="button-wrapper">      
                <button onClick={() =>Toggle('y = ax')}>比例</button>
                <button onClick={() =>Toggle('y = {a \\over{x}}')}>反比例</button>
                <button onClick={() =>Toggle('y = ax + b')}>一次関数</button>
                <button onClick={() =>Toggle('y = ax^{2}')}>二次関数</button>
                <button onClick={() =>Toggle('2 \\pi r')}>円周</button>
                <button onClick={() =>Toggle('\\pi r^{2}')}>円の面積</button>
                <button onClick={() =>Toggle('(\\sqrt{a})^2 = a')}>平方根</button>
                <button onClick={() =>Toggle('4 \\pi r^{2}')}>球の表面積</button>
                <button onClick={() =>Toggle('(a+b)(a-b) = a^2 -b^2')}>因数分解・展開</button>
                <button onClick={() =>Toggle('a^2 + b^2 = c^2')}>三平方の定理</button>
            </div>}

      </div>
    </div>
  );
};

export default Button;
