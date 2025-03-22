import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, requireNativeComponent, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style ={styles.titulo}> Galeria de gatitos </Text>
     
     
      <Text style ={styles.subtitulo}> Gato curioso </Text>
      <Image style={styles.gato} source={require('./Imagenes/gatito.jpg')} />
      
      <Text style ={styles.subtitulo}> Gato elegante </Text>
      <Image style={styles.gato} source={require('./Imagenes/gatito2.jpg')} />

      <Text style ={styles.subtitulo}> Gato flow </Text>
      <Image style={styles.gato} source={require('./Imagenes/gatito3.jpg')} />

      <Text style ={styles.subtitulo}> Gato atrapado en la movida </Text>
      <Image style={styles.gato} source={require('./Imagenes/gatito4.jpg')} />

      <Text style ={styles.subtitulo}> Gato mimido </Text>
      <Image style={styles.gato} source={require('./Imagenes/gatito5.jpg')} />

      <Text style ={styles.subtitulo}> Gato fino (no hace nada) </Text>
      <Image style={styles.gato} source={require('./Imagenes/gatito6.jpg')} />

      <Text style ={styles.subtitulo}> Gato blanco </Text>
      <Image style={styles.gato} source={require('./Imagenes/gatito7.jpg')} />

      <Text style ={styles.subtitulo}> Gato con años de sabiduria </Text>
      <Image style={styles.gato} source={require('./Imagenes/gatito8.jpg')} />

      <Text style ={styles.subtitulo}> Gato siames  </Text>
      <Image style={styles.gato} source={require('./Imagenes/gatito9.jpg')} />

      <Text style ={styles.subtitulo}> Gato esponjoso </Text>
      <Image style={styles.gato} source={require('./Imagenes/gatito10.jpg')} />
      </ScrollView>

      <StatusBar style="auto" />
      </View>
  );
}

// para agregarle el estilo a un componente siempre se le asignar
// a la primera etiqueta


// donde se definen los estilos ->
const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gato:{
    width:380,
    height:350,
  },
  titulo: {
    font: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitulo: {
    font: 12,
    fontWeight: 'bold',
    color: '#0200F4',
  }
});
