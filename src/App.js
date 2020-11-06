import './App.css';
import React from 'react'
import TaskMain from './components/TaskMain'
import {Container, Row, Col} from 'react-bootstrap'
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import WeatherCard from './components/WeatherCard';
import ThingsToDo from './components/ThingsToDo';

function App() {
  return (
    <Layout>
      <NavBar/>
    <Container fluid>
      <Row>
      
        <Col>
    
      <WeatherCard/>
      </Col>
      <Col xs = {8}>
    <TaskMain/> 
    </Col>
    </Row>
    
    <ThingsToDo/>
    
   
    </Container>
    </Layout>
    
  );
}

export default App;
