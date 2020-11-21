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
import Register from './Register';
import Forgot from './Forgot';
import changePassword from './changepassword';
import device from './deviceListing';
import homePage from './homePage';
import AsyncStorage from '@react-native-community/async-storage'

import firebase from 'firebase';
export default class Login extends React.Component{
  constructor(props){
    super(props)
     this.state={
      hidePassword: true,
      email:'admin',
      password:'123qwe',
    }
  } 
  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
  

  onButtonClicked = async () => {
    const{email,password}=this.state;
    var request = {
        userNameOrEmailAddress: email,  
        password: password, 
        AbpTenantId: 1, 
    }
    var tenantId = null;
    var token = "";
    try {
        const response = await (await fetch('http://91.191.173.185/api/TokenAuth/Authenticate', {  
            method: 'post',  
            headers: {
            'Accept': '*/*',
            'Abp.TenantId': tenantId,
            'Content-Type': 'application/json',
            'Abp.TenantId': 1,
            },
            body: JSON.stringify(request)
        })).json()
        console.log('responseeee',JSON.stringify(response,null,2)) 
        if(response.success){
          const accessToken = response.result.accessToken 
          await AsyncStorage.setItem("token", `Bearer ${accessToken}`) 
          this.props.changePage('homePage')
        }
      else{
        Alert.alert('login Failed!') 
        this.setState({email:'',password:''})
      }
    } catch(e) {
      Alert.alert('Error')
      console.log('dsfsdfsdfsdfsdfsd',e)
      }    
}
  submite(){
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(){ 
      alert('You are loged in')
    }).catch(function(e){
        alert(e)
    })
  }
  render(){
    return(
      <View style={styles.container}>
            <Image
                style={{
                  width: 200,
                  height: 150,
                  paddingTop: 150
                }}
                resizeMode='contain'
                
                source ={require('./images/unnamed.jpg') }
              />
          <Text style={styles.welcome}>
                    Sign In
          </Text>
          <Text style={styles.textsettings}>
                Email
          </Text>
          <TextInput style={styles.ramInput}
                onChangeText={(email) => this.setState({email})}
                placeholder={"Enter Email"}
                secureTextEntry={false}
                color={"black"}
                placeholderTextColor={"#CCC"}
                value={this.state.email}
            />
          <Text style={styles.textsettings}>
                  Password
          </Text>
          <TextInput style={styles.ramInput}
                onChangeText={(password) => this.setState({password})}
                placeholder={"Enter password"}
                color={"black"}
                placeholderTextColor={"#CCC"}
                underlineColorAndroid="transparent" 
                secureTextEntry={this.state.hidePassword}
                value={this.state.password} 
          />
         <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
          <Image source = { ( this.state.hidePassword ) ? require('./images/hide.png') : require('./images/view.png') } style = { styles.btnImage } />
        </TouchableOpacity> 
          
          <TouchableHighlight  onPress={this.onButtonClicked.bind(this)} underlayColor={'transparent'}>
          
            <View style={styles.box}>
                <Text style={styles.innards}>Sıgn In</Text> 
            </View>
        </TouchableHighlight> 
          <TouchableHighlight onPress={() =>this.props.changePage('register')} >
            <View>
                <Text style={styles.innards1}>
                  Register
                </Text>
           
            </View>
          
          </TouchableHighlight >
        
          <TouchableHighlight onPress={() => this.props.changePage('changePassword')}>
            <View >
                <Text style={styles.innards1}>
                 Change Password 
                </Text>
            </View>
          </TouchableHighlight>
        <View style={styles.container1}>
        <TouchableHighlight onPress={() => this.props.changePage('forgot')}>
          <View>
              <Text style={styles.forgotsize} >
                Forgot Password?
              </Text>
          </View>
        </TouchableHighlight>
      </View>
      </View>  
      
      
         
      );
    }
  }

  const styles = StyleSheet.create({
  
    container1: {
      position:'absolute',
      bottom: 40,
      left: 0,
    },
    forgotsize:{
      fontSize:20,
      color:'#808080',
      paddingHorizontal: 15,
    }, 
    btnImage:
      {
        resizeMode: 'contain',
        height: '80%',
        width: '80%',
        position:'absolute',
      },
      visibilityBtn:
      {
        position: 'absolute',
        right: 8,
        height: 40,
        width: 35,
        padding: 4,
        bottom:260
      },
      ramInput:{
        borderBottomWidth:0.5,
        height:50,
        width:365,
        
        color:'#E87B79',
        marginTop:5,
      }, 
      innards1:{
        color:'#ff8c00' ,
        flexDirection: 'row',
        fontSize:15,
        marginTop:10,
      },
      innards:{
        color:'white' ,
        alignSelf:"center",
        fontSize:20,
        fontWeight:"500"
      },
      box:{
        backgroundColor:'#ff8c00',
        fontSize:40,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius:10,
        height:45,
        width:370,
        justifyContent:"center",
        marginTop:40,
        borderRadius:80,
      },
      container:{
        alignItems:'center',
        paddingHorizontal: 5,
        backgroundColor:'white',
        height:650
        
      },
      welcome:{
        fontSize:30,
        alignSelf:'flex-start',
        margin:10,
        color:'#808080',
        marginTop:5,
        fontWeight: 'bold',
        
      },
      textsettings:{
        fontSize:25,
        alignSelf:'flex-start',
        marginTop:6  ,
        color:'#ff8c00' ,
        fontWeight: 'bold',
        paddingHorizontal: 15,
      },
  });