import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet,View,Text, TouchableHighlight,TextInput, TouchableOpacity,Image,Alert} from 'react-native';
import firebase from 'firebase';
import adddevices from './addDevice';

export default class newProject extends React.Component{
  constructor(){
    super();
    this.state ={
      s1:true,
      s2:false,
      s3:false,
      s4:false,
      selectedButton:null
    }
    this.selectionOnPress = this.selectionOnPress.bind(this);
  }
selectionOnPress(userType) {
    this.setState({ selectedButton: userType });
  }
  ShowHideTextComponentView = () =>{
     this.setState({s2: false,s3: false,s4: false,s1: true})
     this.selectionOnPress("BASIC")
  }
  ShowHideTextComponentView2= () =>{
      this.setState({s1: false,s3: false,s4: false,s2: true})
      this.selectionOnPress("1")
  }
  ShowHideTextComponentView3 = () =>{
      this.setState({s2: false,s4: false,s1: false,s3: true})
      this.selectionOnPress("2")
  }
  ShowHideTextComponentView4 = () =>{
      this.setState({s2: false,s3: false,s1: false,s4: true})
      this.selectionOnPress("3")
  }
    FloatingButtonEvent=()=>{
        Alert.alert("Floating Button Clicked");
    }
    render(){
    return(
        <View style={styles.container}>
          <TouchableOpacity activeOpacity={0.5} onPress={() =>this.props.changePage('adddevices')} style={styles.TouchableOpacityStyle} >
              <Image source={require('./images/userss.png')}  style={styles.FloatingButtonStyle} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={() =>this.props.changePage('adddevices')} style={styles.TouchableOpacityStyle2} >
              <Image source={require('./images/refresh.png')}  style={styles.FloatingButtonStyle} />
          </TouchableOpacity>
            <TouchableOpacity  onPress={this.ShowHideTextComponentView} underlayColor={'transparent'} style={styles.buttoncontainer}> 
              <Text style={{color:this.state.selectedButton === "BASIC"? "black" : "#87cefa"}}> Track Devices </Text> 
          </TouchableOpacity> 
          <TouchableOpacity  onPress={this.ShowHideTextComponentView2} underlayColor={'transparent'} style={styles.buttoncontainer2}>
              <Text style={{color:this.state.selectedButton === "1"? "black" : "#87cefa"}}> Notification</Text> 
          </TouchableOpacity> 
          <TouchableOpacity  onPress={this.ShowHideTextComponentView3} underlayColor={'transparent'} style={styles.buttoncontainer3}>
              <Text style={{color:this.state.selectedButton === "2"? "black" : "#87cefa"}}> Alarms</Text> 
          </TouchableOpacity> 
          <TouchableOpacity  onPress={this.ShowHideTextComponentView4} underlayColor={'transparent'} style={styles.buttoncontainer4}>
              <Text style={{color:this.state.selectedButton === "3"? "black" : "#87cefa"}}> News</Text> 
          </TouchableOpacity> 
         
          {this.state.s1 ? <TextInput style={styles.ramInput} placeholder={"Device Name"}secureTextEntry={false}color={"black"}placeholderTextColor={"#CCC"} /> : null}
          {this.state.s1 ?   
              <TouchableHighlight underlayColor={'transparent'} style={styles.box}>
                <View  >
                    <Text style={styles.innards}>DATA</Text> 
                    <Image source={require('./images/122.png')} style={styles.icon} />
                </View>
            </TouchableHighlight>  : null}
          {this.state.s1 ? <TextInput style={styles.ramInput2}placeholder={"Device Name"}color={"black"}placeholderTextColor={"#CCC"} underlineColorAndroid="transparent"/> : null}
          {this.state.s1 ? 
          <TouchableHighlight  underlayColor={'transparent'} style={styles.box2}>
          <View>
              <Text style={styles.innards}>DATA</Text> 
              <Image source={require('./images/clock.png')} style={styles.icon} />
          </View>
         </TouchableHighlight> : null}
          {this.state.s2 ?  
          <TouchableHighlight  underlayColor={'transparent'} style={styles.box4}>
            <View  >
                <Text style={styles.innards2}>Mark All As Read</Text> 
            </View>
          </TouchableHighlight> : null}
          {this.state.s3 ? 
          <TouchableHighlight underlayColor={'transparent'} style={{  backgroundColor:'#dcdcdc',width:365,position: 'absolute', bottom: 480,left: 15,height:65,}}>
                <View  >
                    <Text style={styles.innards}>Notification #1</Text> 
                    <Image source={require('./images/camera.png')} style={styles.icon} />
                    <Text style={{ height:50, width:365,position: 'absolute',bottom: -10,left:15,marginTop:5,color:'#808080'}}>Time and Date</Text> 
                    
                </View>
          </TouchableHighlight>  : null}
          {this.state.s3 ? 
          <TouchableHighlight  underlayColor={'transparent'} style={{  backgroundColor:'#dcdcdc',width:365,position: 'absolute', bottom: 350,left: 15,height:65,}}>
            <View>
                <Text style={styles.innards}>Notification #2</Text> 
                <Image source={require('./images/doorsensor.png')} style={styles.icon} />
                <Text style={{ height:50, width:365,position: 'absolute',bottom: -10,left:15,marginTop:5,color:'#808080'}}>Time and Date</Text> 
            </View>
          </TouchableHighlight>   : null}
          {this.state.s4 ? <Text style={{height:50, width:365,position: 'absolute',bottom: 500,left:15,marginTop:5,color:'#808080'}} > news </Text> : null}
          

          <Text style={styles.nulltext}>  </Text> 
          <Text style={styles.nulltext2}>  </Text> 
          <Text style={styles.nulltext3}>  </Text> 
          <Text style={styles.nulltext4}>  </Text> 
          <Text style={styles.nulltextlast}>  </Text>

          <TouchableHighlight onPress={() =>this.props.changePage('adddevices')}  underlayColor={'transparent'} style={styles.box3}>
            <View>
                <Image source={require('./images/home.png')} style={styles.icon} />
            </View>
          </TouchableHighlight> 
          <Image source={require('./images/line.png')} style={styles.iconline} />
          <Image source={require('./images/connect.png')} style={styles.iconconnectdev} />
          
          <Text style={styles.Textstylebottom}> Devices</Text>  
          <Text style={styles.Textstylebottom2}> Smart</Text>  
          <Text style={styles.Textstylebottom3}> Tracking</Text>  
        </View>
        )
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
    left:300,
    fontSize:12,
    fontWeight:"500"
  },
  icon: {
    width: 39,
    height: 39,
    position: 'absolute',
    left: 30,
    bottom:-55,
    backgroundColor:'#dcdcdc',
  },
  innards:{
    color:'black' ,
    position: 'absolute',
    left: 90, 
    bottom:-48 ,
    fontSize:25,
    fontWeight:"500",
    backgroundColor:'#dcdcdc'
  },
  innards2:{
    color:'black' ,
    alignSelf:'center',
    alignItems:'center',
    fontWeight:"500",
  },
  box:{
    backgroundColor:'#dcdcdc',
    width:365,
    position: 'absolute',
    bottom: 440,
    left: 15,
    height:65
    },
  box2:{
    backgroundColor:'#dcdcdc',
    width:365,
    position: 'absolute',
    bottom: 250,
    left: 15,
    height:65,
  },
  box3:{
    width:365,
    position: 'absolute',
    bottom: 25,
    left: 35,
    height:65,
  },
  box4:{
    backgroundColor:'#dcdcdc',
    borderRadius:10,
    height:45,
    width:330,
    justifyContent:"center",
    position: 'absolute',
    bottom: 530,
    left:45
  },
  nulltextlast:{
    borderBottomWidth:2.5,
    height:50,
    width:350,
    left:26,
    position: 'absolute',
    bottom: 80,
    },
  iconconnectdev: {
    width: 35,
    height: 35,
    position: 'absolute',
    left: 185,
    bottom:35,
  },
  iconline: {
    width: 45,
    height: 45,
    position: 'absolute',
    left: 300,
    bottom:35,
    backgroundColor:'#dcdcdc'
  },
  buttoncontainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 610,
    left: 70,
    backgroundColor:'white'
  },
  buttoncontainer2: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 610,
    left: 170
  },
  buttoncontainer3: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 610,
    left: 250   
  },
  buttoncontainer4: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 610,
    left: 310    
  },
  FloatingButtonStyle: {
    width: 30,
    height: 30,
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 20,
    bottom: 605,
  },
  TouchableOpacityStyle2: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 360,
    bottom: 605,
  },
  nulltext:{
    borderBottomWidth:1,
    width:420,
    position: 'absolute',
    bottom: 600,
  },
  nulltext2:{
    borderStyle: 'dotted',
    height:20,
    borderLeftWidth:1,
    position: 'absolute',
    left: 250,
    bottom: 610,
  },
  ramInput:{
    borderBottomWidth:1,
    height:50,
    width:365,
    position: 'absolute',
    bottom: 540,
    left:15,
    marginTop:5,
  },
  ramInput2:{
    borderBottomWidth:1,
    height:50,
    width:365,
    position: 'absolute',
    bottom: 350,
    left:15,
    marginTop:5,
  },
  nulltext3:{
    borderStyle: 'dotted',
    height:20,
    borderLeftWidth:1,
    position: 'absolute',
    left: 305,
    bottom: 610,
  },
  nulltext4:{
    borderStyle: 'dotted',
    height:20,
    borderLeftWidth:1,
    position: 'absolute',
    left: 170,
    bottom: 610,
  },
  container:{
    flex:1,
    backgroundColor:'white',
  },
});


