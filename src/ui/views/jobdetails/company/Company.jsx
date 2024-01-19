import React from 'react';
import styles from './company.style';
import { checkImageURL } from '../../../../lib/utils';
import { default as icons } from '../../../constants/icons';
import {
  View,
  Text,
  Image
} from 'react-native';

export default function Company({
  companyLogo,
  companyName,
  jobTitle,
  location
}) {

  const fallbackLogo = 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqz05H.jpg';

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo) ? 
                  companyLogo : fallbackLogo
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>
          {jobTitle}
        </Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>
          {companyName} /
        </Text>
        <View>
          <Image 
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
}