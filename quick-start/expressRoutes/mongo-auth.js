import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';
import { environment } from 'src/environments/environment';


export const client = Stitch.initializeDefaultAppClient(environment.app);


export const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db(environment.db);
 

export class authUser {

 	constructor(email, password) {
 		const credential = new UserPasswordCredential(this.email, this.password)
 	}

 	login() {

		Stitch.defaultAppClient
		  .loginWithCredential(this.credential).then(authedId => {
		     console.log('successfully logged in with id: ' + this.email)
		  })
		    .catch(err => { console.log('login failed with error: ' + this.err) 
		});
 	}

   getEmail() {
	 	const emailPassClient = Stitch.defaultAppClient.auth.getProviderClient(
	  	UserPasswordAuthProviderClient.factory
		);
	 	emailPassClient.registerWithEmail("<user-email>", "<user-password>")
	  .then(() => {
	    console.log("Successfully sent account confirmation email!");
	  })
	  .catch(err => {
	    console.log("Error registering new user:", err);
	  });
	}

	confirm(){
		Stitch.initializeDefaultAppClient(environment.app)
	 	// Parse the URL query parameters
		const url = window.location.search
		const params = new URLSearchParams(url);
		const token = params.get('token');
		const tokenId = params.get('tokenId');

		// Confirm the user's email/password account
		const emailPassClient = Stitch.defaultAppClient.auth.getProviderClient(
		  UserPasswordAuthProviderClient.factory
		);

		return emailPassClient.confirmUser(this.token, this.tokenId)
	}

 }