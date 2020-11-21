import React from "react"
import { View, Text, FlatList, StyleSheet ,TouchableHighlight} from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
export default class DeviceListing extends React.Component {
  state = {
    devices: []
  }
  componentDidMount = async () => {
    //aynen entegre olmadı hata veiyo
    const token = await AsyncStorage.getItem("token");
    const { result: { items } } = await (await fetch('http://91.191.173.185/api/services/app/Device/GetAll', {  
      method: 'get',
      headers: {
      'Accept': '*/*',
      'Authorization': token,
      'Content-Type': 'application/json'
      }
    })).json()
    console.log(JSON.stringify(items, null, 2))
    this.setState({ devices: items })
  
  }
  render() {
    const { devices } = this.state
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <TouchableHighlight onPress={() => this.props.changePage('login')} underlayColor={'transparent'}>
              <View style={styles.backbut}>
                  <Text style={styles.backout}>
                        {'<'}
                  </Text>
              </View>
            </TouchableHighlight>
        <Text Text style={styles.baseText}>Devices List</Text>
        <FlatList
          keyExtractor={(item, index) => `${index}-index`}
          data={devices}
          renderItem={({ item }) => {
            return (
              <View style={styles.deviceContainer}>
                <View style={styles.keyValueContainer}>
                 
                </View>
                <View style={styles.keyValueContainer}>
                  <Text>Owner User Id</Text>
                  <Text>{item.ownerUserId}</Text>
                </View>
                <View style={styles.keyValueContainer}>
                  <Text>Description</Text>
                  <Text>{item.description}</Text>
                </View>
                 <View style={styles.keyValueContainer}>
                  <Text>Name</Text>
                  <Text>{item.name}</Text>
                </View>
                <View style={styles.keyValueContainer}>
                  <Text>Type</Text>
                  <Text>{item.type}</Text>
                </View>
              </View>
            )
          }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  deviceContainer: {
    width: '100%',
    height: 125,
    padding: 10,
    backgroundColor: '#fffff8'
  },
  keyValueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:"yellow",
    
  },
  baseText: {
    
    fontSize:20,
    color:'black',
    alignSelf:'center'
  
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
})

