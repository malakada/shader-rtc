import React, { useState } from 'react';
import Display from './Display';

function Welcome() {
  const [shaderToyIds, setShaderToyIds] = useState([]);
  const [shaderToyId, setShaderToyId] = useState('');

  function addShaderToyId() {
    setShaderToyIds([...shaderToyIds, shaderToyId]);
    setShaderToyId('');
  }

  return (
    <div className="Welcome">
      <div className="join-box-container">
        <div className="join-box">
          <h1>Add your ShaderToy ID</h1>
          <input type="text" placeholder="ShaderToy ID" value={shaderToyId} onChange={e => setShaderToyId(e.target.value)} />
          <button onClick={addShaderToyId}>Add</button>
        </div>
      </div>
      <Display shaderToyIds={shaderToyIds} />
    </div>
  );
}

export default Welcome;
