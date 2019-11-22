import React, { Suspense } from 'react';
import './App.css';

import Page from './Page'
import Loading from './Loading'

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Page />
      </Suspense>
    </div>
  );
}

export default App;
