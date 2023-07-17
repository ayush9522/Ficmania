import * as React from 'react';
import { View, Text,SafeAreaView,TouchableOpacity,Dimensions, FlatList,Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const localData = [
    {
      title:'Marzo',
      per:'16%'
    },
    {
        title:'Abril',
        per:'10%'
    },
    {
        title:'Mayo',
        per:'12%'
    },
    {
        title:'Junio',
        per:'9.5%'
    },
    {
        title:'Julio',
        per:'9.5%'
    },
    {
        title:'Agosto',
        per:'12.5%'
    },
    {
        title:'Septiembre',
        per:'8.9%'
    },
    {
        title:'Octubre',
        per:'10%'
    },
    {
        title:'Noviembre',
        per:'12%'
    },
    {
        title:'Diciembre',
        per:'12.5%'
    }
]
  
export default class ChatDetailsModal extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
      
    render(){
        return(
            <View style={{width:'100%',backgroundColor:'white'}}>
                <View style={{width:'90%',alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:18,fontFamily:'Merriweather-Black',alignSelf:'center',textAlign:'center',marginTop:10,marginBottom:10,color:'black'}}>Rentabilidad en el año 2023</Text>
                    <View style={{width:'100%'}}>
                        <Text style={{fontSize:17,fontFamily:'Merriweather-Regular',color:'black',marginBottom:10}}>Elige el fondo que quieres consultar.</Text>
                        <FlatList
                          data={this.props.data}
                          renderItem={({item})=>
                          <View>
                            <TouchableOpacity style={{height:40,width:'100%',borderWidth:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#C0C0C0'}}
                                onPress={()=>this.props.Selected(item?.id)} >
                                <Text style={{marginLeft:10,fontSize:17,color:'black',fontFamily:'Merriweather-Black'}}>{item.title}</Text>
                                <Image style={{width:20,height:20,marginRight:10}}
                                    source={require('../Images/plus-34.png')}
                                />
                            </TouchableOpacity>
                            {item.id == this.props.selectedId?
                            <View style={{width:'100%',borderWidth:1}}>
                                <Text style={{marginLeft:20,fontSize:15,fontFamily:'Merriweather-Regular',fontWeight:'bold',color:'black'}}>Inversion:    $ 10'000.000</Text>
                                <View style={{width:'100%',backgroundColor:'#C0C0C0',padding:6,flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text style={{marginLeft:20,fontSize:15,fontFamily:'Merriweather-Black',color:'black'}}>Mes</Text>
                                    <Text style={{marginLeft:20,fontSize:15,fontFamily:'Merriweather-Black',color:'black'}}>Rentabilidad mensual</Text>
                                </View>
                                <FlatList
                                    data={localData}
                                    renderItem={({item})=>
                                        <View style={{flexDirection:'row',justifyContent:'space-between',padding:5}}>
                                            <Text style={{marginLeft:20,fontSize:15,fontFamily:'Merriweather-Black',color:'black'}}>{item?.title}</Text>
                                            <Text style={{marginRight:20,fontSize:15,fontFamily:'Merriweather-Black',color:'black'}}>{item?.per}</Text>
                                        </View>  
                                    }
                                />
                            </View>
                            :null}
                           
                          </View>
                        }
                        />
                    </View>
                </View>
            </View>
        )
    }
}