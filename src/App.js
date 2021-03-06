import React, { Component } from 'react';
import Layout from './components/layouts/Layouts';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
