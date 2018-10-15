import React from 'react'
import { View, StyleSheet, Linking, Platform } from 'react-native'
import { Asset, AppLoading } from 'expo'
import MapView from '../components/MapView'
import { GiftedChat } from 'react-native-gifted-chat'
import messagesData from '../api/chat'
import { KeyboardAvoidingView } from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import * as navigation from 'react-navigation'

const filterBotMessages = message =>
	!message.system && message.user && message.user._id && message.user._id === 2
const findStep = step => (_, index) => index === step - 1

export default class ChatScreen extends React.Component {
	static navigationOptions = {
		title: 'Chat'
	}

	constructor(props) {
		super(props)

		this.state = {
			messages: [],
			step: 0,
			appIsReady: false
		}

		this.onSend = this.onSend.bind(this)
		this.parsePatterns = this.parsePatterns.bind(this)
	}

	async componentWillMount() {
		// init with only system messages
		await Asset.fromModule(
			require('../assets/images/avatar.png')
		).downloadAsync()
		this.setState({
			messages: messagesData.filter(message => message.system),
			appIsReady: true
		})
	}

	onSend(messages = []) {
		const step = this.state.step + 1
		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, [
				{ ...messages[0], sent: true, received: true }
			]),
			step
		}))
		setTimeout(
			() => this.botSend(step),
			1200 + Math.round(Math.random() * 1000)
		)
	}

	botSend(step = 0) {
		const newMessage = messagesData
			.reverse()
			.filter(filterBotMessages)
			.find(findStep(step))
		if (newMessage) {
			this.setState(previousState => ({
				messages: GiftedChat.append(previousState.messages, newMessage)
			}))
		}
	}

	parsePatterns(linkStyle) {
		return [
			{
				pattern: /#(\w+)/,
				style: { ...linkStyle, color: 'darkorange' },
				onPress: () => Linking.openURL('http://gifted.chat')
			}
		]
	}
	render() {
		if (!this.state.appIsReady) {
			return <AppLoading />
		}
		return (
			<View
				style={styles.container}
				accessible
				accessibilityLabel="main"
				testID="main">
				<GiftedChat
					messages={this.state.messages}
					onSend={this.onSend}
					renderCustomView={MapView}
					keyboardShouldPersistTaps="always"
					user={{
						_id: 1
					}}
					parsePatterns={this.parsePatterns}
				/>
				{Platform.OS === 'android' ? <KeyboardSpacer /> : null}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff'
	}
})
