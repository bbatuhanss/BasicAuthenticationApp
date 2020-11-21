import React, { Component } from 'react'
import {StyleSheet, Text, View ,TouchableOpacity,Image,Alert} from 'react-native'
import homePage from './homePage';
import addwacht from './addWacth';
import styles from './styles/style';
export default class SwiperComponent extends Component {
  constructor(){
    super();
    this.state ={s1:false,s2:false,s3:false,s4:false,s5:false,s6:false,s7:false,s8:false,selectedButton:null}
    this.selectionOnPress = this.selectionOnPress.bind(this);
  }
  selectionOnPress(userType) {
    this.setState({ selectedButton: userType });
  }
  ShowHideTextComponentView = () =>{
      this.setState({s2: false,s3: false,s4: false,s5: false,s6: false,s7: false,s1: true})
      this.selectionOnPress("BASIC")
  }
  ShowHideTextComponentView2= () =>{
      this.setState({s1: false,s3: false,s4: false,s5: false,s6: false,s7: false,s2: true})
      this.selectionOnPress("1")
  }
  ShowHideTextComponentView3 = () =>{
      this.setState({s1: false,s2: false,s4: false,s5: false,s6: false,s7: false,s3: true})
      this.selectionOnPress("2")
  }
  ShowHideTextComponentView4 = () =>{
      this.setState({s1: false,s3: false,s2: false,s5: false,s6: false,s7: false,s4: true})
      this.selectionOnPress("3")
  }
  ShowHideTextComponentView5= () =>{ 
      this.setState({s2: false,s3: false,s4: false,s1: false,s6: false,s7: false,s5: true})
      this.selectionOnPress("4")
  }
  ShowHideTextComponentView6 = () =>{
      this.setState({s2: false,s3: false,s4: false,s5: false,s1: false,s7: false,s6: true})
      this.selectionOnPress("5")
  }
  ShowHideTextComponentView7= () =>{
      this.setState({s2: false,s3: false,s4: false,s5: false,s6: false,s1: false,s7: true})
      this.selectionOnPress("6")
  }
  FloatingButtonEvent=()=>{
    Alert.alert("Floating Button Clicked");
}
  render(){
    return (
    <View style={styles.container}>
       <View style={styles.countContainer}>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={() =>this.props.changePage('homePage')} style={styles.TouchableOpacityStyle} >
            <Image source={require('./images/ok.png')}  style={styles.FloatingButtonStyle} />
         </TouchableOpacity>
         <TouchableOpacity activeOpacity={0.5} onPress={() =>this.props.changePage('qrcode')} style={styles.TouchableOpacityCrCodeStyle} >
            <Image source={require('./images/crcode2.png')}  style={styles.FloatingButtonStyle} />
         </TouchableOpacity>
         <TouchableOpacity onPress={() =>this.props.changePage('addwacht')} style={styles.TouchableOpacityStyle2}>
              {this.state.s1 ? <Image source={require('./images/saat.png')}  style={styles.FloatingButtonStyle}  />  : null}
         </TouchableOpacity>
         <TouchableOpacity onPress={() =>this.props.changePage('homePage')} style={styles.TouchableOpacityStyle3}>
              {this.state.s1 ? <Image source={require('./images/termometre.png')}  style={styles.FloatingButtonStyle}  />  : null}
         </TouchableOpacity>
         <TouchableOpacity onPress={() =>this.props.changePage('homePage')} style={styles.TouchableOpacityStyle2}>
              {this.state.s2 ? <Image source={require('./images/scot.png')}  style={styles.FloatingButtonStyle}  />  : null}
         </TouchableOpacity>
         <TouchableOpacity onPress={() =>this.props.changePage('homePage')} style={styles.TouchableOpacityStyle2}>
              {this.state.s3 ? <Image source={require('./images/smartbulb.png')}  style={styles.FloatingButtonStyle}  />  : null}
         </TouchableOpacity>
         <TouchableOpacity onPress={() =>this.props.changePage('homePage')} style={styles.TouchableOpacityStyle3}>
              {this.state.s3 ? <Image source={require('./images/strip.png')}  style={styles.FloatingButtonStyle}  />  : null}
         </TouchableOpacity>
         <TouchableOpacity onPress={() =>this.props.changePage('homePage')} style={styles.TouchableOpacityStyle2}>
              {this.state.s4 ? <Image source={require('./images/boss.png')}  style={styles.FloatingButtonStyle}  />  : null}
         </TouchableOpacity>
         <TouchableOpacity onPress={() =>this.props.changePage('homePage')} style={styles.TouchableOpacityStyle3}>
              {this.state.s4 ? <Image source={require('./images/airdevice.png')}  style={styles.FloatingButtonStyle}  />  : null}
         </TouchableOpacity>
         <TouchableOpacity onPress={() =>this.props.changePage('homePage')} style={styles.TouchableOpacityStyle4}>
              {this.state.s4 ? <Image source={require('./images/vacum.png')}  style={styles.FloatingButtonStyle}  />  : null}
         </TouchableOpacity>
         <TouchableOpacity onPress={() =>this.props.changePage('homePage')} style={styles.TouchableOpacityStyle2}>
              {this.state.s5 ? <Image source={require('./images/feed.png')}  style={styles.FloatingButtonStyle}  />  : null}
         </TouchableOpacity>
         <TouchableOpacity onPress={() =>this.props.changePage('homePage')} style={styles.TouchableOpacityStyle3}>
              {this.state.s5 ? <Image source={require('./images/water.png')}  style={styles.FloatingButtonStyle}  />  : null}
         </TouchableOpacity>
         <TouchableOpacity onPress={() =>this.props.changePage('homePage')} style={styles.TouchableOpacityStyle2}>
              {this.state.s6 ? <Image source={require('./images/sensor.png')}  style={styles.FloatingButtonStyle}  />  : null}
         </TouchableOpacity>
         <TouchableOpacity onPress={() =>this.props.changePage('homePage')} style={styles.TouchableOpacityStyle3}>
              {this.state.s6 ? <Image source={require('./images/camera.png')}  style={styles.FloatingButtonStyle}  />  : null}
         </TouchableOpacity>
         <TouchableOpacity onPress={() =>this.props.changePage('homePage')} style={styles.TouchableOpacityStyle4}>
              {this.state.s6 ? <Image source={require('./images/dorbell.png')}  style={styles.FloatingButtonStyle}  />  : null}
         </TouchableOpacity>
         <TouchableOpacity onPress={() =>this.props.changePage('homePage')} style={styles.TouchableOpacityStyle2}>
              {this.state.s7 ? <Image source={require('./images/gateway.png')}  style={styles.FloatingButtonStyle}  />  : null}
         </TouchableOpacity>
            {this.state.s1 ? <Text style={styles.showiconstyletext1} > Smart Watch  </Text> : null}
            {this.state.s1 ? <Text style={styles.showiconstyletext2} > Thermometer </Text> : null}
            {this.state.s2 ? <Text style={styles.showiconstyletext1} > Smart Plug  </Text> : null}
            {this.state.s3 ? <Text style={styles.showiconstyletext1} > Smart Bulb  </Text> : null}
            {this.state.s3 ? <Text style={styles.showiconstyletext2} > Smart Lights  </Text> : null}
            {this.state.s4 ? <Text style={styles.showiconstyletext1} > Boss  </Text> : null}
            {this.state.s4 ? <Text style={styles.showiconstyletext2} > Pure  </Text> : null}
            {this.state.s4 ? <Text style={styles.showiconstyletext3} > Moby  </Text> : null}
            {this.state.s5 ? <Text style={styles.showiconstyletext1} > Feed Me </Text> : null}
            {this.state.s5 ? <Text style={styles.showiconstyletext2} > Water  </Text> : null}
            {this.state.s6 ? <Text style={styles.showiconstyletext1} > Contact Sensor  </Text> : null}
            {this.state.s6 ? <Text style={styles.showiconstyletext2} > Camere  </Text> : null}
            {this.state.s6 ? <Text style={styles.showiconstyletext3} > Dorbell </Text> : null}
            {this.state.s7 ? <Text style={styles.showiconstyletext1} > GateWay(Zigbee)  </Text> : null}
         <TouchableOpacity  onPress={this.ShowHideTextComponentView} underlayColor={'transparent'}style={[styles.box2,{backgroundColor:this.state.selectedButton === "BASIC"? "#87cefa" : "#dcdcdc"}]} >
            <View>
                <Text style={{color:this.state.selectedButton === "BASIC"? "blue" : "black" ,alignSelf:'center',position: 'absolute',bottom: -60,left:1,}}> Wearable
                </Text> 
            </View>
         </TouchableOpacity> 
         <TouchableOpacity onPress={this.ShowHideTextComponentView2} underlayColor={'transparent'} style={[styles.box3,{backgroundColor:this.state.selectedButton === "1"? "#87cefa" : "#dcdcdc"}]}>
            <View >
                <Text style={{color:this.state.selectedButton === "1"? "blue" : "black" ,alignSelf:'center',position: 'absolute',bottom: -60,left:1,}}>Electrician</Text> 
            </View>
         </TouchableOpacity> 
         <TouchableOpacity onPress={this.ShowHideTextComponentView3} underlayColor={'transparent'} style={[styles.box4,{backgroundColor:this.state.selectedButton === "2"? "#87cefa" : "#dcdcdc"}]}>
            <View >
                <Text style={{color:this.state.selectedButton === "2"? "blue" : "black",alignSelf:'center',position: 'absolute',bottom: -60,left:1,}}>Lightning</Text> 
            </View>
         </TouchableOpacity> 
         <TouchableOpacity onPress={this.ShowHideTextComponentView4} underlayColor={'transparent'} style={[styles.box5,{backgroundColor:this.state.selectedButton === "3"? "#87cefa" : "#dcdcdc"}]}>
            <View >
                <Text style={{color:this.state.selectedButton === "3"? "blue" : "black",alignSelf:'center',position: 'absolute',bottom: -60,left:1,}}>Home Product</Text> 
            </View>
         </TouchableOpacity> 
         <TouchableOpacity onPress={this.ShowHideTextComponentView5} underlayColor={'transparent'} style={[styles.box6,{backgroundColor:this.state.selectedButton === "4"? "#87cefa" : "#dcdcdc"}]}>
            <View >
                <Text style={{color:this.state.selectedButton === "4"? "blue" : "black" ,alignSelf:'center',position: 'absolute',bottom: -60,left:1,}}> Smart Pet </Text> 
            </View>
         </TouchableOpacity> 
         <TouchableOpacity onPress={this.ShowHideTextComponentView6} underlayColor={'transparent'} style={[styles.box7,{backgroundColor:this.state.selectedButton === "5"? "#87cefa" : "#dcdcdc"}]}>
            <View >
                <Text style={{color:this.state.selectedButton === "5"? "blue" : "black" ,alignSelf:'center',position: 'absolute',bottom: -60,left:1,}}> Security </Text> 
            </View>
         </TouchableOpacity> 
         <TouchableOpacity onPress={this.ShowHideTextComponentView7} underlayColor={'transparent'} style={[styles.box8,{backgroundColor:this.state.selectedButton === "6"? "#87cefa" : "#dcdcdc"}]}>
            <View >
                <Text style={{color:this.state.selectedButton === "6"? "blue" : "black",alignSelf:'center',position: 'absolute',bottom: -60,left:1,}}> GateWay </Text> 
            </View>
         </TouchableOpacity> 
        <TouchableOpacity activeOpacity={0.5} onPress={this.FloatingButtonEvent}style={styles.buttoncontainer} >
            <View>
                <Text style={{color:'black',fontWeight: 'bold'}}> Add Manually</Text>                     
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={this.FloatingButtonEvent}style={styles.buttoncontainer2} >
            <View>
                <Text style={{color:'black'}}> Auto Scan  </Text>                     
            </View>
        </TouchableOpacity>
        <Text style={styles.nulltext}>  </Text>
    </View>
    )
  }
}


