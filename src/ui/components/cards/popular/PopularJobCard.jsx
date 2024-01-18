import React from 'react'
import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../lib/utils';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image
} from 'react-native'

export default function PopularJobCard({
  item, selectedJob, onPress
}) {
  const logo = item?.employer_logo;
  const fallbackLogo = 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg';

  return (
    <TouchableOpacity 
      style={styles.container(selectedJob, item)}
      onPress={() => onPress(item)}
    >
      <TouchableOpacity
        style={styles.logoContainer(selectedJob, item)}
      >
        <Image
          source={{ uri: checkImageURL(logo) ? logo : fallbackLogo }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text
        style={styles.companyName}
        numberOfLines={1}
      >
        {item?.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text 
          style={styles.jobName(selectedJob, item)}
          numberOfLines={1}
        >
          {item?.job_title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}