import React from 'react'
import styles from './specifics.style'
import { View, Text } from 'react-native'

export default function Specifics({ title, points}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map((item, index) => 
          <View style={styles.pointWrapper} key={item + index}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>
              {item}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}