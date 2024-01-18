import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants/theme';
import PopularJobCard from '../../../components/cards/popular/PopularJobCard';
import styles from './popularjobs.style';
import useFetch from '../../../../lib/hooks/use-fetch.hook';
import { JOB_DATA_FAKE } from '../../../../assets/mock-data/pop-jobs-data.mock';
import { 
  View, 
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native';

export default function Popularjobs() {

  const fetchQuery = {
    query: '.NET Developer',
    num_pages: 1
  }

  const isLoading = false;
  const error = false;
  // const { isLoading, error, data } = useFetch('search', fetchQuery);
  // console.log(data);

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
              data={JOB_DATA_FAKE}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              renderItem={({ item }) =>
                <PopularJobCard 
                  item={item}
                  onPress={() => console.log('Pressed card!')}
                />  
              }
            />)
          )
        }
      </View>
    </View>
  );
}