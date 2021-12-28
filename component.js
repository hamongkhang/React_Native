import React from "react";
import {View,Text,Image,FlatList,Picker,TouchableOpacity, Button,ScrollView, TabBarIOSItem} from "react-native";
import styles from "./style";
import data from "./data/data";

export default class Components extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isHidden: false};
        this.onPress = this.onPress.bind(this);
      }
      onPress() {
        this.setState({isHidden: !this.state.isHidden})
      }
   render(){
       return(
           <ScrollView style={styles.scrollView}>
           <View style={styles.header}>
               <Text style={styles.title}>FlatList And ScrollView</Text>
           </View>
           <View style={styles.body}>
           <View>
           <View style={styles.listImage}>
               <Image style={styles.image1} source={require('./image/red.png')}></Image>
               <Image style={styles.image2} source={require('./image/trai.png')}></Image>
              <View style={styles.text}>
              <Text style={styles.text1}>Mon 02 Nov- Sun 08 Nov 2020</Text>
               <Text style={styles.text2}>(3h 20m)</Text>

               </View>
               <Image style={styles.image4} source={require('./image/red.png')}></Image>
               <Image style={styles.image3} source={require('./image/phai.png')}></Image>
            </View>
           </View>
           <FlatList
           data={data}
           renderItem={({item, index})=>{
               return(
               <>
               <View style={styles.card}>
               <View style={styles.imageBackground}>
               <View style={styles.itemPost}>
               <Text style={styles.timeline}>{item.timeTitle}</Text>
               {this.state.isHidden ? 
               <TouchableOpacity onPress={this.onPress}>
               <Image style={styles.button} source={require('./image/button.png')}></Image>
               </TouchableOpacity> 
               : 
               <TouchableOpacity onPress={this.onPress}>
               <Image style={styles.button} source={require('./image/button2.png')}></Image>
               </TouchableOpacity>}
               </View>
               <Text style={styles.timeDetail}>{item.timeDetail}</Text>
               <Text style={styles.gach2}></Text>
               <Text style={styles.titletitle}>Job Name:</Text>
               <Text style={styles.job}>{item.job}</Text>
               {this.state.isHidden ? 
               null
               :
               <>
               <View style={styles.itemPost}>
                   <Text style={styles.titletitle1}>Leave Type:</Text>
                   <Text style={styles.titletitle2}>Time Allowance:</Text>
                   <Text style={styles.titletitle3}>LAHA</Text>
               </View>
               <View style={styles.itemPost}>
                   <Text style={styles.na1}>{item.leaveType}</Text>
                   <Text style={styles.na2}>{item.timeAllow}</Text>
                   <Text style={styles.na3}>{item.laha}</Text>
               </View>
               <Text style={styles.descriptionTitle}>Description:</Text>
               <Text style={styles.description}>{item.description}</Text>
               <Text style={styles.payrollTitle}>Payroll Note:</Text>
               <Text style={styles.payroll}>{item.payroll}</Text>
               <View style={styles.itemPost2}>
                   <TouchableOpacity style={styles.buttonone}><Text style={styles.edit}>Edit</Text></TouchableOpacity>
                   <TouchableOpacity style={styles.buttontwo}><Text style={styles.delete}>Delete</Text></TouchableOpacity>
               </View>
               </>}
               </View>
               </View>
               </>
               );
           }}
           >
           </FlatList>
           </View>
           </ScrollView>
       );
   }
}