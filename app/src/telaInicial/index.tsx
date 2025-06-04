import React, { useState } from 'react';
import { 
  View, 
  FlatList, 
  Text, 
  TouchableOpacity, 
  ActivityIndicator, 
  TextInput, 
  Image 
} from 'react-native';
import { styles } from './styles';

type Recipe = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  category: 'ENTRADA' | 'PRINCIPAL' | 'SOBREMESA' | 'BEBIDA';
  available: boolean;
};

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [newRecipe, setNewRecipe] = useState<Omit<Recipe, 'id'>>({
    name: '',
    image: '',
    description: '',
    price: 0,
    category: 'PRINCIPAL',
    available: true,
  });

  const handleCreateRecipe = () => {
    setLoading(true);
    
    setTimeout(() => {
      const recipeToAdd = {
        ...newRecipe,
        id: recipes.length + 1,
      };
      
      setRecipes([...recipes, recipeToAdd]);
      setNewRecipe({
        name: '',
        image: '',
        description: '',
        price: 0,
        category: 'PRINCIPAL',
        available: true,
      });
      setLoading(false);
    }, 1500);
  };

  const renderRecipeItem = ({ item }: { item: Recipe }) => (
    <View style={styles.card}>
      {item.image ? (
        <Image 
          source={{ uri: item.image }} 
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.details}>
          <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={item.available ? styles.available : styles.unavailable}>
            {item.available ? 'Disponível' : 'Indisponível'}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
     <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome da receita"
          value={newRecipe.name}
          onChangeText={(text) => setNewRecipe({...newRecipe, name: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Imagem"
          value={newRecipe.image}
          onChangeText={(text) => setNewRecipe({...newRecipe, image: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={newRecipe.description}
          onChangeText={(text) => setNewRecipe({...newRecipe, description: text})}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Preço"
          value={newRecipe.price.toString()}
          onChangeText={(text) => setNewRecipe({...newRecipe, price: Number(text) || 0})}
          keyboardType="numeric"
        />
        
        <View style={styles.categoryContainer}>
          {['ENTRADA', 'PRINCIPAL', 'SOBREMESA', 'BEBIDA', 'OUTRO'].map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoryButton,
                newRecipe.category === cat && styles.selectedCategory
              ]}
              onPress={() => setNewRecipe({...newRecipe, category: cat as Recipe['category']})}
            >
              <Text>{cat}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleCreateRecipe}
          disabled={loading || !newRecipe.name}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Adicionar Receita</Text>
          )}
        </TouchableOpacity>
      </View>

      <FlatList
        data={recipes}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma receita cadastrada</Text>
        }
      />
    </View>
  );
};

export default RecipeList;