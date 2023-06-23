import * as React from 'react';
import { View, Text,SafeAreaView } from 'react-native';


export default class Logo extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
      
    render(){
        return(
                <View style={{width:80,height:80,borderRadius:40,backgroundColor:'#636363',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:75,height:75,borderRadius:45,borderColor:'#2E2E2E',borderWidth:5,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:40,color:"white",fontFamily:'Merriweather-Bold'}}>F</Text>
                    </View>
                </View>
        )
    }
}