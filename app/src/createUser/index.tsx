import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput, 
  Alert, 
  ActivityIndicator 
} from 'react-native';
import { styles } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios, { AxiosError } from 'axios';
import api from '../../../api';

type RootStackParamList = {
  login: undefined;
  createuser: undefined;
};

type CreateUserScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'createuser'
>;

interface CreateUserProps {
  navigation: CreateUserScreenNavigationProp;
}

export default function CreateUser({ navigation }: CreateUserProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRegister = async () => {
    if (!formData.name || !formData.email || !formData.password || !formData.passwordConfirm) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios');
      return;
    }

    if (formData.password !== formData.passwordConfirm) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    setIsLoading(true);

    try {
      await api.post('/clients/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber || undefined
      });

      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('login') // Navega para a tela de login após o sucesso
        }
      ]);
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      let errorMessage = 'Erro ao realizar cadastro';

      if (axiosError.response) {
        if (axiosError.response.status === 409) {
          errorMessage = axiosError.response.data?.message || 'Email já está em uso';
        } else if (axiosError.response.status === 401) {
            errorMessage = axiosError.response.data?.message || 'Erro de autenticação';
        }
         else {
          errorMessage = `Erro do servidor: ${axiosError.response.status} - ${axiosError.response.data?.message || axiosError.message}`;
        }
      } else if (axiosError.request) {
        errorMessage = 'Não foi possível conectar ao servidor. Verifique sua conexão e o endereço da API.';
      } else {
        errorMessage = `Erro na requisição: ${axiosError.message}`;
      }

      Alert.alert('Erro', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.Container}>
      <View style={styles.form}>
        <TextInput
          style={styles.inputUserName}
          placeholder="Nome completo"
          value={formData.name}
          onChangeText={(text) => handleInputChange('name', text)}
          autoCapitalize="words"
          placeholderTextColor="#000"
        />

        <TextInput
          style={styles.inputForm}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#000"
        />

        <TextInput
          style={styles.inputForm}
          placeholder="Telefone (opcional)"
          value={formData.phoneNumber}
          onChangeText={(text) => handleInputChange('phoneNumber', text)}
          keyboardType="phone-pad"
          placeholderTextColor="#000"
        />

        <TextInput
          style={styles.inputForm}
          placeholder="Senha"
          value={formData.password}
          onChangeText={(text) => handleInputChange('password', text)}
          secureTextEntry
          placeholderTextColor="#000"
        />

        <TextInput
          style={styles.inputForm}
          placeholder="Confirmar senha"
          value={formData.passwordConfirm}
          onChangeText={(text) => handleInputChange('passwordConfirm', text)}
          secureTextEntry
          placeholderTextColor="#000"
        />

        {isLoading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <TouchableOpacity
            style={styles.buttonForm}
            onPress={handleRegister}
            disabled={isLoading}
          >
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}