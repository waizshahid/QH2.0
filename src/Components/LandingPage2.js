import React, { Component } from 'react';
import { Div,Image } from "atomize";
import MainBody from './MainBody'
import BottomTag from './BottomTag'
import ImagesLine from './ImagesLine'
import ImagesLineBlock from './ImagesLineBlock'
import './LandingPage2.css'
class LandingPage2 extends Component {
  componentDidMount(){
    // console.log(`this.props ${this.props.address.value}, ${this.props.city.city_value}, ${this.props.state}, `)
    console.log("landing page 2")
}
    render() {
        return (
            <>
              <Div className="Container">
                  <Div className="row">
                         <Div className="col-lg-6 col-md-6 col-sm-12" >
                              
                                {/*-------------------- Separate Component for Main Body----------------------- */}
                                    <MainBody
                                     address={this.props.address} 
                                     city={this.props.city}
                                     state={this.props.state}
                                    nextStep={this.props.nextStep} freecar="Free Car Insurance" qoute="Qoute" />
                                {/*-------------------- Separate Component for Bottom Tag----------------------- */} 

                                  {/* <Div style={{marginTop:" 75px"}}>   
                                     <BottomTag/>              
                                    </Div> */}
                         </Div>

                         <Div className="col-lg-6 col-md-6 col-sm-12 " >

                                <Div className="row">
                                  <Div className="col-12">
                                    <Image className="Landingpage2-image" src="assests/car.png" alt="Car" />
                                    </Div>
                                    </Div>
                      
                                     {/*-------------------- Separate Component for Images----------------------- */}
                                  
                                        <Div className="col-12" style={{    marginTop: "-230px", marginLeft: "-55px"}}>
                                            <ImagesLine/>
                                        </Div>
                                     
                         </Div>
                         
                       {/*-------------------- Separate Component for Images for Mobile View----------------------- */}
                                           
                       <Div className="col-sm-12" style={{marginTop:"50px"}} >
                                               <ImagesLineBlock/>
                                          </Div>

                  </Div>
              </Div>
            </>
        );
    }
}

export default LandingPage2;