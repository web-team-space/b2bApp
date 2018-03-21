import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Collection, CollectionItem, Badge, Tabs, Tab, Collapsible, CollapsibleItem, Icon, Input, Modal, Button, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Autocomplete, Chip, Tag} from 'react-materialize';
import HomeProducts from "../components/home/HomeProducts";
import ActiveProducts from "../components/home/ActiveProducts";
import Header from "../components/home/Header";
import SearchForm from '../components/home/SearchForm';
import HomeTabs from '../components/home/HomeTabs';


class HomePage extends React.Component {

  

    render() {
    
        return (
            <div className="page">
                <Row>
                    
                  <SearchForm/>
                  
                  <Header/>
                  
                  <HomeTabs/>
                   
                    
                    <Col s={12} m={12}>
                        
                        <CardPanel className='white' textClassName='black-text'>
                            <h5>3 Active Products</h5>
                        </CardPanel>
                        
                        <ActiveProducts/>
                        
                    </Col>
                    
                    
                    
                </Row>
                
                
                
            </div>
        );
    }
} 

export default HomePage;