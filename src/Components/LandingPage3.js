import React, { Component } from 'react';
import { Div,Text,Input,Image} from "atomize";
import './MainBody.css';
import {Button} from 'react-bootstrap'
import BottomTag from './BottomTag'
import ImagesLine from './ImagesLine'
import MainBody from './MainBody';
import ImagesLineBlock from './ImagesLineBlock'
import './LandingPage3.css'
class LandingPage3 extends Component {
    move=()=>{
        this.props.nextStep();
  }
  componentDidMount(){
    // console.log(`this.props ${this.props.address.value}, ${this.props.city.city_value}, ${this.props.state}, `)
    console.log("landing page 3")
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
                                nextStep={this.props.nextStep} freecar="Get A Peace Of Mind and" qoute="Save On Car Insurance" />
                                
                                   {/* <Div className="row row_bodytext1">
            <Text tag="h1" className="body-text1 pg1-text">
                     Get A Peace Of Mind and <br/> Save On Car Insurance
                            </Text>
           </Div>
    
       <Div className="row row_bodytext2">
           <Text className="body-text2 pg1-text">
                    Get your free auto quote with Quotehound <br/>  today and compare <strong>real</strong> quotes online!
           </Text>
       
       </Div>
      
    

       <Div className="row">
           
                  <Input className="body_input pg1-text" placeholder="Address" />
                  <Button className="input_button"  onClick={()=>this.move()}></Button>

       </Div> */}
                                {/*-------------------- Separate Component for Bottom Tag----------------------- */} 
                                     {/* <BottomTag/> */}

                                     

                         </Div>

                         
                         <Div className="col-lg-6 col-md-6 col-sm-12 " >

                                <Div className="row" >
                                    <Image className="LandingPage3-image" src="assests/man.png" alt="image"  />
                                    </Div>

                                     {/*-------------------- Separate Component for Images----------------------- */}
                     
                                      <Div style={{marginTop:"-60px"}}>
                                            <ImagesLine/>
                                        </Div> 
                         </Div>
                         <Div className="col-12">
                                <ImagesLineBlock/>
                         </Div>
                  </Div>

              </Div>
            </>
        );
    }
}

export default LandingPage3;