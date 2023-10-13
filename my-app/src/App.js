import './App.css';
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./build_v3/Build/build_v3.loader.js",
  dataUrl: "./build_v3/Build/build_v3.data",
  frameworkUrl: "./build_v3/Build/build_v3.framework.js",
  codeUrl: "./build_v3/Build/build_v3.wasm",
});

function App() {
  return (
    
    <div className="App">
      <div className ="Unity">
        <Unity unityContext={unityContext} 
        style= {{
          height: "100vh",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          justifySelf: "center",
          alignSelf: "center",
          overflow: "hidden",
        }}/>  
      </div>

      <div className="HeaderBar">
        <h1>Space Pups</h1>
      </div>
    </div>
  );
}

export default App;
