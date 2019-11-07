import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDW9dO7YqVXE1MPSUBIleovMEw_bCfNkj8",
    authDomain: "nba-react-54925.firebaseapp.com",
    databaseURL: "https://nba-react-54925.firebaseio.com",
    projectId: "nba-react-54925",
    storageBucket: "nba-react-54925.appspot.com",
    messagingSenderId: "613838665585",
    appId: "1:613838665585:web:ee2f42e116ec3c269368d0",
    measurementId: "G-KZZP7EZF12"
  };

  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  const firebaseLooper = (snapshot) =>{
    const data = [];
    snapshot.forEach((childSnapshot)=>{
      data.push({
        ...childSnapshot.val(),
        id:childSnapshot.key
      })
    });
    return data;
  }

  export {
    firebase,
    firebaseDB,
    firebaseTeams,
    firebaseVideos,
    firebaseArticles,
    firebaseLooper
  }
