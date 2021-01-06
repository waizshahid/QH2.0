import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { ThemeProvider,StyleReset} from 'atomize';
import {Switch, Route,BrowserRouter} from 'react-router-dom'
import LandingPage1 from './Components/LandingPage1';
import LandingPage2 from './Components/LandingPage2';
import LandingPage3 from './Components/LandingPage3';
import NavBar from './Components/NavBar';
import Step2 from './Components/Step2';

import Step_4 from './Components/Step4/Step_4'

import Step_5 from './Components/Step5/Step_5'
import Step_6 from './Components/Step6/Step_6'
import Step_7_Addanother from './Components/Step_7_Addanother/Step_7_Addanother'
import Step_8_Currentinsurance from './Components/Step_8_Currentinsurance/Step_8_Currentinsurance'
import Step_9_DriverHistory from './Components/Step_9_DriverHistory/Step_9_DriverHistory'
import Step_10_HomeOwner from './Components/Step_10_HomeOwner/Step_10_HomeOwner'
import Step_11_LastPage from './Components/Step_11_LastPage/Step_11_LastPage'
import Step_three from './Components/Step_three'
import StepWizard from "react-step-wizard";

import React, { Component } from 'react';
 
 class App extends Component {


   
 
  state = {
    postData: {
      // extra entries
      // lp_response :"JSON",
      lp_campaign_id:"5fe0d62882ef8",
      lp_campaign_key:"Gn2J4NDMpk38vxyBbQm7",
      zip_code:"54000",
      Key: "rRkWg9.WrP.Ahm.Ic9hNr9kZruQMcRpNruwIc9tVxVpWrV4MgexMl8QKHpEE",
      TYPE: "22",
      IP_Address: "192.168.43.254",
      SRC: "Quantum_Website_Auto",
      Pub_ID: 13,
      Sub_ID: 12,
      trusted_form_cert_id: "",
      User_Agent: "",
      Landing_Page: "quantumassurance.com",
      TCPA_Consent: "Yes",
      TCPA_Language:
        "By hitting submit below, I provide my express written consent to the following. Telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates  or representatives at the phone number (including wireless number), email address, and postal address provided by me. Telemarketing calls, text messages, emails, and postal mail (including wireless number), email address, and postal address provided by me. Calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automated Telephone Dialing System or prerecorded or artificial voices. Electronic video monitoring and recordation of my activities on this Site; and I acknowledge that I may revoke my consent at any time by Calling 1 888-316-1350 or emailing “STOP” to  optout@quantumassurance.com.  I AGREE TO ALL OF THE ABOVE AND SEND MY QUOTE",
      Format: "JSON",
      leadid_token: "",
      Vehicle_1_Average_One_Way_Mileage: 0,
      Vehicle_1_Parking: "unknown",
      Vehicle_1_Average_Days_Per_Week_Used: 0,
      Vehicle_1_Desired_Collision_Coverage: "No Coverage",
      Vehicle_1_Desired_Comprehensive_Coverage: "No Coverage",
      active_license: "",
      Driver_1_Age_When_First_Licensed: 0,
      Driver_1_Occupation: "Student",
      Driver_1_Current_Residence: "Other",
      tickets_or_claims_in_last_three_years: "",
      Driver_1_Insured_Past_30_Days: "unknown",
      Driver_1_Continuously_Insured_Years: 1,
      Driver_1_Additional_Drivers: "No",
      Driver_1_Additional_Vehicles: "No",
      Driver_1_Bankruptcy_In_Past_5_Years: "unknown",
      Driver_1_DUI_DWI_In_The_Past_5_Years: "unknown",
      Driver_1_Reposessions_In_The_Past_5_Years: "unknown",
      // S1
      // zip_code: "",
      city: "",
      state: "",
      Driver_1_Licensed_State: "",
      // S2
      vehicle_year: "",
      // S3
      vehicle_make: "",
      // S4
      vehicle_model: "",
      // S5
      vehicle_primary_use: "",
      // S6
      annual_mileage:"" ,
      // S7
      desired_coverage_level: "",
      // S8
      vehicle_ownership: "",
      // S9

      // S10
      // Current Insurance Carrier
      // Continuous Coverage
      // S11
      // Active Licence?
      // Ticket/Claim in Last 3 years?
      Driver_1_Filing_Required: "None",
      // S12
      // Homeowner
      Driver_1_Marital_Status: "Single",
      gender: "",
      // S13
      Driver_1_Education: "",
      Driver_1_Credit_Rating: "unknown",
      // S14
      dob: "",
      // S15
      first_name: "",
      last_name: "",
      // S16
      address: "",
      email_address: "",
      phone_home: "",
    },
    postData2: {
      email: "",
      phone: "",
      address: "",
      zip: "",
      home_ownership: "",
      vehicles: [
        // {
        // 	year: "",
        // 	model: "",
        // 	primary_purpose: "",
        // 	annual_mileage: "",
        // 	ownership: "",
        // },
      ],
      drivers: [
        {
          driver: "",
          gender: "",
          marital_status: "",
          birth_date: "",
          education: "",
          credit_rating: "",
          sr_22: "No",
        },
      ],
      current_company: "",
      continuous_coverage: "",
      //coverage_type: "",
    },
    year: 0,
    name: "Ford",
    zipCodeCity: "",
    username: "",
    table: [],
    home_ownership: 0,
    sr_22: "No",
    current_company: "",
    continuous_coverage: "",
  };

  maintainTable = () => {
    this.setState({
      table: [
        ...this.state.table,
        {
          name: this.state.name,
          model: this.state.postData.vehicle_model,
          year: this.state.year,
        },
      ],
    });
  };

  deleteTableItem = (value) => {
    this.setState({ table: value });
  };

  vehicleForPostData2 = (ownershipValue) => {
    const tempData = this.state.postData2;
    tempData.vehicles.push({
      year: this.state.postData.vehicle_year,
      model: this.state.postData.vehicle_model,
      primary_purpose: this.state.postData.vehicle_primary_use,
      annual_mileage: this.state.postData.annual_mileage,
      ownership: ownershipValue,
    });

    this.setState({ postData2: tempData });
  };

  deleteVehicleForPostData2 = (value) => {
    this.setState({ postData2: value });
  };
  copyValuesToPostData2 = () => {
    var tempArray = {
      email: this.state.postData.email_address,
      phone: this.state.postData.phone_home,
      address: this.state.postData.address,

      zip: this.state.postData.zip_code,
      home_ownership: this.state.home_ownership,
      vehicles: this.state.postData2.vehicles,
      drivers: [
        {
          driver:
            this.state.postData.first_name +
            " " +
            this.state.postData.last_name,
          gender: this.state.postData.gender,
          marital_status: this.state.postData.Driver_1_Marital_Status,
          birth_date: this.state.postData.dob,
          education: this.state.postData.Driver_1_Education,
          credit_rating: this.state.postData.Driver_1_Credit_Rating,
          sr_22: this.state.sr_22,
        },
      ],
      current_company: this.state.current_company,
      continuous_coverage: this.state.continuous_coverage,
      coverage_type: this.state.postData.desired_coverage_level,
    };
    this.setState({ postData2: tempArray });
    window.MediaAlphaExchange = {
      placement_id: "1WNbWprsUtu4bb-7VkTVgf2l57oZew",
      version: "17",
      type: "ad_unit",
      ua_class: "auto",
      data: tempArray,
    };
    window.MediaAlphaExchange__load("target");
    return this.state.postData2;
  };
    yearForVehicleName = (value) => {
      this.setState({ year: value });
    };
   
  nameForVehicalModel = (value) => {
    this.setState({ name: value });
  };
  currentCompanyForPostData2 = (value) => {
    this.setState({ current_company: value });
  };
  continuousCoverageForPostData2 = (value) => {
    this.setState({ continuous_coverage: value });
  };
  sr22ForPostData2 = (value) => {
    this.setState({ sr_22: value });
  };
  homeOwnershipForPostData2 = (value) => {
    this.setState({ home_ownership: value });
  };
   render() {


     return (
        <ThemeProvider>
    

        <NavBar/> 
 
          <BrowserRouter>
        <Switch>
           <Route path="/land1" exact component={LandingPage1} > </Route>
           <Route path="/land2" exact component={LandingPage2} > </Route>
           <Route path="/land3" exact component={LandingPage3} > </Route>
         </Switch>
        </BrowserRouter>
       

    <StepWizard initialStep={1} >
  
  <LandingPage1

// address={(address_value)=>{
// console.log(address_value)
// console.log(`app.js address value ${address_value}` )

//    this.setState({
//       postData:{ ...this.state.postData, address: address_value.toString()}
    
//  })
//   console.log(`this.state.postData.address ${this.state.postData.address}`)

//      }
//   }
// city={(city_value)=>{
// console.log(`app.js state ${city_value}` )

//  console.log(city_value);
//    this.setState({
//       postData:{ ...this.state.postData, city: city_value.toString()}
    
//  })
 
//      console.log(`this.state.postData.city ${this.state.postData.city}`)
 
//  }

// }
  state={(value, address_value, city_value)=>{
//console.log(`app.js state ${value} address ${address_value}  city ${city_value}` )
    this.setState({
      postData:{ ...this.state.postData, state: value, address:address_value, city:city_value , leadid_token: document.getElementById("leadid_token").value,
      trusted_form_cert_id: document.getElementById(
        "trusted_form_cert_id_0"
      ).value,}
    })
     //copied code for lead id
    console.log(`this.state.postData.address ${this.state.postData.state}`)
     console.log(document.getElementById("leadid_token").value);
              console.log(document.getElementsByTagName("script")[0].src);
              // this.setState({
              //   postData: {
              //     ...this.state.postData,
                 
              //   },
              // });
              console.log(document.getElementById("trusted_form_cert_id_0"));
            }
     //copied code for lead id

}
  
 

  /> 
  <LandingPage2
  
  // address={(value) =>

  //   this.setState({
  //     postData: { ...this.state.postData, address: value }
  //   })
  // }

  // city={(value)=>

  //   this.setState({
  //     postData:{ ...this.state.postData, city: value}
  //   })
  // }

   state={(value, address_value, city_value)=>{
//console.log(`app.js state ${value} address ${address_value}  city ${city_value}` )
    this.setState({
      postData:{ ...this.state.postData, state: value, address:address_value, city:city_value}
    })
     console.log(`this.state.postData.address ${this.state.postData.state}`)
}
  }
  />
  <LandingPage3
  
  // address={(value) =>

  //   this.setState({
  //     postData: { ...this.state.postData, address: value }
  //   })
  // }

  // city={(value)=>

  //   this.setState({
  //     postData:{ ...this.state.postData, city: value}
  //   })
  // }

  state={(value, address_value, city_value)=>{
//console.log(`app.js state ${value} address ${address_value}  city ${city_value}` )
    this.setState({
      postData:{ ...this.state.postData, state: value, address:address_value, city:city_value}
    })
     console.log(`this.state.postData.address ${this.state.postData.state}`)
}
  }
  /> 
  
   <Step2
 
  first_name={(value) =>
 // console.log(`this is ${value}`)
    this.setState({
      postData: {
        ...this.state.postData,
        first_name: value,
      },
    })
  }
 
  last_name={(value) =>
  
 // console.log(value)
    this.setState({
      postData: { ...this.state.postData, last_name: value },
    })
  }
  dob={(value) =>
 // console.log(value)
  
    this.setState({
      postData: { ...this.state.postData, dob: value },
    })
   }
  email_address={(value) =>
 //console.log(value)
    this.setState({
      postData: { ...this.state.postData, email_address: value },
    })
  }
  phone_home={(value) =>
  //console.log(value)
    this.setState({
      postData: {
        ...this.state.postData,
        phone_home: value,
      },
    })
  }
  gender={(value) =>
//  console.log(value)
    this.setState({
      postData: { ...this.state.postData, gender: value },
    })
  }
  
  />  
<Step_three 
yearForVehicleName={this.yearForVehicleName}


vehicle_year={(value) =>
 // console.log(value)
this.setState({
postData: { ...this.state.postData, vehicle_year: value },
})
}
/>

<Step_4
              year={this.state.year}
              nameForVehicalModel={this.nameForVehicalModel}
              vehicle_make={(value) =>
             
                this.setState({
                  postData: { ...this.state.postData, vehicle_make: value },
                })
              }
          />

<Step_5
          searchModel={{ year: this.state.year, make: this.state.name }}
          vehicle_model={(value) =>
          //  console.log(value)
            this.setState({
              postData: { ...this.state.postData, vehicle_model: value },
            })
          }
          />
    
     <Step_6

name={this.state.name}
vehicle_primary_use={(value) =>{
  console.log(value)
 this.setState({
 
  postData:{
    ...this.state.postData,
   vehicle_primary_use:value
  }
  
  
  
})
  // this.setState({
  //   postData: {
  //     ...this.state.postData,
  //     vehicle_primary_use: value,
    
  //   },
  // })
}}

annual_mileage={(value) =>
 // console.log(value)
  this.setState({
    postData: {
      ...this.state.postData,
      annual_mileage: value,
    },
  })
} 

desired_coverage_level={(value) =>
 // console.log(value)
  this.setState({
    postData: {
      ...this.state.postData,
      desired_coverage_level: value,
    },
  })
}

name={this.state.name}
maintainTable={this.maintainTable}
vehicleForPostData2={this.vehicleForPostData2}
vehicle_ownership={(value) =>
//  console.log(value)
  this.setState({
    postData: {
      ...this.state.postData,
      vehicle_ownership: value,
    },
  })
}

/>
  <Step_7_Addanother
 table={this.state.table}
 deleteTableItem={this.deleteTableItem}
 postData2={this.state.postData2}
 deleteVehicleForPostData2={this.deleteVehicleForPostData2}
          />
           <Step_8_Currentinsurance
         currentCompanyForPostData2={this.currentCompanyForPostData2}
         continuousCoverageForPostData2={this.continuousCoverageForPostData2}
         />
           <Step_9_DriverHistory
      sr22ForPostData2={this.sr22ForPostData2}
     
      active_license={(value) =>
    //  console.log(value)
          this.setState({
          postData: {
            ...this.state.postData,
          active_license: value,
          },
        })
       }

      Driver_1_Filing_Required={(value) =>
        
       // console.log(value)
        this.setState({
          postData: {
            ...this.state.postData,
            Driver_1_Filing_Required: value,
          },
        })
      }

     tickets_or_claims_in_last_three_years={(value,license_value) =>{
     
   //  console.log(value)
      this.setState({
          postData: {
            ...this.state.postData,
          tickets_or_claims_in_last_three_years: value,  active_license: license_value,
          },
        })
      }}
     />

  <Step_10_HomeOwner  
  homeOwnershipForPostData2={this.homeOwnershipForPostData2}
  postData={this.state.postData}
 
  />
   <Step_11_LastPage/>
</StepWizard>   
 

</ThemeProvider>
     );
}
 }

 export default App;

