import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from './components/Toolbar';
import Graph from './components/Graph';
import defaultConfig from './constants/defaultConfig';
import { getCirclesForNumberOfBeams } from "./utils/calculations";
import { parseConfigFromQueryString } from "./utils/navigation";

function App() {
  const qsConfig = parseConfigFromQueryString();

  const initialConfig = Object.assign({}, defaultConfig, qsConfig);
  const [config, setConfig] = useState(initialConfig);

  const initialCircles = initialConfig.beams.reduce((arr, numberOfBeams)=>arr.concat(getCirclesForNumberOfBeams(numberOfBeams,initialConfig)), []);
  const [circles, setCircles] = useState(initialCircles);
  
  return (
    <Container>
      <Toolbar config={config} setConfig={setConfig}/>
      <Graph config={config} circles={circles} />
    </Container>
  );
}

export default App;
