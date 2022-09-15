import React from "react";
import {View, Text,Image} from "react-native";

function PerfumeScreen(){
    return(
        <> 
          <View>
            <Image 
              style={{resizeMode:"contain", height:200, width:200}}
              source={require('../assests/perfumes/candy.jpg')} />
            <Text>Price - 10$</Text>  
         </View>
         <View>
         <Image 
              style={{resizeMode:"contain", height:200, width:200}}
              source={require('../assests/perfumes/cyan.jpg')} />
            <Text>Price = $10</Text>
         </View>
        </>
        
    )
}
export default PerfumeScreen;