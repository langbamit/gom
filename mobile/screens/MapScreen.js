import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Constants, MapView, Location, Permissions } from 'expo'

const LATITUDE_DELTA = 0.01
const LONGITUDE_DELTA = 0.01

export default class MapScreen extends Component {
	state = {
		mapRegion: null,
		hasLocationPermissions: false,
		locationResult: null
	}

	componentDidMount() {
		this._getLocationAsync()
	}

	_handleMapRegionChange = mapRegion => {
		this.setState({ mapRegion })
	}

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION)
		if (status !== 'granted') {
			this.setState({
				locationResult: 'Permission to access location was denied'
			})
		} else {
			this.setState({ hasLocationPermissions: true })
		}

		let location = await Location.getCurrentPositionAsync({})
		console.log(location)
		this.setState({ locationResult: JSON.stringify(location) })

		// Center the map on the location we just fetched.
		this.setState({
			mapRegion: {
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA
			}
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.paragraph}>Pan, zoom, and tap on the map!</Text>

				{this.state.locationResult === null ? (
					<Text>Finding your current location...</Text>
				) : this.state.hasLocationPermissions === false ? (
					<Text>Location permissions are not granted.</Text>
				) : this.state.mapRegion === null ? (
					<Text>Map region doesn't exist.</Text>
				) : (
					<MapView
						style={{ alignSelf: 'stretch', height: 400 }}
						region={this.state.mapRegion}
					/>
				)}

				<Text>Location: {this.state.locationResult}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#ecf0f1'
	},
	paragraph: {
		margin: 10,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#34495e'
	}
})
/* https://github.com/react-community/react-native-maps/issues/209#issuecomment-350907665 */
