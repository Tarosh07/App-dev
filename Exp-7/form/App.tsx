import React, { useState } from 'react';
import { View, Alert, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import Slider from '@react-native-community/slider';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Male');
  const [course, setCourse] = useState('B.Tech');
  const [age, setAge] = useState(18);
  const [agree, setAgree] = useState(false);

  const handleSubmit = () => {
    Alert.alert(
      'Registration Successful',
      `Name: ${name}\nEmail: ${email}\nGender: ${gender}\nCourse: ${course}\nAge: ${age}\nAgreed: ${agree ? 'Yes' : 'No'}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Registration Form</Text>

      <TextInput
        label="Full Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        style={styles.input}
      />

      <Text style={styles.label}>Gender:</Text>
      <View style={styles.radioGroup}>
        <Button
          mode={gender === 'Male' ? 'contained' : 'outlined'}
          onPress={() => setGender('Male')}
        >
          Male
        </Button>
        <Button
          mode={gender === 'Female' ? 'contained' : 'outlined'}
          onPress={() => setGender('Female')}
        >
          Female
        </Button>
      </View>

      <Text style={styles.label}>Course:</Text>
      <View style={styles.radioGroup}>
        <Button
          mode={course === 'B.Tech' ? 'contained' : 'outlined'}
          onPress={() => setCourse('B.Tech')}
        >
          B.Tech
        </Button>
        <Button
          mode={course === 'MCA' ? 'contained' : 'outlined'}
          onPress={() => setCourse('MCA')}
        >
          MCA
        </Button>
      </View>

      <Text style={styles.label}>Age: {age}</Text>
      <Slider
        minimumValue={18}
        maximumValue={60}
        step={1}
        value={age}
        onValueChange={setAge}
      />

      <CheckBox
        title="I agree to the Terms and Conditions"
        checked={agree}
        onPress={() => setAgree(!agree)}
        containerStyle={styles.checkbox}
      />

      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Submit
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flexGrow: 1 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  input: { marginBottom: 12 },
  label: { marginTop: 10, marginBottom: 5, fontWeight: '600' },
  radioGroup: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  checkbox: { backgroundColor: 'transparent', borderWidth: 0, paddingLeft: 0 },
  button: { marginTop: 20 },
});
