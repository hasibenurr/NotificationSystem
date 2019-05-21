import React from 'react';
import ReactNotifications from 'react-browser-notifications';

class Content extends React.Component {

constructor() {
 super();
 this.showNotifications = this.showNotifications.bind(this);
 this.handleClick = this.handleClick.bind(this);
}
showNotifications() {
  // If the Notifications API is supported by the browser
  // then show the notification
  if(this.n.supported()) this.n.show();
}
handleClick(event) {

  // Lastly, Close the notification
  this.n.close(event.target.tag);

}
// orient new page
onClick(event){
  window.open('http://localhost:8080/newpage.html',"_blank");
    }

render() {
    return (
        // we include notification
      <body class="page-body">

        <ReactNotifications
          onRef={ref => (this.n = ref)} // Required
          title="Hey There!" // Required
          body="You clicked me!"
          icon="https://uvichair.b-cdn.net/wp-content/uploads/2017/12/UVIC_LOGO-WHITE-WEB.png"
          tag="abcdef"
          timeout="5000"
          onClick={event => this.handleClick(event)}
        />

         <div class="row center">
        <a onClick={this.showNotifications} id="download-button" class="btn-large waves-effect waves-light yellow">Get Notification!
        <i class="material-icons right">send</i>
        </a>

        <a onClick={this.onClick} id="download-button" class="btn-large waves-effect waves-light green">Open New Page!
        <i class="material-icons right">add_to_photos</i>
        </a>
        </div>

    <div class="container">
    <div class="section">
    <div class="row">
        <div class="col s12 m4">
        <div class="icon-block">
        <h2 class="center large orange-text"><i class="material-icons">flash_on</i></h2>
        <h5 class="center">Speeds up development</h5>
        </div>
        </div>
        <div class="col s12 m4">
        <div class="icon-block">
          <h2 class="center red-text"><i class="material-icons">group</i></h2>
          <h5 class="center">User Experience Focused</h5>
      </div>
      </div>
      <div class="col s12 m4">
      <div class="icon-block">
        <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
        <h5 class="center">Easy to work with</h5>
      </div>
      </div>
      </div>
      </div>
      <br></br>
      </div>
      </body>
    );
  }
}

export default Content;
