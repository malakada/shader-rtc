import ShaderDisplay from '../components/ShaderDisplay';

import './Display.css';

function Display({ shaderToyIds }) {
  return (
    <div className="Display">
      {shaderToyIds.map((shaderToyId) => (
        <ShaderDisplay key={shaderToyId} shaderToyId={shaderToyId} />
      ))}
    </div>
  );
}

export default Display;
