import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF', 
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    width: '100%', 
    maxWidth: 500, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8, 
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  searchInput: {
    height: 44,
    borderColor: '#D1D5DB', 
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    color: '#374151', 
  },
  listContainer: {
    width: '100%',
  },
  listItem: {
    backgroundColor: '#F9FAFB', 
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB', 
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
    backgroundColor: '#2563EB',
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
