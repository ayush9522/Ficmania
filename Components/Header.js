import * as React from 'react';
import { View, Text,SafeAreaView,TouchableOpacity,Image } from 'react-native';


export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
      
    render(){
        return(
            <View style={{width:'100%',justifyContent:'space-between',backgroundColor:'#2E2E2E',paddingTop:5,paddingBottom:5,flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity style={{marginLeft:10}} onPress={()=>this.props.goBack()}>
                    <Image style={{width:25,height:25,tintColor:'white'}}
                       source={require('../Images/arrow-left-33.png')}
                    />
                </TouchableOpacity>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:25,fontFamily:'Merriweather-Bold',color:'#00ced1'}}>Mis </Text>
                    <Text style={{fontSize:25,fontFamily:'Merriweather-Bold',color:'white'}}>FIC</Text>
                </View>
                <TouchableOpacity style={{width:40,marginRight:10,height:40,borderRadius:10,borderWidth:1,borderColor:'white',justifyContent:'flex-end',alignItems:'center'}}>
                    <Image style={{width:25,height:25,tintColor:'white'}}
                      source={require('../Images/userIcon.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}