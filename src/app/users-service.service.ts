import { Injectable } from '@angular/core';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GithubAuthProvider } from "firebase/auth";
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  public isLogged = false;
  public userID = '';
  public userEmail:any = '';

  constructor(private auth:Auth, private router: Router) { }

  checkAuthState(){
    onAuthStateChanged(this.auth, (user)=>{
      if(user){
        this.isLogged = true;
        this.userID = user.uid;
        this.userEmail = user.email;
        return true;
      }else{
        this.isLogged = false;
        this.userID = '';
        return false;
      }
    })
  }


  normalRegister(email:string, password:string){
    createUserWithEmailAndPassword(this.auth, email, password) // registro normal
        .then((userCredential) => {
          // Registered
          const user = userCredential.user;
          this.isLogged = true;
          this.router.navigate(["/"]);
        })
        .catch((error) => {
          this.isLogged = false;
          this.userID = '';
        });
}

  googleRegister(){
    signInWithPopup(this.auth, new GoogleAuthProvider()) //registro con Google
        .then((userCredential) => {
          // Registered
          const user = userCredential.user;
          this.isLogged = true;
          this.router.navigate(["/"]);
        })
        .catch((error) => {
          this.isLogged = false;
          this.userID = '';
        });
  }

  githubLogin(){
    signInWithPopup(this.auth, new GithubAuthProvider()) //login con Github
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.isLogged = true;
        this.router.navigate(["/"]);
    })
    .catch((error) => {
      this.isLogged = false;
      this.userID = '';
    });
  }

  normalLogIn(email:string, password:string){
    signInWithEmailAndPassword(this.auth, email, password) // login normal
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            this.isLogged = true;
            this.router.navigate(["/"]);
        })
        .catch((error) => {
          this.isLogged = false;
          this.userID = '';
        });
  }

  googleLogIn(){
    signInWithPopup(this.auth, new GoogleAuthProvider()) //login con Google
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            this.isLogged = true;
            this.router.navigate(["/"]);
        })
        .catch((error) => {
          this.isLogged = false;
          this.userID = '';
        });
  }

  githubRegister(){
    signInWithPopup(this.auth, new GithubAuthProvider()) //register con Github
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.isLogged = true;
        this.router.navigate(["/"]);
    })
    .catch((error) => {
      this.isLogged = false;
      this.userID = '';
    });
  }

  logOut(){
    signOut(this.auth).then(() => {
      // Sign-out successful.
      this.isLogged = false;
      this.router.navigate(["/"]);
      }).catch((error) => {
      // An error happened.
  });
  }
}
