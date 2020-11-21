import React, { Component } from "react";
import { Platform, StyleSheet, View, Image, TouchableOpacity, Alert, Text,Button,TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import adddevices from './addDevice';
import tracking from './tracking';
export default class newProject extends React.Component{

    FloatingButtonEvent=()=>{
        Alert.alert("Floating Button Clicked");
    }

    FloatingButtonEvent2=()=>{
      Alert.alert("Success!");
    }

    render() {
        
      return (
          <View style={styles.container}>
              <Text style={styles.headerText}> Add Device 
              </Text>
              <Image  source={require('./images/userss.png')} style={styles.iconuser} />
            <Text style={styles.nulltext}>  </Text>
                <TouchableOpacity activeOpacity={0.5} onPress={() =>this.props.changePage('adddevices')} style={styles.TouchableOpacityStyle} >
                    <Image source={require('./images/22.png')}  style={styles.FloatingButtonStyle} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={this.FloatingButtonEvent}style={styles.buttoncontainer} >
                    <View >
                      <Text style={styles.textstyle} >User Groups</Text>                     
                    </View>
                </TouchableOpacity>
                <TouchableOpacity   activeOpacity={0.5} onPress={this.FloatingButtonEvent}style={styles.buttoncontainer2} >
                  <View  >
                    <Text style={styles.textstyle} >Rooms</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity   activeOpacity={0.5} onPress={this.FloatingButtonEvent}style={styles.buttoncontainer3}  >
                    <View >
                      <Text style={styles.textstyle} >Device Groups </Text>
                    </View>
                </TouchableOpacity>

                  <Text style={styles.nulltext2}>  </Text>
                  <Text style={styles.nulltext3}>  </Text>
                  <Text style={styles.nulltext4}>  </Text>
                  <TouchableOpacity onPress={() =>this.FloatingButtonEvent} underlayColor={'transparent'} style={styles.box}>
                    <View >
                        <Text style={styles.innards}> Device Name</Text> 
                        <Image source={require('./images/d.png')} style={styles.icon} />
                        <Image source={require('./images/icon.png')} style={styles.iconpower} />
                    </View>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() =>this.FloatingButtonEvent2} underlayColor={'transparent'} style={styles.box2}>
                    <View >
                        <Text style={styles.innards}> Device Name </Text> 
                        <Image source={require('./images/d.png')} style={styles.icon} />
                        <Image source={require('./images/icon.png')} style={styles.iconpower} />
                    </View>
                </TouchableOpacity> 
                <Text style={styles.textstyle1}>
                    Shared Devices
                 </Text>
                 <Image source={require('./images/cog.png')} style={styles.iconcog} />
                 <TouchableOpacity onPress={() =>this.FloatingButtonEvent2} underlayColor={'transparent'} style={styles.box3}>
                    <View >
                        <Text style={styles.innards}> Device Name</Text> 
                        <Image source={require('./images/d.png')} style={styles.icon} />
                        <Image source={require('./images/icon.png')} style={styles.iconpower} />
                    </View>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() =>this.FloatingButtonEvent2} underlayColor={'transparent'}  style={styles.box4}>
                    <View>
                        <Text style={styles.innards}> Device Name</Text> 
                        <Image source={require('./images/d.png')} style={styles.icon} />
                        <Image source={require('./images/icon.png')} style={styles.iconpower} />
                    </View>
                </TouchableOpacity> 
                <Text style={styles.nulltextlast}>  </Text>
                
                 
                <TouchableOpacity activeOpacity={0.5} onPress={() =>this.props.changePage('tracking')} style={styles.TouchableOpacityStyle2} >
                    <Image source={require('./images/line.png')} style={styles.iconline} />
                </TouchableOpacity>
                
                <Image source={require('./images/home.png')} style={styles.iconhome} />
                <Image source={require('./images/connect.png')} style={styles.iconconnectdev} />
                
          
                <Text style={styles.Textstylebottom}> Devices</Text>  
                <Text style={styles.Textstylebottom2}> Smart</Text>  
                <Text style={styles.Textstylebottom3}> Tracking</Text>  
           
                
              
         </View>
       );
     }

}
const styles = StyleSheet.create({
  Textstylebottom:{
    color:'black' ,
    position: 'absolute',
    justifyContent:'space-around',
    bottom:20 ,
    left:64,
    fontSize:12,
    fontWeight:"500"
  },
  Textstylebottom2:{
    color:'black' ,
    position: 'absolute',
    justifyContent:'space-around',
    bottom:20 ,
    left:186,
    fontSize:12,
    fontWeight:"500"
  },
  Textstylebottom3:{
    color:'black' ,
    position: 'absolute',
    justifyContent:'space-around',
    bottom:20 ,
    left:290,
    fontSize:12,
    fontWeight:"500"
  },
  
  
  iconuser: {
    width: 40,
    height: 40,
    position: 'absolute',
    left: 20,
    bottom:580,
    backgroundColor:'white'
  },
  iconline: {
    resizeMode: 'contain',
    width: 45,
    height: 45,
    
  },
  
  iconconnectdev: {
    width: 35,
    height: 35,
    position: 'absolute',
    left: 185,
    bottom:35,
  },
  iconhome: {
    
    width: 40,
    height: 40,
    position: 'absolute',
    left: 65,
    bottom:35,
    backgroundColor:'#dcdcdc'
  },
  textstyle1:{
    fontSize:15,
    position: 'absolute',
    left: 50,
    bottom:300,
    color:'#808080',
    fontWeight: 'bold',
  },
  nulltextlast:{
    borderBottomWidth:2.5,
    height:50,
    width:350,
    left:26,
    position: 'absolute',
    bottom: 80,
  },
  
  icon: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: 30,
    bottom:-35,
    backgroundColor:'#dcdcdc'
  },
  iconpower: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: 300,
    bottom:-35,
    backgroundColor:'#dcdcdc'
  },
  iconcog: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: 330,
    bottom:300,
    backgroundColor:'white'
  },
  box2:{
    backgroundColor:'#dcdcdc',
    fontSize:40,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius:15,
    width:350,
    position: 'absolute',
    bottom: 370,
    left: 30,
    height:45
  },
  box:{
    backgroundColor:'#dcdcdc',
    fontSize:40,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius:15,
    width:350,
    position: 'absolute',
    bottom: 430,
    left: 30,
    height:45
  },
  box3:{
    backgroundColor:'#dcdcdc',
    fontSize:40,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius:15,
    width:350,
    position: 'absolute',
    bottom: 220,
    left: 30,
    height:45
  },
  box4:{
    backgroundColor:'#dcdcdc',
    fontSize:40,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius:15,
    width:350,
    position: 'absolute',
    bottom: 160,
    left: 30,
    height:45
  },
  innards:{
    color:'black' ,
    position: 'absolute',
    left: 90, 
    bottom:-35 ,
    fontSize:20,
    fontWeight:"500"
  },
  buttoncontainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 540,
    left: 50
  },
  nulltext2:{
    borderBottomWidth:1,
   left:50,
    width:80,
    position: 'absolute',
    bottom: 532,
  },
  nulltext4:{
    borderBottomWidth:1,
    left:162,
    width:50,
    position: 'absolute',
    bottom: 532,
  },
  nulltext3:{
    borderBottomWidth:1,
   left:245,
    width:100,
    position: 'absolute',
    bottom: 532,
  },
  buttoncontainer2: {
   
    flexDirection: 'row',
    position: 'absolute',
    bottom: 540,
    left: 165,
  },
  buttoncontainer3: {
 
    flexDirection: 'row',
    position: 'absolute',
    bottom: 540,
    left: 250
  },
 
  textstyle:{
    color:'blue',
    flex:1,
  
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    color:'white'
  }, 
  nulltext:{
    borderBottomWidth:0.5,
    width:420,
    position: 'absolute',
    bottom: 570,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    left: 200,
    bottom: 580,
    fontSize:20,
    alignSelf:'flex-start',
    margin:10,
    color:'#808080',
    marginTop:5,
    fontWeight: 'bold',
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 580,
  },
  TouchableOpacityStyle2: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 70,
    bottom: 32,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  })
