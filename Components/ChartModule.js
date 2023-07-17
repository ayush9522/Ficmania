import * as React from 'react';
import { View, Text,SafeAreaView,TouchableOpacity,Dimensions } from 'react-native';
  const screenWidth = Dimensions.get("window").width;
  import { PieChart,LineChart } from "react-native-gifted-charts";
  const dataa = [{value: 15}, {value: 30}, {value: 26}];
  const data = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];
  
  const latestData = [
    {
      value: 100,
      labelComponent: () => lcomp('22 Nov'),
      customDataPoint: customDataPoint,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 210,
      customDataPoint: customDataPoint,
    },
    {
      value: 250,
      hideDataPoint: true,
    },
    {
      value: 320,
      labelComponent: () => lcomp('24 Nov'),
      customDataPoint: customDataPoint,
    },
    {
      value: 310,
      hideDataPoint: true,
    },
    {
      value: 270,
      customDataPoint: customDataPoint,
    },
    {
      value: 240,
      hideDataPoint: true,
    },
    {
      value: 130,
      labelComponent: () => lcomp('26 Nov'),
      customDataPoint: customDataPoint,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: customDataPoint,
    },
    {
      value: 210,
      hideDataPoint: true,
    },
    {
      value: 270,
      labelComponent: () => lcomp('28 Nov'),
      customDataPoint: customDataPoint,
    },
    {
      value: 240,
      hideDataPoint: true,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: customDataPoint,
    },
    {
      value: 210,
      labelComponent: () => lcomp('28 Nov'),
      customDataPoint: customDataPoint,
    },
    {
      value: 20,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: customDataPoint,
    },
  ];
  const customDataPoint = () => {
    return (
        <View
        style={{
            width: 20,
            height: 20,
            backgroundColor: 'white',
            borderWidth: 4,
            borderRadius: 10,
            borderColor: '#07BAD1',
        }}
        />
    );
};
const customLabel = val => {
    return (
        <View style={{width: 70, marginLeft: 7}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>{val}</Text>
        </View>
    );
};
const dataaa = [
    {
        value: 100,
        labelComponent: () => customLabel('22 Nov'),
        customDataPoint: customDataPoint,
    },
    {
        value: 140,
        hideDataPoint: true,
    },
    {
        value: 250,
        customDataPoint: customDataPoint,
    },
    {
        value: 290,
        hideDataPoint: true,
    },
    {
        value: 410,
        labelComponent: () => customLabel('24 Nov'),
        customDataPoint: customDataPoint,
        // showStrip: true,
        // stripHeight: 190,
        // stripColor: 'red',
        dataPointLabelComponent: () => {
        return (
            <View
            style={{
                // backgroundColor: 'black',
                // paddingHorizontal: 8,
                // paddingVertical: 5,
                // borderRadius: 4,
            }}>
            {/* <Text style={{color: 'black'}}>410</Text> */}
            </View>
        );
        },
        dataPointLabelShiftY: -70,
        dataPointLabelShiftX: -4,
    },
    {
        value: 440,
        hideDataPoint: true,
    },
    {
        value: 300,
        customDataPoint: customDataPoint,
    },
    {
        value: 280,
        hideDataPoint: true,
    },
    {
        value: 180,
        labelComponent: () => customLabel('26 Nov'),
        customDataPoint: customDataPoint,
    },
    {
        value: 150,
        hideDataPoint: true,
    },
    {
        value: 150,
        customDataPoint: customDataPoint,
    },
];
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
                    {/* <PieChart data={dataa}/> */}
                    {/* <LineChart areaChart data={data}/> */}
                    <LineChart
             thickness={6}
            color="#07BAD1"
            maxValue={600}
             width={screenWidth-40}
            // noOfSections={3}
            areaChart
            // yAxisTextStyle={{color: 'black'}}
            data={dataaa}
             curved
            // startFillColor={'rgb(84,219,234)'}
            // endFillColor={'rgb(84,219,234)'}
            startOpacity={0.4}
            endOpacity={0.4}
            spacing={38}
            backgroundColor="#414141"
            rulesColor="gray"
            rulesType="solid"
            initialSpacing={10}
            // yAxisColor="grey"
            // xAxisColor="grey"
             dataPointsHeight={20}
             dataPointsWidth={20}
        />
                    <View style={{flexDirection:'row',width:'80%',marginTop:30,marginBottom:10}}>
                        <Text style={{fontSize:15,textAlign:'center',fontFamily:'Merriweather-Regular',color:'black'}}>A la fecha <Text style={{fontSize:16,fontFamily:'Merriweather-Regular',color:'black',fontWeight:'bold'}}>12/03/2023 </Text>
                        la rentabilidad acumulada en tus FIC es de 10%
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}