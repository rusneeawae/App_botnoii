import React from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';


export default class Page2 extends React.Component{

    static navigationOptions = {
        title: 'Page2',
    };
     
 
   render() {

    const { navigate } = this.props.navigation;

    return (

    <View style={styles.container}>
      <Text style={styles.container}>"การสนทนาที่โรงเรียน"</Text>
      <Text style={styles.container}>เราอยู่ที่ไหน?             ‫أين نحن </Text>
      <Text style={styles.container}>เราอยู่ที่โรงเรียน    ‫نحن في المدرسة.</Text>
      <Text style={styles.container}>ผม / ดิฉัน เรียนภาษาอังกฤษ ‫أنا أتعلم الإنجليزية.</Text>
      <Text style={styles.container}>นั่นคือนักเรียน   . هؤلاء هم التلاميذ</Text>
      <Text style={styles.container}>เรากำลังเรียนภาษา  ‫إننا نتعلم لغة.</Text>
      <Text style={styles.container}>เรากำลังเรียนหนังสือ ‫نحن نتعلم.</Text>
      <Text style={styles.container}>เรากำลังทำอะไรอยู่?  ماذا سنفعل؟</Text>
      <Text style={styles.container}>นั่นคือคุณครู   . هذه هي المُعلمة.</Text>
    
      <Image source={require('./sp.jpg')} style={{ width: 350, height: 350 }} />
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
