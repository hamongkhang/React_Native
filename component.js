import React from "react";
import {View,Text,Image,FlatList, Button,ScrollView} from "react-native";
import styles from "./style";
import data from "./data/data";

export default class Components extends React.Component{
   render(){
       return(
           <ScrollView style={styles.scrollView}>
           <View style={styles.header}>
               <Text style={styles.title}>FlatList</Text>
               <Text style={styles.hr}></Text>
               <Text style={styles.postTitle}>My Post</Text>
           </View>
           <FlatList
           data={data}
           renderItem={({item, index})=>{
               return(
               <>
               <View style={styles.card}>
               <View style={styles.imageBackground}>
               <Image  style={styles.image} source={{uri:item.image}}>
               </Image>
               </View>
               <Text style={styles.itemTitle}>{item.title}</Text>
               <Text style={styles.itemContent}>{item.content}</Text>
               <View style={styles.itemFooter}>
               <Image style={styles.icons} source={require('./image/clock.png')}></Image>
               <Text style={styles.time}>{item.time}</Text>
               <Text style={styles.red}>{item.code}</Text>
               </View>
               <Text style={styles.hrBottom}></Text>
               </View>
               </>
               );
           }}
           >
           </FlatList>
           </ScrollView>
       );
   }
}