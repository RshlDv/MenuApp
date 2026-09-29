import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    justifyContent: 'center',
    padding: 20
  },
  scrollContent: {
    alignItems: 'center',
    padding: 24
  },
  card: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    elevation: 4,
    maxHeight: '95%'
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 20,
    textAlign: 'center'
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 20
  },

  //Inicio
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20
  },
  infoGroup: {
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 8
  },
  label: {
    fontSize: 12,
    color: '#6c757d',
    textTransform: 'uppercase',
    fontWeight: '600'
  },
  value: {
    fontSize: 18,
    color: '#212529',
    fontWeight: '500',
    marginTop: 2
  },

  //Formulario, Inputs
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },

  //Resultados
  resultContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#eef6ff',
    borderRadius: 8,
    alignItems: 'center'
  },
  resultLabel: {
    fontSize: 14,
    color: '#666'
  },
  resultValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 4,
    textAlign: 'center',
    textTransform: 'capitalize'
  },

  //Tablas/ Listas
  tableScroll: {
    marginTop: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  rowText: {
    fontSize: 18,
    color: '#333'
  },
  rowResult: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF'
  },

  //Video
scrollContent: {
  flexGrow: 1,
  alignItems: 'center',
  padding: 20
},
card: {
  backgroundColor: '#fff',
  padding: 20,
  borderRadius: 16,
  elevation: 4,
  width: '100%',
},
videoContainer: {
  width: '100%',
  borderRadius: 12,
  overflow: 'hidden'
},
});