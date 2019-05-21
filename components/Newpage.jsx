import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';

class Newpage extends React.Component {

render() {
  return (
    <div>
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
export default Newpage;
