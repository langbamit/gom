import React from 'react'
import { Platform } from 'react-native'
import {
	createStackNavigator,
	createBottomTabNavigator
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import ChatScreen from '../screens/ChatScreen'
import SettingsScreen from '../screens/SettingsScreen'
import MapScreen from '../screens/MapScreen'

const HomeStack = createStackNavigator({
	Home: HomeScreen
})

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-information-circle${focused ? '' : '-outline'}`
					: 'md-information-circle'
			}
		/>
	)
}

const ChatStack = createStackNavigator({
	Chat: ChatScreen
})

ChatStack.navigationOptions = {
	tabBarLabel: 'Chat',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-link${focused ? '' : '-outline'}`
					: 'md-link'
			}
		/>
	)
}

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen
})

SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-options${focused ? '' : '-outline'}`
					: 'md-options'
			}
		/>
	)
}

const MapStack = createStackNavigator({
	Map: MapScreen
})

MapStack.navigationOptions = {
	tabBarLabel: 'Maps',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios' ? `ios-map${focused ? '' : '-outline'}` : 'md-map'
			}
		/>
	)
}

export default createBottomTabNavigator({
	HomeStack,
	ChatStack,
	MapStack,
	SettingsStack
})
