import React from 'react';
import {StyleSheet,Text,View,SafeAreaView,Image,Slider} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import AntIcon from  'react-native-vector-icons/AntDesign';
// import Entypo from 'react-native-vector-icons/Entypo';
import {AntDesign,Entypo,Ionicons} from '@expo/vector-icons';


export default function App(){

const NeuroMorph  = ({children,size,style}) => {
  return (
    <View style = {styles.topShadow}>
      <View style = {styles.bottomShadow}>

        <View style={[styles.inner,
        {width: size ||  40 ,height: size || 40,borderRadius: size / 4 || 40/2},
          style
        ]}>
            {children}
        </View>

      </View> 


    </View>

    
  )
}





return (
  <View style={styles.container}>
     
    <SafeAreaView style={{ alignSelf :'stretch'}}>
    <View style={{marginHorizontal: 32,marginTop: 32}}>
        <View style={styles.topContainer}>
          <NeuroMorph>
            <AntDesign name="arrowleft" color="#91A1BD" size={20} /> 
          </NeuroMorph>
          
          <View>
            <Text style={styles.playing}>Now Playing </Text>
          </View>

          <NeuroMorph>  
            <Entypo name='menu' color='#91A1BD' size={24}/>
          </NeuroMorph>

        </View>
        <View style={styles.songArtContainer}>
          <NeuroMorph size={300}>
              <Image source={require('./assets/roddy.jpg')} style={styles.songArt} />
          </NeuroMorph>
          </View>

        <View style  = {styles.songContainer}>
          <Text style={styles.title}> 
            The Box
          </Text>
          <Text style={styles.artist}> 
            Roddy Rich
          </Text>
          </View>

          <View style={styles.trackContainer}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={styles.time}>1:22</Text>
              <Text style={styles.time}>3:16</Text>
            </View>

          <Slider minimumValue={0} maximumValue={1} minimumTrackTintColor='#8AAAFF' thumbTintColor="#7B9BFF"
          maximumTrackTintColor="#DAE6F4">

          </Slider>

        </View>

      <View style ={styles.controlsContainer}> 
        <NeuroMorph size={80} >
          <Ionicons name='ios-rewind' size={24} color='#91A1BD' />
        </NeuroMorph>

        <NeuroMorph size={80} style={{backgroundColor: '#8AAAFF',borderColor: '#8AAAFF'}}>
          <Ionicons name='ios-pause' size={24} color='#91A1BD' />
        </NeuroMorph>

        <NeuroMorph size={80}>
          <Ionicons name='ios-fastforward' size={24} color='#91A1BD' />
        </NeuroMorph>

      </View>

    </View>
    </SafeAreaView>
  </View>
)

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#DEE9FD',
    alignItems:"center",
    // justifyContent: "center",
  },
  topContainer:{
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  inner:{
    backgroundColor: '#DEE9F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E2ECFD',
    borderWidth: 1,
  },
  topShadow:{
    shadowOffset:{
      width: -6,
      height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#FBFFFF",
  },
  bottomShadow:{
    shadowOffset:{
      width: 6,
      height: 6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#B7C4DD",
  },
  playing:{
    color: '#91A1BD',
    fontWeight: '800',
  },
  songArtContainer:{
    marginVertical: 32,
    alignItems: 'center',

  },
  songArt:{
    // height: auto, 
    // // width: auto,/
    resizeMode: 'stretch',
    // overflow: 'visible',
    // flex:1,
    // aspectRatio: 0.5,/
    height: 300,
    width: 300,
    // resizeMode: 'cover',
    // borderRadius: 100,
    borderColor: '#D7E1F3',
    borderWidth: 10,
  },
  songContainer:{
    alignItems: 'center',
  },
    title: {
      fontSize: 30,
      fontWeight: "600",
      // marginTop: 6,
      color: '#6C7A93',
    },
    artist:{
      fontSize: 14,
      marginTop: 6,
      color: '#91A1BD'
    },

    trackContainer:{
      marginTop: 32,
      marginBottom: 64,
    },
    time:{
      fontSize: 10,
      color:  '#91A1BD',
      fontWeight: "700",

    },
    controlsContainer:{
        flexDirection: 'row',
        justifyContent: "space-evenly",
    },



});