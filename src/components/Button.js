import React from 'react'

export const Button = () => {
  return (
    <div className="button-container">
        <label className="selectbox-2">
            <select>
                <option>文字・記号</option>
                <option>演算子</option>
                <option>論理</option>
                <option>指数</option>
                <option>総和</option>
                <option>集合</option>
                <option>行列</option>
            </select>
        </label>
    </div>
  )
}
export default Button