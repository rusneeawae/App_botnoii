import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
export default class Home extends React.Component{


   static navigationOptions = {
    title: 'Home',
};
 
   render() {
    const { navigate } = this.props.navigation;


    return (

    <View style={styles.container}>
      <Text style={styles.container}>ARABIC ONE WORD A DAY</Text>
      <Image source={require('./profi.jpg')} style={{ width: 300, height: 300 }} />
      <Image source={require('./profi.jpg')} style={{ width: 300, height: 300 }} />
      <Button title="Click" style={{ width: 300, height:500 }}  onPress={() => navigate('Page1')}/>  
    </View>

  );
}
}

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    flexDirection:'column',
    
    backgroundColor: '#a4dce4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
