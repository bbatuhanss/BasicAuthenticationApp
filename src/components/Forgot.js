import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  AppRegistry,
  TouchableHighlight,
  TextInput
  
} from 'react-native';

import firebase from 'firebase';

export default class newProject extends React.Component{
    constructor(props){
      super(props)
      this.state={
        email:""
      }
    } 
      
   
    submite(){
      firebase.auth().sendPasswordResetEmail(this.state.email).then(function(){
        alert('Please Check Your Email!!')
        
      }).catch(function(e){
          alert(e)
      })
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
                Forgot Password?
            </Text>
            <TextInput style={styles.ramInput}
                    onChangeText={(email) => this.setState({email})}
                    placeholder={" Enter Email"}
                    secureTextEntry={false}
                    color={"black"}
                    placeholderTextColor={"#CCC"}
              />
            <TouchableHighlight onPress={this.submite.bind(this)} underlayColor={'transparent'}>
                <View style={styles.bigbutt}>
                    <Text style={styles.buttokstyle}>Send Email</Text> 
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
      borderBottomWidth:0.5,
      height:50,
      width:300,
      alignSelf:"center",
      color:'#E87B79',
      marginTop:15
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


