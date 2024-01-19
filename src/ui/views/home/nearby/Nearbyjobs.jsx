import React from 'react';
import { useRouter } from 'expo-router';
import { COLORS } from '../../../constants/theme';
import NearbyJobCard from '../../../components/cards/nearby/NearbyJobCard';
import styles from './nearbyjobs.style';
import useFetch from '../../../../lib/hooks/use-fetch.hook';
import { JOB_DATA_FAKE } from '../../../../assets/mock-data/pop-jobs-data.mock';
import { 
  View, 
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

export default function NearbyJobs() {
  const router = useRouter();

  const fetchQuery = {
    query: '.NET Developer',
    num_pages: 1
  }

  const data = JOB_DATA_FAKE;
  const isLoading = false;
  const error = false;
  // const { isLoading, error, data } = useFetch('search', fetchQuery);
  // console.log(data);

  function onNavigate(jobId) {
    return ;
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text styles={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ?
          (<ActivityIndicator size='large' colors={COLORS.primary} />) : 
          (error ?
            (<Text>Something went wrong...</Text>) :
            (data?.map((job) => 
              <NearbyJobCard
                key={`nearby-job-${job?.job_id}`}
                job={job}
                onNavigate={() => router.push(`/job_details/${job.job_id ?? '#'}`)}
              />
            ))
          )
        }
      </View>
    </View>
  );
}

