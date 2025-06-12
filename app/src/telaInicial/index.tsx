import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import { styles } from './styles';
import api from '../../../api';
import { AxiosError } from 'axios';

interface Recipe {
  id: string;
  name: string;
  description: string;
}

interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
}

export default function HomeScreen() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [recipeSearchTerm, setRecipeSearchTerm] = useState('');
  const [inventorySearchTerm, setInventorySearchTerm] = useState('');
  const [loadingRecipes, setLoadingRecipes] = useState(true);
  const [loadingInventory, setLoadingInventory] = useState(true);
  const [errorRecipes, setErrorRecipes] = useState<string | null>(null);
  const [errorInventory, setErrorInventory] = useState<string | null>(null);

  // Função para buscar receitas da API
  const fetchRecipes = async () => {
    setLoadingRecipes(true);
    setErrorRecipes(null);
    try {
      // Substitua '/recipes' pelo endpoint real da sua API de receitas
      const response = await api.get<Recipe[]>('/recipes');
      setRecipes(response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      setErrorRecipes(axiosError.message || 'Erro ao carregar receitas.');
      Alert.alert('Erro', 'Não foi possível carregar as receitas. Verifique sua conexão e a API.');
    } finally {
      setLoadingRecipes(false);
    }
  };

  // Função para buscar estoque da API
  const fetchInventory = async () => {
    setLoadingInventory(true);
    setErrorInventory(null);
    try {
      // Substitua '/inventory' pelo endpoint real da sua API de estoque
      const response = await api.get<InventoryItem[]>('/inventory');
      setInventory(response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      setErrorInventory(axiosError.message || 'Erro ao carregar estoque.');
      Alert.alert('Erro', 'Não foi possível carregar o estoque. Verifique sua conexão e a API.');
    } finally {
      setLoadingInventory(false);
    }
  };

  // Carrega os dados quando o componente é montado
  useEffect(() => {
    fetchRecipes();
    fetchInventory();
  }, []);

  // Lógica de filtro para receitas
  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(recipeSearchTerm.toLowerCase())
  );

  // Lógica de filtro para estoques
  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(inventorySearchTerm.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Card de Receitas */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Receitas</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar receita..."
            placeholderTextColor="#6B7280"
            value={recipeSearchTerm}
            onChangeText={setRecipeSearchTerm}
          />
          {loadingRecipes ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : errorRecipes ? (
            <Text style={styles.noResultsText}>Erro: {errorRecipes}</Text>
          ) : filteredRecipes.length > 0 ? (
            <View style={styles.listContainer}>
              {filteredRecipes.map(recipe => (
                <TouchableOpacity key={recipe.id} style={styles.listItem}>
                  <Text style={styles.listItemText}>{recipe.name}</Text>
                  <Text style={styles.listItemDescription}>{recipe.description}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <Text style={styles.noResultsText}>Nenhuma receita encontrada.</Text>
          )}
        </View>

        {/* Card de Estoques de Produtos */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Estoques de Produtos</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar produto..."
            placeholderTextColor="#6B7280"
            value={inventorySearchTerm}
            onChangeText={setInventorySearchTerm}
          />
          {loadingInventory ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : errorInventory ? (
            <Text style={styles.noResultsText}>Erro: {errorInventory}</Text>
          ) : filteredInventory.length > 0 ? (
            <View style={styles.listContainer}>
              {filteredInventory.map(item => (
                <TouchableOpacity key={item.id} style={styles.listItem}>
                  <Text style={styles.listItemText}>{item.name}</Text>
                  <Text style={styles.listItemDescription}>
                    Quantidade: {item.quantity} {item.unit}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <Text style={styles.noResultsText}>Nenhum produto encontrado.</Text>
          )}
        </View>

        {/* Terceiro Card (Exemplo) */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Outras Informações</Text>
          <Text style={styles.cardDescription}>
            Este é um card genérico que pode conter outras informações relevantes.
          </Text>
          <TouchableOpacity style={styles.genericButton}>
            <Text style={styles.genericButtonText}>Ver Detalhes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}