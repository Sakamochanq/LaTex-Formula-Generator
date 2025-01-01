import React from 'react'

const Generator = () => {
  return (
    <div className="latex-container">
        <textarea id="inputBox" >Hello latex</textarea>
        <div className="previewBox"></div>
    </div>
  )
}

export default Generator