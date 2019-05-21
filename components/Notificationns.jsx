import React from 'react'
import IntervalTimer from 'react-interval-timer';
import ReactNotifications from 'react-browser-notifications'

class Notificationns extends React.Component {

  constructor() {
   super();
   this.showNotifications = this.showNotifications.bind(this);
  }
  showNotifications() {
    // If the Notifications API is supported by the browser
    // then show the notification
    if(this.n.supported())
    {
      this.n.show();
    }
  }

  render () {
    return (
      <div>
      <ReactNotifications
        onRef={ref => (this.n = ref)} // Required
        title="Server is saying;" // Required
        body="This is the notificationn!"
        icon="https://uvichair.b-cdn.net/wp-content/uploads/2017/12/UVIC_LOGO-WHITE-WEB.png"
        tag="abcdef"
        timeout="5000"
      />
      <IntervalTimer
                   timeout={150000}
                   callback={this.showNotifications}
                   enabled={true}
                   repeat={true}
               />
      </div>
    )
  }
}
export default Notificationns;
