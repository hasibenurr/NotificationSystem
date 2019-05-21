import React from 'react'
import {render} from 'react-dom'
import App from './components/App.jsx'
import Newpage from './components/Newpage.jsx'

render(<Newpage />, document.getElementById('newpage'));
render(<App />, document.getElementById('app'));
