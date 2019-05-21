import React from 'react'
import ReactNotifications from 'react-browser-notifications';


class Header extends React.Component {

/*function handleClick(e){
 e.preventDefault();
 //window.open('D:\Lectures\Zagreb Staj\React\project_notification(son)\src\components\Newpage.jsx');
}
*/

render() {
    return (
      <header class="page-header">
      <nav class="red darken-1">
     <a href="#!" class="brand-logo red darken-1"><i class="material-icons"> all_inclusive</i>Logo</a>
     <ul class="right hide-on-med-and-down red darken-1">
       <li><a href="#"><i class="material-icons">search</i></a></li>
       <li><a href="#"><i class="material-icons">view_module</i></a></li>
       <li><a href="#"><i class="material-icons">refresh</i></a></li>
       <li><a href="#"><i class="material-icons">more_vert</i></a></li>
     </ul>
 </nav>
 <div class="section no-pad-bot" id="index-banner">
   <div class="container">
       <br></br>
       <h1 class="header center red-text">Starter Template</h1>
       <div class="row center">
       <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
   </div>
   <br></br>
   </div>
   </div>
      </header>
    );
  }
}

export default Header;
