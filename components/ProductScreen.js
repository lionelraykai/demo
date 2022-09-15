import React  from "react";
import  { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView, Alert} from 'react-native';
import PerfumeScreen from "../ProductScreenList/PerfumeScreen";

function ProductScreen ({navigation}){
    return(
        <>
        <View style={styles.container}>
            <Text style={styles.products}>These are Our Products</Text>
        </View>
        <ScrollView>
        <View style={styles.imgcontainer}>
        
        <Image
            style={{resizeMode:"contain", height:200, width:200}}
            source={require('../assests/images/shoes.jpg')}
        />
       
        <Image
            style={{resizeMode:"contain", height:200, width:200}}
            source={require('../assests/images/whiteshoes.jpeg')}
        />
        <TouchableOpacity
        onPress={()=> Alert.alert("PerfumesScreen")} >
        <Image
            style={{resizeMode:"contain",height:200, width:200}}
            source={require('../assests/images/perfumes.jpg')}
        />
        </TouchableOpacity>
        
        <Image
            style={{resizeMode:"contain", height:200, width:200}}
            source={require('../assests/images/watches.jpeg')}
        />
        </View>
        </ScrollView>
        <View style={styles.footcontainer}>
          <TouchableOpacity  onPress={() => navigation.navigate('About')}>
              <Text style={styles.next}>Prev</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('Services')}>
              <Text style={styles.next}>Next</Text>
          </TouchableOpacity>
          </View>
        </>
    )
}
 const styles = StyleSheet.create({
    container:{
        marginTop: 20,
    },
    products:{
        fontSize:20,
        textAlign:'center',
        color:'cyan',
        backgroundColor:'grey',
        padding:10,
    },
    imgcontainer:{
       alignItems:'center',
       justifyContent: 'space-between',
       flexDirection:'column-reverse',
       
    },
    next:{
        backgroundColor:'cyan', 
        color:'grey', 
        width:80, 
        height:50,
        marginBottom:50,
        marginLeft:20,
        textAlign:'center',
        fontSize:30,
    },
    footcontainer:{
        alignItems:'center',
        justifyContent: 'space-evenly',
        marginRight:50,
        flexDirection:'row'
    }
 })
export default ProductScreen;