import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import Notificationns from './Notificationns.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
      <Notificationns />
      <div>
      <Header />
      </div>
      <div>
      <Content />
      </div>
      <div>
      <Footer />
      </div>
     </div>

    );
  }
};

export default App;
