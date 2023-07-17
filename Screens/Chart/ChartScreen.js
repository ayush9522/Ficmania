import * as React from 'react';
import { View, Text,SafeAreaView, TouchableOpacity,Image,ScrollView,Dimensions } from 'react-native';
import Header from '../../Components/Header';
import ChartModule from '../../Components/ChartModule';
import ChatDetailsModal from '../../Components/ChatDetailsModal';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const data =[{title:'Nombre Fondo Colectivo #1',id:1},{title:'Nombre Fondo Colectivo #2',id:2},{title:'Nombre Fondo Colectivo #3',id:3},{title:'Rentabilidad Acumulada',id:4}]
export default class ChartScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            CheckBox:false,
            selectedId:''
        }
    }
    
    render(){
        return(
            <SafeAreaView style={{backgroundColor:'white',flex:1,alignItems:'center'}}>
                <Header goBack={()=>this.props.navigation.goBack()}/>
                <ScrollView style={{width:'100%'}}>
                <ChartModule/>
                <ChatDetailsModal data={data} selectedId={this.state.selectedId} Selected={(value)=>this.setState({selectedId:value})}/>
                </ScrollView>
            </SafeAreaView>
        )
    }
}