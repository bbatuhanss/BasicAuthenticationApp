// @ts-check
import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  AppRegistry,
  TouchableHighlight,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  Alert
  
} from 'react-native';

import firebase from 'firebase';

export default class newProject extends React.Component{
    constructor(props){
      super(props)
      this.state={
        email:"bbatuhansevincc@gmail.com",
        newpassword:"",
        currentPassword:"631463",
        newpasswordagain:"",
        hidePassword: true
      }
    } 
    managePasswordVisibility = () =>
    {
      this.setState({ hidePassword: !this.state.hidePassword });
    }
    reauthenticate=async(currentPassword) =>{
      
        var user=firebase.auth().currentUser;
        var cred=await firebase.auth.EmailAuthProvider.credential(user.email,currentPassword)
        return user.reauthenticateWithCredential(cred); 
    } 
    submite=() =>{
      if(this.state.newpassword===this.state.newpasswordagain){
        this.reauthenticate(this.state.currentPassword).then(() =>{
          firebase.auth().currentUser.updatePassword(this.state.newpassword).then(()=>{  
              alert('Password was changed!!')
            
          }).catch((e)=>{
              alert(e)
          })
      }).catch((error) => {
              Alert.alert(error.message);
      }); 
        
      }   
      else
        alert("entered is not the same") 
    }
    
    render(){
    return(
        <View style={styles.container}>
            <TouchableHighlight onPress={() => this.props.changePage('login')} underlayColor={'transparent'}>
                <View style={styles.backbut}>
                   <Text style={styles.backout}>
                         {'<'}
                    </Text>
                </View>
              </TouchableHighlight>
            <Text style={styles.welcome}>
                 Change Password
            </Text>
            <TextInput style={styles.ramInput}
                    onChangeText={(currentPassword) => this.setState({currentPassword})}
                    placeholder={" Current Password"}
                    color={"black"}
                    placeholderTextColor={"#CCC"}
                    underlineColorAndroid="transparent" 
                    secureTextEntry={this.state.hidePassword}
              />
            <TextInput style={styles.ramInput}
                    onChangeText={(newpassword) => this.setState({newpassword})}
                    placeholder={" New Password "}
                    color={"black"}
                    placeholderTextColor={"#CCC"}
                    underlineColorAndroid="transparent" 
                    secureTextEntry={this.state.hidePassword}
              />
                <TextInput style={styles.ramInput}
                    onChangeText={(newpasswordagain) => this.setState({newpasswordagain})}
                    placeholder={" New Password Again"}
                    color={"black"}
                    placeholderTextColor={"#CCC"}
                    underlineColorAndroid="transparent" 
                    secureTextEntry={this.state.hidePassword}
              />  
                <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                  <Image source = { ( this.state.hidePassword ) ? require('./images/hide.png') : require('./images/view.png') } style = { styles.btnImage } />
              </TouchableOpacity>
              
            <TouchableHighlight onPress={this.submite} underlayColor={'transparent'}>
                <View style={styles.bigbutt}>
                    <Text style={styles.buttokstyle}>Change</Text> 
                </View>
            </TouchableHighlight>
        </View>
        );
    }
}
const styles = StyleSheet.create({
  btnImage:
{
    height: '80%',
    width: '80%',
    marginTop:20
  },
  visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },
  buttokstyle:{
    color:"#E87B79",
    alignSelf:"center",
    fontSize:20,
    fontWeight:"500",
    height:50,
    width:"auto",
    marginTop:10,   
},
  bigbutt:{
    width:300,
    height:50,
    alignSelf:"center",
    backgroundColor:'white',
    fontSize:40,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius:10,
    marginTop:10
},
  ramInput:{
    
    alignSelf: 'stretch',
    paddingRight: 45,
    paddingLeft: 8,
    paddingVertical: 0,
    borderBottomWidth:0.5,
    height:50,
    width:300,
    alignSelf:"center",
    color:'#E87B79',
    marginTop:25,
  }, 
  backout:{
    color:"white",
    fontSize:22,
    alignSelf:"center",
    marginTop:-5
    
  },
  backbut:{
    height:50,
    width:50,
    backgroundColor:"#E87B79",
    borderRadius:25,
    marginTop:30,
    marginLeft:20,
    justifyContent:"center"
  },
    container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF',
    paddingHorizontal: 25,
    
    },
    welcome:{
    fontSize:20,
    textAlign:'center',
    margin:60
    },
    instruction:{
    textAlign:'center',
    color:'#333333',
    marginBottom:5

    }
});