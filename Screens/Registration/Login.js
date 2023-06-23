import * as React from 'react';
import { View, Text,SafeAreaView, TouchableOpacity,Image } from 'react-native';
import Logo from '../../Components/Logo';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            CheckBox:false
        }
    }
    
    render(){
        return(
            <SafeAreaView style={{backgroundColor:'#2E2E2E',flex:1,alignItems:'center',justifyContent:'space-between'}}>
                <View style={{alignItems:'center',justifyContent:'center',width:'100%',marginTop:40}}>
                <View style={{flexDirection:'row'}}>
                    <Logo/>
                    <View style={{flexDirection:'row',marginLeft:10,alignItems:'center'}}>
                        <Text style={{fontSize:36,fontFamily:'Merriweather-Bold',color:'#00ced1'}}>FIC</Text>
                        <Text style={{fontSize:36,fontFamily:'Merriweather-Bold',color:'white'}}>Mania</Text>
                    </View>
                </View >
                <View style={{alignItems:'center',marginTop:40,marginBottom:20}}>
                    <Text style={{fontSize:20,fontFamily:'Merriweather-Bold',color:'white'}}>Bienvenido</Text>
                    <Text style={{fontSize:16,alignItems:'center',textAlign:'center',fontFamily:'Merriweather-Regular',color:'white',marginTop:20}}>Actualizate en Ios movimientos {'\n'}de tus fondos de inversion</Text>
                </View>
                <InputBox title='Alias (Usuario)' placeholder='Alias name'/>
                <InputBox title='Contraseñas' placeholder='contraseñas' SecureText={true}/>
                <View style={{width:'90%',marginTop:10}}>
                    <Text style={{fontSize:15,fontFamily:'Merriweather-Regular',color:'#D3D3D3'}}>¿Olvidaste tu contraseña?</Text>
                    <View style={{marginTop:15,flexDirection:'row',alignItems:'center'}}>
                        <TouchableOpacity style={{width:20,borderWidth:1,borderColor:'white',borderRadius:3,height:20,alignItems:'center',justifyContent:'center'}}
                          onPress={()=>this.setState({CheckBox:!this.state.CheckBox})}
                        >
                            {this.state.CheckBox?
                            <Image style={{width:15,height:15,tintColor:'white'}} 
                            source={require('../../Images/Right.png')}
                          />
                            :null}
                            
                        </TouchableOpacity>
                        <Text style={{fontSize:17,color:'white',fontFamily:'Merriweather-Regular',marginLeft:20}}>Recordar usuario</Text>
                    </View>
                    <Button onPress={(value)=>this.props.navigation.navigate('ChartScreen')} />
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:15}}>
                        <Text style={{fontSize:15,fontFamily:'Merriweather-Regular',color:'white'}}>¿Eres nuevo?</Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')} >
                            <Text style={{fontSize:15,fontFamily:'Merriweather-Regular',color:'#00ced1',marginLeft:5}}>Regístrate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                    <Image style={{width:30,height:30}}
                      source={require('../../Images/deerImg.jpg')}
                    />
                    <Text style={{fontSize:15,marginLeft:10,fontFamily:'Merriweather-Regular',color:'white'}}>Need to know?</Text>
                </View>
            </SafeAreaView>
        )
    }
}