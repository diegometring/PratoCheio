import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type RootStackParamList = {
  login: undefined;
  createuser: undefined;
};

type CreateUserScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'createuser'>;

interface CreateUserProps {
  navigation: CreateUserScreenNavigationProp;
}

export default function CreateUser({navigation}: CreateUserProps){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    function handleCreateUser(){
        if(name && email && password !== '' && password === passwordConfirm){
            alert('Cadastro criado com sucesso')
            navigation.navigate('login')
        }else {
            alert('Ops! algo errado')
        }
    }
    return(
        <View style={styles.Container}>
            <View style={styles.form} >
                <TextInput style={styles.inputUserName} placeholder='Nome'
                autoComplete='username' autoCapitalize='none'
                placeholderTextColor='#000' autoCorrect={false}
                onChangeText={(event) => setName(event)}
                 />
                <TextInput style={styles.inputForm} placeholder='Email'
                autoComplete='email' autoCapitalize='none' autoCorrect={false}
                placeholderTextColor='#000'
                onChangeText={(event) => setEmail(event)}
                 />
                <TextInput style={styles.inputForm} placeholder='Senha'
                autoComplete='password' autoCapitalize='none'
                placeholderTextColor='#000' autoCorrect={false}
                onChangeText={(event) => setPassword(event)}
                 />
                <TextInput style={styles.inputForm} placeholder='Confirmar senha'
                autoComplete='password' autoCapitalize='none' autoCorrect={false}
                placeholderTextColor='#000'
                onChangeText={(event) => setPasswordConfirm(event)}
                 />
                <TouchableOpacity style={styles.buttonForm}
                onPress={handleCreateUser} >
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}