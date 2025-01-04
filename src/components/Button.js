import React, {useState} from 'react'

export const Button = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleSelectChange = (e) => {
        setSelectedIndex(parseInt(e.target.value));
    }

  return (
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
        <div className="control-contaier">
            {selectedIndex === 0 &&
            <div className="sign">
                <button>文字・記号</button>    
            </div>}
            {selectedIndex === 1 && 
            <div className="operator">
                <button>演算子</button>    
            </div>}
            {selectedIndex === 2 && 
            <div className="logic">
                <button>論理</button>    
            </div>}
            {selectedIndex === 3 && 
            <div className="index">
                <button>指数</button>
            </div>}
            {selectedIndex === 4 && 
            <div className="sum">
                <button>総和</button>    
            </div>}
            {selectedIndex === 5 && 
            <div className="set">
                <button>集合</button>
            </div>}
            {selectedIndex === 6 && 
            <div className="matrix">
                <button>行列</button>
            </div>}
        </div>
    </div>
  )
}
export default Button