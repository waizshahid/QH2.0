import React, { Component } from 'react';
import { Div,Image} from "atomize";
import background from './rec.png'
import ImagesLine from './ImagesLine'
import BottomTag from './BottomTag'
import MainBody from './MainBody'
import './LandingPage1.css'
import ImagesLineBlock from './ImagesLineBlock'
class LandingPage1 extends Component {

    componentDidMount(){
        // console.log(`this.props ${this.props.address.value}, ${this.props.city.city_value}, ${this.props.state}, `)
        console.log("landing page 1")
    }

    render() {
        return (

    <>

           <Div  className="Container landing-page-1" >
               
                 <Div className="row">

                         <Div className="col-lg-6 col-md-6 col-sm-12" >
                           
                    {/*-------------------- Separate Component for Main Body----------------------- */}
                            <MainBody 
                            //  address={this.props.address} 
                            //  city={this.props.city}
                             state={this.props.state}
                             nextStep={this.props.nextStep} freecar="Free Car Insurance" qoute="Qoute"
                        
                             />
              
                    {/*-------------------- Separate Component for Images----------------------- */}
                            <ImagesLine />
                    {/*-------------------- Separate Component for Bottom Tag----------------------- */} 
                            {/* <BottomTag/> */}
                
                                   </Div>

                         <Div className="col-lg-6 col-md-6 col-sm-12 " >


                             <Div className="Right-Image" >

                                        <Image className="RecUpperImage" src="assests/RecUpper.png" alt="Image 5"/>

                                 </Div> 
                            
                             </Div>
                          
                             <Div className="col-sm-12 " >
                                 <ImagesLineBlock/>
                                </Div>
             
                         </Div>
                
                </Div>


    </>
        );
    }
}

export default LandingPage1;