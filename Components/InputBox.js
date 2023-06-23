import * as React from 'react';
import { View, Text,SafeAreaView, TextInput,Image, TouchableOpacity } from 'react-native';


export default class InputBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            passwordVisible:false
        }
    }
      
    render(){
        return(
            <View style={{width:'90%',marginTop:20}}>
                <Text style={{fontSize:16,fontFamily:'Merriweather-Regular',color:'white'}}>{this.props.title}</Text>
                <View style={{width:'100%',height:40,flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginTop:5,backgroundColor:'white',borderRadius:10}}>
                <TextInput style={{width:'88%',fontSize:16,marginLeft:5}}
                  placeholder={this.props.placeholder}
                  placeholderTextColor={'grey'}
                  secureTextEntry={this.state.passwordVisible}
                />
                { this.props.SecureText?
                <TouchableOpacity onPress={()=>this.setState({passwordVisible:!this.state.passwordVisible})}>
                    {this.state.passwordVisible?
                    <Image style={{width:23,height:23,marginRight:2}}
                    source={require('../Images/notView.png')}
                   />
                    :
                    <Image style={{width:23,height:23,marginRight:2}}
                  source={require('../Images/eye.png')}
                 />
                    }
                    
                </TouchableOpacity>
                :<Image style={{width:20,height:25,marginRight:2}}
                  source={require('../Images/Right.png')}
                 />}
                
                </View>
            </View>
        )
    }
}