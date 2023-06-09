import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser } from '../../utils/rest';
interface Props {}

const Login: React.FC<Props> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleLogin = () => {
    getUser(email,password);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.img_container}>
          <Image
            style={styles.img}
            source={require('../../assets/img/149photos.png')}
          />
          <Text style={styles.intro_text}>
            Welcome to the 149photos photographer app. To continue, log in using
            the credentials provided to you by Builder Digital Solutions.
          </Text>
        </View>
        <View style={styles.login_container}>
          <TextInput
            style={styles.input_text}
            placeholder="Enter the email address"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.input_text}
            placeholder="Enter the password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Pressable style={({pressed})=>[styles.btn,pressed && {opacity:0.8}]} onPress={handleLogin}>
            <Text style={styles.btn_text}>Login</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#384a5d',
    padding: 20,
  },
  img_container: {
    alignItems: 'center',
  },
  img: {
    marginTop: 10,
  },
  intro_text: {
    marginVertical: 25,
    color: '#ffffff',
    paddingHorizontal: 10,
  },
  login_container: {
    marginVertical: 8,
  },
  input_text: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    color: '#ffffff',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#e16855',
    padding:8,
    marginTop:15,
  },
  btn_text:{
    color:'#ffffff'
  }
});
