import 'react-native-gesture-handler';
import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { useNavigation } from '@react-navigation/native';
import top from '@wireframes/assets/Lang_Screen/top.png';
import bottom from '@wireframes/assets/Lang_Screen/bottom.png';

const languages = [
  'Assamese',
  'Bengali',
  'English',
  'Gujarati',
  'Hindi',
  'Kannada',
  'Kashmiri',
  'Konkani',
  'Maithili',
  'Malayalam',
  'Manipuri',
  'Marathi',
  'Nepali',
  'Oriya',
  'Punjabi',
  'Sindhi',
  'Tamil',
  'Telugu',
  'Urdu',
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  top: {
    alignSelf: 'flex-end',
    height: Dimensions.get('window').height / 7,
    width: Dimensions.get('window').width / 2,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  cycleText: {
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height / 3 - 150,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 2,
    width: 120,
    borderRadius: 5,
    marginTop: -25,
    borderColor: '#F55963',
    position: 'absolute',
    right: 30,
    top: Dimensions.get('window').height - 50,
    flex: 1,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
    paddingLeft: 10,
    color: '#F55963',
  },
  wheelPicker: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
});

const LanguageScreen = () => {
  const [selectedLanguageIndex, setSelectedLanguageIndex] = React.useState(0);
  const navigation = useNavigation();
  const saveUserLanguage = async () => {
    try {
      let selectedLanguage = languages[selectedLanguageIndex];
      await AsyncStorage.setItem('userLanguage', selectedLanguage);
      navigation.navigate('Name');
    } catch (error) {
      console.log(error);
    }
  };

  // React.useEffect(() => {
  //   (async function() {
  //     try {
  //       const name = await AsyncStorage.getItem('Name');
  //       const lastPeriod = await AsyncStorage.getItem('lastPeriod');
  //       const userLanguage = await AsyncStorage.getItem('userLanguage');
  //       const avgCycle = await AsyncStorage.getItem('AvgPeriod');

  //       if (name !== null && userLanguage !== null && (lastPeriod !== null || avgCycle !== null)) {
  //         return true;
  //       }
  //       navigation.navigate('Dashboard');
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();
  // });

  return (
    <View style={styles.container}>
      <Image source={top} style={styles.top} />
      <View style={styles.cycleText}>
        <Text
          style={[{ fontFamily: 'PT-Sans', fontSize: 30, fontWeight: 'bold', alignSelf: 'center' }]}
        >
          please
        </Text>
        <Text style={{ fontFamily: 'PT-Sans', fontSize: 25, marginTop: 8, alignSelf: 'center' }}>
          {' '}
          select your{' '}
        </Text>
      </View>
      <Text style={{ fontFamily: 'PT-Sans', fontSize: 25, alignSelf: 'center', marginBottom: 25 }}>
        language
      </Text>
      <View style={styles.wheelPicker}>
        <WheelPicker
          selectedItem={selectedLanguageIndex}
          data={languages}
          onItemSelected={selectedItem => setSelectedLanguageIndex(selectedItem)}
        />
      </View>
      <Image source={bottom} style={styles.bottom} />
      <TouchableOpacity style={styles.button} onPress={saveUserLanguage}>
        <Text style={styles.buttonText}>Continue</Text>
        <AntDesign style={{ alignSelf: 'center', color: '#F55963' }} name="arrowright" size={18} />
      </TouchableOpacity>
    </View>
  );
};

export default LanguageScreen;
