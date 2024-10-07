import React from 'react';
import Header from './components/Header';
import { View, Button } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <Header/>
      <div className="jumbotron bg-light p-5 rounded">
        <h1 className="display-4">Hello, React Native Web + Bootstrap!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
        </p>
        <View style={{ marginBottom: 20 }}>
          <Button
            title="Call to Action"
            onPress={() => alert('Button pressed!')}
            className="btn btn-primary btn-lg"
          />
        </View>
        <View>
          <Button
            title="Secondary Link"
            onPress={() => alert('Secondary action!')}
            className="btn btn-outline-secondary btn-lg"
          />
        </View>
      </div>
    </div>
  );
}

export default App;