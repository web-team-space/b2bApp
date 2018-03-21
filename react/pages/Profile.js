import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Autocomplete, Input, SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Modal, Chip, Tag} from 'react-materialize';
import ProductBox from '../components/product/ProductBox';
import ActiveProducts from "../components/home/ActiveProducts";

class Profile extends React.Component {

    render() {
    
        return (
            <div className="Profile">
                
                <Row>
                
                    <Col s={12} m={5}>
                    
                        <Card className='white' textClassName='black-text' title=''>
                            <a href="#profile">
                            <Chip>
                              <img src='http://materializecss.com/images/yuna.jpg' alt='Contact Person' />
                              Example Store
                            </Chip>
                            </a>
                            
                            <br/>
                            <Collection>
                            <Col s={12} m={6}>
                              <CollectionItem href="#businesses">
                                <Badge>999</Badge>Following
                              </CollectionItem>
                            </Col>
                            <Col s={12} m={6}>
                              <CollectionItem href="#businesses">
                                <Badge>999</Badge>Followers
                              </CollectionItem>
                              </Col>
                            </Collection>
                            
                            <span><strong>New York</strong></span><br/>
                              <span>Joined on October 4, 2017</span><br/>
                              <hr/>
                              <span><strong>Phone Number: </strong><br/>555-555-5555</span><br/><br/>
                              <span><strong>Address: </strong><br/>123 Street Address, New York, NY 12345</span>
                              
                              <br/><br/>
                                <Modal
                          header='Post Review'
                          fixedFooter
                          trigger={<Button className='red darken-1'>Post Review</Button>}>
                          
                           
                            <Row>
                            
                            <Input s={12} type='select' label="" defaultValue='1'>
                                <option value='1'>Positive</option>
                                <option value='2'>Negative</option>
                            </Input>
                            
                            <Input type="textarea" name="content" s={12} label="Content" onChange={this.handleChange} />
                            
                            <Autocomplete
                                title='Related Product'
                                data={
                                  {
                                    'Iphone 7': null
                                  }
                                }
                              />
                            
                            </Row>  
                            
                            <Button class="blue" waves='light' type="submit">Post Review</Button>
                        
                        
                        
                        </Modal>
                              
                        </Card>
                    
                    </Col>
                    
                    <Col s={12} m={7}>
                        
                        
                        
                        <CardPanel className='white' textClassName='black-text'>
                            <h5>3 products by <strong>Example Store</strong></h5>
                        </CardPanel>
                        
                        <Card 
                        header=''
                        className='white' textClassName='black-text' title='Iphone 7'>
                            <span>New York&nbsp;&nbsp;<strong>$300 - $800</strong><br/><br/>Apple · iPhone · iPhone 7 · iPhone 7 (Original) · iOS · 4.7 in · Fingerprint Scanner · Rear Camera: 12 MP · 4G LTE · 14 hours talk time</span>
                        <br/><br/>
                        <Button className='light-blue darken-4' waves='light' node='a' href='#single'>View</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Modal
                              header=''
                              trigger={<Button className='red darken-1'>Add to cart</Button>}>
                              <p>"iPhone 7" has been added to your cart.</p>
                            </Modal>
                        
                        </Card>
                        
                        <Card 
                        header=''
                        className='white' textClassName='black-text' title='Iphone 7'>
                            <span>New York&nbsp;&nbsp;<strong>$300 - $800</strong><br/><br/>Apple · iPhone · iPhone 7 · iPhone 7 (Original) · iOS · 4.7 in · Fingerprint Scanner · Rear Camera: 12 MP · 4G LTE · 14 hours talk time</span>
                        <br/><br/>
                        <Button className='light-blue darken-4' waves='light' node='a' href='#single'>View</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Modal
                              header=''
                              trigger={<Button className='red darken-1'>Add to cart</Button>}>
                              <p>"iPhone 7" has been added to your cart.</p>
                            </Modal>
                        
                        </Card>
                        
                        <Card 
                        header=''
                        className='white' textClassName='black-text' title='Iphone 7'>
                            <span>New York&nbsp;&nbsp;<strong>$300 - $800</strong><br/><br/>Apple · iPhone · iPhone 7 · iPhone 7 (Original) · iOS · 4.7 in · Fingerprint Scanner · Rear Camera: 12 MP · 4G LTE · 14 hours talk time</span>
                        <br/><br/>
                        <Button className='light-blue darken-4' waves='light' node='a' href='#single'>View</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Modal
                              header=''
                              trigger={<Button className='red darken-1'>Add to cart</Button>}>
                              <p>"iPhone 7" has been added to your cart.</p>
                            </Modal>
                        
                        </Card>
                        
                    </Col>
                    
                    <Col s={12} m={12}>
                        
                        <CardPanel className='white' textClassName='black-text'>
                            <h5>3 Active Products</h5>
                        </CardPanel>
                
                    </Col>
                    
                </Row>

            </div>
        );
    }
} 

export default Profile;