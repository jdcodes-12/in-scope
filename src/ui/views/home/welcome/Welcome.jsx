import React from 'react'
import styles from './welcome.style'
import { useRouter } from 'expo-router';
import { default as icons } from '../../../constants/icons';
import { SIZES } from '../../../constants/theme';
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'

export default function Welcome() {
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  )
}