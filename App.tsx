import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  NativeModules,
} from 'react-native';

const {IconChanger} = NativeModules;

const App = () => {
  const [selected, setSelected] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>
        SECURITY MODE: {selected ? 'ACTIVE' : 'DESACTIVE'}
      </Text>

      <TouchableOpacity
        style={styles.buttonStyleDefault}
        onPress={async () => {
          const response = await IconChanger?.changeIcon('SosAPP', 'Inter');
          console.warn('SECURITY MODE: ', response);
          setSelected(true);
        }}>
        <Text style={styles.buttonTextAlt}>Default</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={async () => {
          const response = await IconChanger?.changeIcon('Nubank', 'Inter');
          console.warn('SECURITY MODE: ', response);
          setSelected(true);
        }}>
        <Text style={styles.buttonText}>Nubank</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyleInter}
        onPress={async () => {
          const response = await IconChanger?.changeIcon('Inter', 'Nubank');
          console.warn('SECURITY MODE: ', response);
          setSelected(true);
        }}>
        <Text style={styles.buttonText}>Inter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 100,
    marginVertical: 5,
    height: 40,
    backgroundColor: '#473BF0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonStyleInter: {
    width: 100,
    marginVertical: 5,
    height: 40,
    backgroundColor: '#EE6C4D',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonStyleDefault: {
    width: 100,
    marginVertical: 5,
    height: 40,
    backgroundColor: '#4deebb',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0d0f2b',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#FFFFFF',
  },
  buttonTextAlt: {
    fontWeight: '600',
    fontSize: 16,
    color: '#252525',
  },
});

export default App;
