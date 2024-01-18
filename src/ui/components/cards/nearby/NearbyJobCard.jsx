import React from 'react'
import styles from './nearbyjobcard.style';
import { checkImageURL } from '../../../../lib/utils';
import { 
  View, 
  Text, 
  TouchableOpacity,
  Image
} from 'react-native'

export default function NearbyJobCard({
  job, onNavigate
}) {
  const logo = job?.employer_logo;
  const fallbackLogo = 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg';

  return (
    <TouchableOpacity style={styles.container} onPress={onNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: checkImageURL(logo) ? logo : fallbackLogo }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      {/* <Text
        style={styles.companyName}
        numberOfLines={1}
      >
        {item?.employer_name}
      </Text> */}

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title}
        </Text>
        <Text style={styles.jobType}>
          {job?.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  );
}