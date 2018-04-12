import  { GOOGLE_API_KEY } from './.env.js';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import * as Constants from './constants';
import Header from './header.js';
import Map from './map.js';
import Footer from './footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <Header/>
          <Map
            showMarkers={ true }
            googleMapURL={ `https://maps.googleapis.com/maps/api/js?key=${ GOOGLE_API_KEY }` }
            loadingElement={ <div style={{ height: '100%', width: '100%' }} /> }
            containerElement={ <div style={{ height: '80vh' }} /> }
            mapElement={ <div style={{ height: '100%' }} /> }
            center={ Constants.MAP_CENTER }
            zoom={ Constants.MAP_ZOOM }
          />
          <Footer/>
        </div>
      </Provider>
    );
  }
}

export default App;
