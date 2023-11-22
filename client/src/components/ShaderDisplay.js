import React, { useState, useEffect } from 'react';
import ShadertoyReact from 'shadertoy-react';

function ShaderDisplay({ shaderToyId }) {
  const [shaderToyCode, setShaderToyCode] = useState('');
  const [shaderToyName, setShaderToyName] = useState('');
  const [shaderToyAuthor, setShaderToyAuthor] = useState('');
  const [error, setError] = useState(null);
  const [helloWorld, setHelloWorld] = useState('');

  useEffect(() => {
    fetch(`https://www.shadertoy.com/api/v1/shaders/${shaderToyId}?key=BtHjRr`)
      .then((response) => response.json())
      .then((data) => {
        setShaderToyCode(data.Shader.renderpass[0].code);
        setShaderToyName(data.Shader.name);
        setShaderToyAuthor(data.Shader.username);
      })
      .catch((error) => {
        setError(error);
      }
    );
  }, [shaderToyId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!shaderToyCode) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ShaderDisplay">
      <ShadertoyReact fs={shaderToyCode} />
    </div>
  );
}

export default ShaderDisplay;
