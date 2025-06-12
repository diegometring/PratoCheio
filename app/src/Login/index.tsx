import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Alert,
  ActivityIndicator
} from "react-native";
import { styles } from "./styles";
import { useRouter } from "expo-router";
import axios, { AxiosError } from 'axios';
import api from '../../../api';

interface LoginData {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const router = useRouter();
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof LoginData, value: string) => {
    setLoginData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogin = async () => {
    if (!loginData.email || !loginData.password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    setIsLoading(true);

    try {
      const response = await api.post('/clients/login', {
        email: loginData.email,
        password: loginData.password
      });

      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      router.push('/src/telaInicial');
      
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      let errorMessage = 'Erro ao tentar fazer login';

      if (axiosError.response) {
        if (axiosError.response.status === 401) {
          errorMessage = axiosError.response.data?.message || 'Credenciais inválidas';
        } else {
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

  const navigateToRegister = () => {
    router.push("/src/createUser");
    Alert.alert('Navegação', 'Navegando para tela de Cadastro');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.Container}>
        <View style={styles.UserImage}>
          <Image
            source={require("../../../assets/user-blue.png")} 
            style={styles.Image}
          />
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.inputEmail}
            placeholder="Email"
            value={loginData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.inputPassword}
            placeholder="Senha"
            value={loginData.password}
            onChangeText={(text) => handleInputChange('password', text)}
            secureTextEntry
            autoCapitalize="none"
            placeholderTextColor="#000"
          />
          
          {isLoading ? (
            <ActivityIndicator size="large" color="#000" />
          ) : (
            <TouchableOpacity
              style={styles.buttonForm}
              onPress={handleLogin}
              disabled={isLoading}
            >
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={navigateToRegister}>
            <Text style={styles.ButtonCreate}>Ainda não possui uma conta!</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
