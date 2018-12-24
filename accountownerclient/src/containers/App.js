import React, { Component } from 'react';
import './App.css';
import Layout from '../components/Layout/Layout'


class App extends Component {
  render() {
    return (
      <Layout>
        <strong>This contetnt is going to be renderd as the props.childern inside the Layout comoponent</strong>
      </Layout>      
    );
  }
}

export default App;
