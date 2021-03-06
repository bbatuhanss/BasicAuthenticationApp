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
import AsyncStorage from '@react-native-community/async-storage'

export default class newProject extends React.Component{
  constructor(props){
    super(props)
    this.state={
      userName:"",
      Name: "",
      surName: "",
      email: "",
      password: "",
      hidePassword: true,
     
    }
  }  
  

  onButtonClicked2= async () => {
    const{Name,surName,userName,email,password}=this.state;
    var request = {
        emailAddress: email,  
        password: password, 
        name:Name,
        surname:surName,
        username:userName,
        AbpTenantId:1

    }
 
    var token = "";
    try {
        const response = await (await fetch('http://91.191.173.185/api/services/app/Account/Register', {  
            method: 'post',  
            headers: {  
            'Accept': '*/*',
            'Abp.TenantId': 1,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(request)
        })).json()
        console.log('responseeee',JSON.stringify(response,null,2)) 
        if(response.success){
          const accessToken = response.result.accessToken 
          await AsyncStorage.setItem("token", `Bearer ${accessToken}`) 
          this.props.changePage('login')
        }
      else{
        Alert.alert('Sing Up Failed!!')
        this.setState({email:'',password:''})
      }
    } catch(e) {
      Alert.alert('Error')
      console.log('dsfsdfsdfsdfsdfsd',e)
      }    
  }
  submite(){
     firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(function(){  
      alert('success!')
      
     }).catch(function(e){
          alert(e)
     })
 }

  
    
    render(){
        return(
          <View style={styles.container}>
              <TouchableHighlight onPress={() => this.props.changePage('login')}>
                <View style={styles.backbut}>
                   <Text style={styles.backout}>
                         {'<'}
                    </Text>
                </View>
              </TouchableHighlight>
              <Text style={styles.welcome}>
                  Register
              </Text>
              <TextInput style={styles.ramInput}
                    onChangeText={(userName) => this.setState({userName})}
                    placeholder={" Enter UserName"}
                    secureTextEntry={false}
                    color={"black"}
                    placeholderTextColor={"#CCC"}
              />
              <TextInput style={styles.ramInput}
                    onChangeText={(Name) => this.setState({Name})}
                    placeholder={"Enter Name"}
                    secureTextEntry={false}
                    color={"black"}
                    placeholderTextColor={"#CCC"}
              />
              <TextInput style={styles.ramInput}
                    onChangeText={(surName) => this.setState({surName})}
                    placeholder={" Enter SurName"}
                    secureTextEntry={false}
                    color={"black"}
                    placeholderTextColor={"#CCC"}
              />

              <TextInput style={styles.ramInput}
                    onChangeText={(email) => this.setState({email})}
                    placeholder={"Enter Email Adress"}
                    secureTextEntry={false}
                    color={"black"}
                    placeholderTextColor={"#CCC"}
              />  
              <TextInput style={styles.ramInput}
                    onChangeText={(password) => this.setState({password})}
                    placeholder={"Enter password"}
                    secureTextEntry={true}
                    color={"black"}
                    placeholderTextColor={"#CCC"}
              />
               <TouchableHighlight onPress={this.onButtonClicked2.bind(this)} underlayColor={'transparent'}>
                <View style={styles.bigbutt}> 
                     <Text style={styles.buttokstyle}>OK</Text> 
                </View>
                   
              </TouchableHighlight>
        </View>
        )
    }
 }

const styles = StyleSheet.create({
    buttokstyle:{
      color:"#E87B79",
      alignSelf:"center",
      fontSize:20,
      fontWeight:"500",
      height:50,
      width:30,
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
        borderBottomWidth:0.5,
        height:50,
        width:300,
        alignSelf:"center",
        color:'#E87B79',
        marginTop:15,
        
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

