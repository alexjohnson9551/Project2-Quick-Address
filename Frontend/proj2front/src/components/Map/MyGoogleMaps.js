import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";

import styled from 'styled-components';

import AutoComplete from './Autocomplete';
import Marker from './Marker';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

class MyGoogleMap extends Component {
    state = {
        mapApiLoaded: false,
        mapInstance: null,
        mapApi: null,
        geoCoder: null,
        places: [],
        center: [],
        zoom: 17,
        address: '',
        draggable: true,
        lat: null,
        lng: null
    };

    componentWillMount() {
        this.setCurrentLocation();
    }


    onMarkerInteraction = (childKey, childProps, mouse) => {
        if (this.props.allowInteraction) {
            this.setState({
                draggable: false,
                lat: mouse.lat,
                lng: mouse.lng
            });
        } else {
            this.setState({
                draggable: false,
                lat: this.props.presetLocation.lat,
                lng: this.props.presetLocation.lng
            });
        }
    }
    onMarkerInteractionMouseUp = (childKey, childProps, mouse) => {
        this.setState({ draggable: true });
        this._generateAddress();
    }

    _onChange = ({ center, zoom }) => {
        this.setState({
            center: center,
            zoom: zoom,
        });

    }

    _onClick = (value) => {
        if (this.props.allowInteraction) {
            this.setState({
                lat: value.lat,
                lng: value.lng
            });
        }
    }

    apiHasLoaded = (map, maps) => {
        this.setState({
            mapApiLoaded: true,
            mapInstance: map,
            mapApi: maps,
        });

        this._generateAddress();
    };

    addPlace = (place) => {
        if (this.props.allowInteraction) {
            this.setState({
                places: [place],
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            });
        } else {
            alert("add place called...? dunno what this is");
        }

        this._generateAddress()
    };

    _generateAddress() {
        const {
            mapApi
        } = this.state;

        if (this.props.allowInteraction) {
            const geocoder = new mapApi.Geocoder;

            geocoder.geocode({ 'location': { lat: this.state.lat, lng: this.state.lng } }, (results, status) => {
                // console.log(results);
                // console.log(status);
                if (status === 'OK') {
                    if (results[0]) {
                        this.zoom = 17;
                        this.setState({ address: results[0].formatted_address });
                    } else {
                        window.alert('No results found');
                    }
                } else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        } else {
            this.setState({
                lat: this.props.presetLocation.lat,
                lng: this.props.presetLocation.lng,
                center: [this.props.presetLocation.lat, this.props.presetLocation.lng],
                address: this.props.presetLocation.address
            });
        }
    }

    // Get Current Location Coordinates
    setCurrentLocation() {
        if ('geolocation' in navigator && this.props.allowInteraction) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    center: [position.coords.latitude, position.coords.longitude],
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            });
        } else {
            this.setState({
                center: [this.props.presetLocation.lat, this.props.presetLocation.lng],
                lat: this.props.presetLocation.lat,
                lng: this.props.presetLocation.lng
            });
        }
    }

    sendLocation() {
        let loc = {
            address: this.state.address,
            lat: this.state.lat,
            lng: this.state.lng,
        };
        this.props.addNewLocation(loc);
    }

    render() {
        const {
            places, mapApiLoaded, mapInstance, mapApi,
        } = this.state;

        let submitBar = this.props.allowInteraction ? <InputGroup>
            <AutoComplete map={mapInstance} mapApi={mapApi} addplace={this.addPlace} />
            <Button className="btnStyle" variant="success" onClick={() => this.sendLocation()}>Add Location</Button>
        </InputGroup> : <></>

        return (
            <Wrapper>
                {mapApiLoaded && (
                    submitBar
                )}
                <GoogleMapReact
                    center={this.state.center}
                    zoom={this.state.zoom}
                    draggable={this.state.draggable}
                    onChange={this._onChange}
                    onChildMouseDown={this.onMarkerInteraction}
                    onChildMouseUp={this.onMarkerInteractionMouseUp}
                    onChildMouseMove={this.onMarkerInteraction}
                    onChildClick={() => console.log('child click')}
                    onClick={this._onClick}
                    bootstrapURLKeys={{
                        key: 'AIzaSyCIqctgJ3yzNRUTJv4Bmo1QY3T4VGMYpiw',
                        libraries: ['places', 'geometry'],
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
                >
                    <Marker
                        text={this.state.address}
                        lat={this.state.lat}
                        lng={this.state.lng}
                    />


                </GoogleMapReact>

                <div className="info-wrapper">
                    <div className="map-details">Latitude: <span>{this.state.lat}</span>, Longitude: <span>{this.state.lng}</span></div>
                    <div className="map-details">Zoom: <span>{this.state.zoom}</span></div>
                    <div className="map-details">Address: <span>{this.state.address}</span></div>
                </div>


            </Wrapper >
        );
    }
}

export default MyGoogleMap;