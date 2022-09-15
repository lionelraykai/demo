import React from "react";
import {View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from "react-native";

const Info = [
    {
        id: '1',
        title: 'Starting of our Journey',
    },
    {
        id: '2',
        title: 'Creator of this Journey',
    },
    {
        id: '3',
        title: 'What we provide'
    },
    {
        id: '4',
        title: 'Where we are right now'
    }
]

// const Item = ({title}) => (
//     <View style={styles.item}>
//         <Text style={styles.item}>{title}</Text>
//     </View>
// )

function AboutScreen ({navigation}){
    return (
        <>
          <View style={styles.container}>
            <Text style={{color:'cyan', fontSize:30}}>Know About us here</Text>
          </View>
          <SafeAreaView style={styles.journey}>
            <FlatList style={styles.journeylist} 
                    data={Info}
                    renderItem={({item}) => (
                    <Text style={styles.item}>{item.title}</Text>
                    )}
                    keyExtractor={item => item.id}
            />
          </SafeAreaView>
          <View style={styles.footcontainer}>
          <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
              <Text style={styles.next}>Prev</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('Product')}>
              <Text style={styles.next}>Next</Text>
          </TouchableOpacity>
          </View>
          
        </>
       
    )
}

const styles= StyleSheet.create({
    container:{
        marginTop:10,
        marginLeft:50,
        
    },
    journey: {
        flex: 1,
        marginTop: 50,
         
   },
   item:{
       fontSize:20,
       margin:20,
       backgroundColor:'grey',
       textAlign:'center',
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
export default AboutScreen;