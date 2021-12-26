import {StyleSheet,Dimensions} from "react-native";
let screenWidth=Dimensions.get('window').width;
let screenHeight=Dimensions.get('window').height;
const styles=StyleSheet.create({
    scrollView:{
         marginTop:20,
         paddingRight:30,
         paddingLeft:30,
    },
    image:{
        width:343, 
        height: 194,
        borderRadius:7,
    },
    imageBackground:{
         width:349, 
         height: 200,
        borderRadius:10,
        borderColor:"grey",
        borderBottomWidth:3,
        borderTopWidth:3,
        borderLeftWidth:3,
        borderRightWidth:3,
    },
    title:{
        fontSize:20,
        color:"black",
        marginTop:10,
    },
    header:{
        justifyContent:'center',
        alignItems:'center',
    },
    hr:{
     borderBottomColor:'grey',
     borderBottomWidth:2,
     width:420,
     marginBottom:30,
    },
    postTitle:{
        fontSize:20,
        alignSelf:'flex-start',
        marginBottom:20,
    },
    itemTitle:{
        marginTop:10,
        fontSize:20,
    },
    itemContent:{
        marginTop:5,
        fontSize:14,
    },
    icons:{
        width:20,
        height:20,
        marginTop:5,
    },
    time:{
        marginTop:5,
        marginLeft:5,
    },
    itemFooter:{
        flexDirection: 'row'
    },
    red:{
         color:"red",
         fontSize:20,
         marginTop:5,
         marginLeft:115,    
},
hrBottom:{
    borderBottomColor:'grey',
    borderBottomWidth:1,
    width:420,
    marginBottom:30,
   },
});
export default styles;