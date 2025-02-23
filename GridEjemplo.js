// components/GridFlexExample.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const GridFlexExample = () => {
  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('flex-start');

  return (
    <View style={{ padding: 10, flex: 1 }}>
      {/* Selector para flexDirection */}
      <PreviewLayout
        label="flexDirection"
        selectedValue={flexDirection}
        values={['row', 'column']}
        setSelectedValue={setFlexDirection}
      />

      {/* Selector para justifyContent */}
      <PreviewLayout
        label="justifyContent"
        selectedValue={justifyContent}
        values={[
          'flex-start',
          'flex-end',
          'center',
          'space-between',
          'space-around',
          'space-evenly',
        ]}
        setSelectedValue={setJustifyContent}
      />

      {/* Selector para alignItems */}
      <PreviewLayout
        label="alignItems"
        selectedValue={alignItems}
        values={['flex-start', 'flex-end', 'center', 'stretch', 'baseline']}
        setSelectedValue={setAlignItems}
      />

      {/* Vista de los estilos flexibles */}
      <View
        style={[
          styles.container,
          {
            flexDirection,
            justifyContent,
            alignItems,
          },
        ]}
      >
        <View style={[styles.box, { backgroundColor: 'powderblue' }]}>
          <Text style={styles.boxText}>Box 1</Text>
        </View>
        <View style={[styles.box, { backgroundColor: 'skyblue' }]}>
          <Text style={styles.boxText}>Box 2</Text>
        </View>
        <View style={[styles.box, { backgroundColor: 'steelblue' }]}>
          <Text style={styles.boxText}>Box 3</Text>
        </View>
      </View>
    </View>
  );
};

const PreviewLayout = ({
  label,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ marginVertical: 10 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
    padding: 10,
  },
  box: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GridFlexExample;
