import React from 'react'
import styles from './footer.style'
import { default as icons } from '../../../constants/icons';
import { 
  View, 
  Text,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native'

export default function Footer({ url }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image 
          resizeMode='contain'
          style={styles.likeBtnImage}
          source={icons.heartOutline}
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>
          Apply Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}