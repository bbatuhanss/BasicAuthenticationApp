import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  AppRegistry,
  navigator
} from 'react-native';
import firebase from 'firebase';
import Login from './components/Login';
import Forgot from './components/Forgot';
import Register from './components/Register';
import ChangePassword from './components/changepassword';
import Devicelist from './components/deviceListing';
import HomePage from './components/homePage';
import Adddevices from './components/addDevice';
import Crcode from './components/qrCode';
import Tracking from './components/tracking';
import Addwacth from './components/addWacth';

firebase.initializeApp({
  apiKey: "AIzaSyDO_aamDRbYy8q-ddoEMaBKFxZQSYt5-Mk",
  authDomain: "loginforgot-15d84.firebaseapp.com",
  databaseURL: "https://loginforgot-15d84.firebaseio.com",
  projectId: "loginforgot-15d84",
  storageBucket: "loginforgot-15d84.appspot.com",
  messagingSenderId: "267318327997",
  appId: "1:267318327997:web:5b9ccb099f0a8b5d4e15d4",
  measurementId: "G-K6YPZGJHMG"

});
export default class newProject extends React.Component{
  state={currentPage:"login"}
  changePage=(targetPage) =>{
        this.setState({currentPage:targetPage})
  }
    render(){
      if(this.state.currentPage==='login'){
          return <Login changePage={this.changePage}/>
      }
      else if(this.state.currentPage==='register'){
          return <Register changePage={this.changePage}/>
      }
      else if(this.state.currentPage==='forgot'){
        return <Forgot changePage={this.changePage}/>
      }
      else if(this.state.currentPage==='changePassword'){
          return <ChangePassword changePage={this.changePage}/>
      }
      else if(this.state.currentPage==='device'){
        return <Devicelist changePage={this.changePage}/>
      }
      else if(this.state.currentPage==='homePage'){
          return <HomePage changePage={this.changePage}/>
      }
      else if(this.state.currentPage==='adddevices'){
        return <Adddevices changePage={this.changePage}/>
      }
      else if(this.state.currentPage==='qrcode'){
        return <Crcode changePage={this.changePage}/>
      }
      else if(this.state.currentPage==='tracking'){
        return <Tracking changePage={this.changePage}/>
      }
      else if(this.state.currentPage==='addwacht'){
        return <Addwacth changePage={this.changePage}/>
      }
    }    
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF'
  },
  welcome:{
    fontSize:20,
    textAlign:'center',
    margin:10
  },
  instruction:{
    textAlign:'center',
    color:'#333333',
    marginBottom:5

  }
});


