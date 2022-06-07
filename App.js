import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView , TouchableOpacity ,Image,FlatList,Alert} from 'react-native';

export default function App() {


  getFlatList = (item) => {
    Alert.alert(item.key);
  };
 


  const Data = [{
    key : 'You',
    color: '#f0072d',
    uri : require('./assets/images.png')
  },
  {
    key : 'Home',
    color: '#8ed1fc',
    uri : require('./assets/home.png')
  },
  {
    key : 'Love',
    color: '#0693e3',
    uri : require('./assets/love.png')
  },
  {
    key : 'Family',
    color: '#a810e0',
    uri : require('./assets/family.png')
  },
  {
    key : 'Friends',
    color: '#d87cd3',
    uri : require('./assets/friends.png')
  },
  {
    key : 'School',
    color: '#0693e3',
    uri : require('./assets/school.png')
  },
]

  return (
  
    <View style={styles.container}>
      
      <FlatList
        data={Data} renderItem={({ item }) =>{
        return (
          <ScrollView>
            <TouchableOpacity onPress={getFlatList} style={[styles.item, { backgroundColor: item.color}]}>
             <Image style={styles.itemImage} source={item.uri}></Image>
              <Text style={styles.itemtext}>{item.key}</Text>
            </TouchableOpacity>
           </ScrollView>
        );
        }}>
      </FlatList>
      <StatusBar style="auto" />
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
  marginTop: "15%",
  },
  item: {
    marginLeft: 10,
    padding: "5%",
    width: "95%",
   flexDirection:"row",
  
  },
  itemImage : {
      height:70,
      width:70,
      borderRadius:90,
  
  },
  itemtext :{
    margin:30,
   fontWeight: "bold",
   fontSize:18,
   color:"#f9f9f9"
  },
});