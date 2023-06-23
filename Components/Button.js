import * as React from 'react';
import { View, Text,SafeAreaView,TouchableOpacity } from 'react-native';


export default class Button extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
      
    render(){
        return(
            <TouchableOpacity style={{width:'100%',height:50,marginTop:20,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'#636363'}}
                onPress={()=>this.props.onPress('Login')}
                >
                <Text style={{fontSize:18,fontFamily:'Merriweather-Regular',color:'white'}}>Ingresar</Text>
            </TouchableOpacity>
        )
    }
}