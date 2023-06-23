import * as React from 'react';
import { View, Text,SafeAreaView,TouchableOpacity,Dimensions } from 'react-native';
  const screenWidth = Dimensions.get("window").width;
  import { PieChart } from "react-native-gifted-charts";
  const dataa = [{value: 15}, {value: 30}, {value: 26}];

  
export default class ChartModule extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
      
    render(){
        return(
            <View style={{width:'100%',backgroundColor:'#D3D3D3'}}>
                <View style={{width:'90%',alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:17,fontFamily:'Merriweather-Bold',alignSelf:'center',textAlign:'center',marginTop:10,marginBottom:10,color:'black',fontWeight:'700'}}>Tienes registrados 3 Fondos de inversión Colectiva. A continuación, podrás ver la rentabilidad de tu actual inversión total.</Text>
                    <PieChart data={dataa}/>
                    <View style={{flexDirection:'row',width:'80%',marginBottom:10}}>
                        <Text style={{fontSize:15,textAlign:'center',fontFamily:'Merriweather-Regular',color:'black'}}>A la fecha <Text style={{fontSize:16,fontFamily:'Merriweather-Regular',color:'black',fontWeight:'bold'}}>12/03/2023 </Text>
                        la rentabilidad acumulada en tus FIC es de 10%
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}