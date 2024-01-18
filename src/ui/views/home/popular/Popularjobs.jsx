import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants/theme';
import PopularJobCard from '../../../components/cards/popular/PopularJobCard';
import styles from './popularjobs.style';
import { 
  View, 
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native';

export default function Popularjobs() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text styles={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ?
          (<ActivityIndicator size='large' colors={COLORS.primary} />) : 
          (error ? 
            (<Text>Something went wrong...</Text>) :
            (<FlatList 
              horizontal
              data={[1, 2, 3, 4, 5, 6, 7, 8]}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              renderItem={({ item }) =>
                <PopularJobCard item={item} />  
              }
            />)
          )
        }
      </View>
    </View>
  );
}