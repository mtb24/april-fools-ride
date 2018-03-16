
// Use the default browser language preference instead of explicitly setting one
firebase.auth().useDeviceLanguage();

/* Facebook */
export function facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult()
    .then(function(result) {
        if (result.credential) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        console.log("FB access token: ", token);
        }
        // The signed-in user info.
        var user = result.user;
        console.log("Signed in user: ", user);
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.error("Facebook login error: ",error);
    });
}