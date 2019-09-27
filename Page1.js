import React from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';

export default class Page1 extends React.Component{

    static navigationOptions = {
        title: 'Home',
    };
     
 
   render() {

    const { navigate } = this.props.navigation;

    return (

    <View style={styles.container}>
      <Text style={styles.container}>การทำความรู้จัก</Text>
      <Text style={styles.container}>สวัสดีครับ! / สวัสดีค่ะ!                             ‫مرحبًا!‬ </Text>
      <Text style={styles.container}>สบายดีไหม ครับ / สบายดีไหม ค่ะ?     ‫‫كبف الحال؟ / كيف حالك؟</Text>
      <Text style={styles.container}>คุณมาจากยุโรปใช่ไหม ครับ / ค่ะ?          هل أنت من أوروبا؟</Text>
      <Text style={styles.container}>คุณพักอยู่โรงแรมอะไร ครับ/ ค่ะ?          ‫في أي فندق تقيم؟</Text>
      <Text style={styles.container}>คุณอยู่ที่นี่นานเท่าไหร่แล้ว ครับ / ค่ะ?      ‫مذ متى أنت هنا؟</Text>
      <Text style={styles.container}>คุณชอบที่นี่ไหม ครับ / ค่ะ?      ‫‫أتعجبك الإقامة هنا؟</Text>
      <Text style={styles.container}>คุณมาพักร้อนที่นี่ใช่ไหม ครับ / ค่ะ?      ‫أتقضي عطلتك هنا؟</Text>
      <Text style={styles.container}>มาเยี่ยม ผมบ้างนะครับ / มาเยี่ยม ดิฉันบ้างนะค่ะ   ‫تفضل بزيارتي!</Text>
      <Text style={styles.container}>เราพบกันพรุ่งนี้ดีไหมครับ / ค่ะ?      هل سنلتقي غدا</Text>
      <Text style={styles.container}>คุณมาพักร้อนที่นี่ใช่ไหม ครับ / ค่ะ?      ‫أتقضي عطلتك هنا؟</Text>
      <Image source={require('./meet.jpg')} style={{ width: 200, height: 200 }} />
      <Button title="next" style={styles.container}  onPress={() => navigate('Home')}/>  
    </View>

  );
}
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#a4dce4',
    alignItems: 'center',
  },
});
