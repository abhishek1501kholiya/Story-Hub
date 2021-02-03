import React from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'

export default class WriteStoryScreen extends React.Component{
     consturctor(){
         this.state = {
              storyTitle:'',
              Author:'',
              Story:''
         }
     } 
     submitIt = async()=>{
     
     }
    render(){
         return(
             <View style={Styles.container}> 
             <Text style={{fontWeight:'bold',fontSize:24,marginBottom:50}}>Write a Story</Text>
                 <TextInput style={Styles.TextInputs} placeholder="Story Title" onChangeText={(StoryTitle)=>{this.setState({
                       storyTitle:StoryTitle
                 })}
                 }></TextInput>
                 <TextInput style={Styles.TextInputs} placeholder="Author" onChangeText={(Author)=>{
                     this.setState({
                         Author:Author
                     })
                 }}></TextInput>
                 <TextInput style={{width:375,height:250,borderWidth:1,borderColor:'black',borderRadius:10}} multiline={true} placeholder=" Write your Story" onChangeText={(Story)=>{this.setState({
                     Story:Story
                 })}}></TextInput>

                 <TouchableOpacity 
                 onPress={()=>{
                    if(this.state.storyTitle!== '' && this.state.Author!== '' && this.state.Story!== ''){
                        alert('Story Submitted Sucessfully');
                    } else{
                        alert('kindly fill all the fields')
                    }
                 }}
                 style={{width:150,height:35,backgroundColor:'green',alignSelf:'center'}}>
                       <Text style={{fontWeight:'bold',textAlign:'center',marginTop:10,borderRadius:10}}>Submit</Text>                         
                 </TouchableOpacity>
             </View>
         ) 
             
         }
  }
  const Styles= StyleSheet.create({
      container:{
          flex:1,
          justifyContent:'center',
          alignContent:'center',
          alignSelf:'center'
      },
      TextInputs:{
          width:375,
          height:40,
          borderWidth:1,
          borderColor:'black',
          justifyContent:'center',
          alignSelf:'center',
          marginBottom:50,
          borderRadius:10
      }
  })