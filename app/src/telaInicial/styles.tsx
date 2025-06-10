import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6', // Cor de fundo suave
  },
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF', // Branco
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    width: '100%', // Largura total
    maxWidth: 500, // Largura máxima para telas maiores
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8, // Sombra para Android
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937', // Cinza escuro
    marginBottom: 16,
    textAlign: 'center',
  },
  searchInput: {
    height: 44,
    borderColor: '#D1D5DB', // Cinza claro
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    color: '#374151', // Cinza médio
  },
  listContainer: {
    width: '100%',
  },
  listItem: {
    backgroundColor: '#F9FAFB', // Fundo de item mais claro
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB', // Borda sutil
  },
  listItemText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
  },
  listItemDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  noResultsText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    paddingVertical: 20,
  },
  cardDescription: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 20,
    textAlign: 'center',
  },
  genericButton: {
    backgroundColor: '#2563EB', // Azul vibrante
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  genericButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
