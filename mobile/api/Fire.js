import firebase from 'firebase'

class Fire {
	constructor() {
		this.init()
		this.observeAuth()
	}

	init() {
		var config = {
			apiKey: 'AIzaSyAq9HUYse8IEFoI5W_Kfrx_S6yVo2_r9V8',
			authDomain: 'gom-chat.firebaseapp.com',
			databaseURL: 'https://gom-chat.firebaseio.com',
			projectId: 'gom-chat',
			storageBucket: 'gom-chat.appspot.com',
			messagingSenderId: '357182168427'
		}
		// Initialize Firebase
		firebase.initializeApp(config)
	}

	observeAuth() {
		firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
	}

	onAuthStateChanged = user => {
		if (!user) {
			try {
				firebase.auth().signInAnonymously()
			} catch ({ message }) {
				alert(message)
			}
		}
	}
}
Fire.shared = new Fire()
export default Fire
