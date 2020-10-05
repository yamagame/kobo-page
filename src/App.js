import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

function Header() {
  return (
    <div className="bg-blue-400 p-4 text-4xl font-bold text-white">
      Kobo-Page
    </div>
  )
}

function Article({children}) {
  return (
    <div className="m-2 rounded-lg p-4 border">
      {children}
    </div>
  )
}

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Article>
        <Page1 />
      </Article>
      <Article>
        <Page2 />
      </Article>
      <Article>
        <Page3 />
      </Article>
      <Article>
        <Page4 />
      </Article>
    </div>
  );
}

export default App;
