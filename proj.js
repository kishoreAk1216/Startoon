import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

export default function PatientView() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { /* Handle back action */ }}>
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>View patient</Text>
      </View>

      <View style={styles.patientInfo}>
        <View style={styles.row}>
          <Text style={styles.patientName}>S.Meena, F/23</Text>
          <Text style={styles.patientID}>Patient ID : 87 20200727153457</Text>
        </View>
        <View style={styles.profileIcon}></View>
      </View>

      <View style={styles.goalCard}>
        <ProgressCircle
          style={styles.progressCircle}
          progress={0.4}
          progressColor={'#FF8C00'}
          backgroundColor={'#E6E6E6'}
        />
        <Text style={styles.goalText}>Goal reached</Text>
        <Text style={styles.goalPercent}>40%</Text>
        <View style={styles.metrics}>
          <Text style={styles.metricText}>EMG</Text>
          <Text style={styles.metricText}>ROM</Text>
        </View>
      </View>

      <View style={styles.details}>
        <Text style={styles.detailText}>Phone no.</Text>
        <Text style={styles.detailText}>Mail ID</Text>
        <Text style={styles.detailText}>Affected side</Text>
        <Text style={styles.detailText}>Condition</Text>
        <Text style={styles.detailText}>Speciality</Text>
      </View>

      <View style={styles.detailsValues}>
        <Text style={styles.valueText}>8022334455</Text>
        <Text style={styles.valueText}>meenarabinsachin2@gmail.com</Text>
        <Text style={styles.valueText}>Bilateral</Text>
        <Text style={styles.valueText}>Ortho</Text>
        <Text style={styles.valueText}>Osteoarthritis</Text>
      </View>

      <View style={styles.medicalHistory}>
        <Text style={styles.historyTitle}>Medical history</Text>
        <Text style={styles.historyText}>Hypertension, DM, Hypothyrodism</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  patientInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'column',
  },
  patientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  patientID: {
    fontSize: 14,
    color: '#555',
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EEE',
  },
  goalCard: {
    backgroundColor: '#002f5e',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  progressCircle: {
    height: 100,
    marginBottom: 8,
  },
  goalText: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 8,
  },
  goalPercent: {
    fontSize: 32,
    color: '#FFF',
    marginBottom: 16,
  },
  metrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 32,
  },
  metricText: {
    fontSize: 14,
    color: '#FFF',
  },
  details: {
    flexDirection: 'column',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  detailsValues: {
    flexDirection: 'column',
    marginBottom: 16,
  },
  valueText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
  },
  medicalHistory: {
    marginTop: 16,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  historyText: {
    fontSize: 14,
    color: '#555',
  },
});
