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
} from "react-native";
import { styles } from "./styles";
import { useRouter } from "expo-router";

export default function LoginScreen() {

  const router = useRouter();

  const userScreen = () => {
    router.push("/src/createUser");
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
            autoComplete="email"
            autoCapitalize="none"
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.inputPassword}
            placeholder="Senha"
            autoComplete="password"
            autoCapitalize="none"
            autoCorrect={true}
            placeholderTextColor="#000"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.buttonForm}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={userScreen}>
            <Text style={styles.ButtonCreate}>Ainda não possui uma conta!</Text>
          </TouchableOpacity >
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
