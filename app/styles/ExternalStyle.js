import { StyleSheet,Platform } from 'react-native'
import { colorBlack, colorLightBackground, colorPrimary, colorPrimaryDark, colorWhite, lightGrey } from './Color';
import { cardRadius, DEVICE_HEIGHT, DEVICE_WIDTH, inputFieldHeight, pagePadding } from './Dimens';
import { fontFamily } from './Fonts';

export const uniformShadow = {
    ...Platform.select({
        android: {
            elevation: 2,
        },
        ios: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
        },
    })

}
export const uniformShadowBubble = {
    ...Platform.select({
        android: {
            elevation: 8,
        },
        ios: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
        },
    })
}
export const uniformShadowBubbleInside = {
    ...Platform.select({
        android: {
            elevation: 10,
        },
        ios: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
        },
    })
}

const circleDesign = StyleSheet.create({  
    halfRound: {backgroundColor:colorPrimaryDark,height:DEVICE_WIDTH+50,width:DEVICE_WIDTH+50,borderRadius:(DEVICE_WIDTH+25)/2,marginTop:-240,left:-30,right:50},
    homeRound: {backgroundColor:colorPrimaryDark,height:DEVICE_WIDTH+50,width:DEVICE_WIDTH+50,borderRadius:(DEVICE_WIDTH+25)/2,marginTop:-150,left:-30,right:50},
    fullRound: {backgroundColor:'rgba(240,209,152,.55)',height:DEVICE_WIDTH-10,alignItems:'center',justifyContent:'center',alignSelf:'center',width:DEVICE_WIDTH-10,borderRadius:(DEVICE_WIDTH-10)/2,marginTop:10,},
    fullLittleRound: {backgroundColor:'rgba(240,209,152,1)',height:DEVICE_WIDTH-80,width:DEVICE_WIDTH-80,borderRadius:(DEVICE_WIDTH-80)/2,},

});
const trangleDesign = StyleSheet.create({  
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: (DEVICE_WIDTH-100)/2,
        borderRightWidth: (DEVICE_WIDTH-100)/2,
        borderBottomWidth: DEVICE_WIDTH-100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red'
      }
});
const cardDesign = StyleSheet.create({  
    card: {
        alignSelf: 'center',
        margin:10,
        marginTop:1,
        padding:20,
        justifyContent:'flex-end',
        alignItems:'center',
        height:DEVICE_HEIGHT-50
      }
});
// export default styles = StyleSheet.create({
//     defaultTextFieldStyle : {
//         width : 55, 
//         height : 55, 
//         textAlign : 'center',
//         color: '#000', 
//     },
// })
const inputView = StyleSheet.create({  
        inputBox: {
            height: inputFieldHeight,
            flexDirection: 'row',
            alignContent: 'center', alignItems: 'center',
             paddingBottom: 5,backgroundColor:colorWhite,borderRadius:25,
             paddingLeft:15,
             paddingRight:15,
             paddingTop:5,
             backgroundColor:colorLightBackground
       },
       inputBoxMessage: {
        height: 150,
        flexDirection: 'row',
        alignContent: 'center', alignItems: 'flex-start',
         paddingBottom: 5,backgroundColor:colorWhite,borderRadius:7,
         paddingLeft:10,
         paddingRight:10,
         paddingTop:5,
       },
    inputIcon: {
        height:15,width:15
    },
    inputStyle: {
        flex: 1, fontFamily: fontFamily.regular,paddingLeft:15,paddingRight:15,height:inputFieldHeight, 
        backgroundColor: 'lightgrey',
        borderRadius: 2,
        marginBottom: 10
    },
    inputPlaceHolderStyle: {
        flex: 1, fontFamily: fontFamily.regular,paddingRight:10,height:inputFieldHeight, borderBottomWidth: 1,
        borderBottomColor:colorLightBackground
    }
  });
  export { inputView,circleDesign,trangleDesign,cardDesign} 