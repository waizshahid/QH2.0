import React, { Component } from 'react';
import './MainBody.css';
import { Div, Text, Input } from 'atomize';
import { Button } from 'react-bootstrap';
import { withGoogleMap, GoogleMap, withScriptjs} from 'react-google-maps';
import Autocomplete from 'react-google-autocomplete';
import Geocode from 'react-geocode';
Geocode.setApiKey('AIzaSyAe-RvE9UpwF-SNkKvlpt4YpjOgDfaUCpQ');
Geocode.enableDebug();
class MainBody extends Component {
	state = {
        searched : false,
		address: '',
		city: '',
		area: '',
		state: '',
	};
	move = () => {
		this.props.nextStep();
	};

	getCity = (addressArray) => {
		let city = '';
		for (let i = 0; i < addressArray.length; i++) {
			if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
				city = addressArray[i].long_name;
				return city;
			}
		}
	};
	getArea = (addressArray) => {
		let area = '';
		for (let i = 0; i < addressArray.length; i++) {
			if (addressArray[i].types[0]) {
				for (let j = 0; j < addressArray[i].types.length; j++) {
					if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
						area = addressArray[i].long_name;
						return area;
					}
				}
			}
		}
	};
	getState = (addressArray) => {
		let state = '';
		for (let i = 0; i < addressArray.length; i++) {
			for (let i = 0; i < addressArray.length; i++) {
				if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
					state = addressArray[i].long_name;
					return state;
				}
			}
		}
	};
	onPlaceSelected = (place) => {
		console.log('plc', place);
		const address = place.formatted_address,
			addressArray = place.address_components,
			city = this.getCity(addressArray),
			area = this.getArea(addressArray),
			state = this.getState(addressArray);
		// Set these values in the state.
		this.setState({
            searched:true,
			address: address ? address : '',
			area: area ? area : '',
			city: city ? city : '',
			state: state ? state : '',
        });
        console.log(this.state)
	};

	render() {
		const AsyncMap = withScriptjs(
			withGoogleMap((props) => (
				<GoogleMap google={this.props.google}>
					<Autocomplete style={{}} placeholder={this.state.city ? `${this.state.city} ${this.state.area} ${this.state.state} ${this.state.address}`: 'Address'} className='body_input pg1-text' onPlaceSelected={this.onPlaceSelected} types={['(regions)']} />
				</GoogleMap>
			)),
		);
		return (
			<>
				<Div className='row row_bodytext1'>
					<Text tag='h1' className='body-text1 pg1-text'>
						Free Car Insurance
					</Text>
				</Div>

				<Div className='row'>
					<Text tag='h1' className='body-text1 pg1-text'>
						Quote
					</Text>
				</Div>

				<Div className='row row_bodytext2'>
					<Text className='body-text2 pg1-text'>Get your free auto quote with Quotehound</Text>
				</Div>

				<Div className='row'>
					<Text className='body-text2 pg1-text'>
						today and compare <strong>real</strong> quotes online!
					</Text>
				</Div>

				<Div className='row'>
					<Div className='col-6'>
						<AsyncMap
							googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${'AIzaSyAe-RvE9UpwF-SNkKvlpt4YpjOgDfaUCpQ'}&libraries=places`}
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div style={{ height: this.props.height }} />}
							mapElement={<div style={{ height: `100%` }} />}
						/>
						{/* <Input className='body_input pg1-text' placeholder='Address' onChange={() => {}} /> */}
					</Div>

					<Div className='col-6'>
						<Button className='input_button' onClick={() => this.move()}></Button>
					</Div>
				</Div>
			</>
		);
	}
}

export default MainBody;
