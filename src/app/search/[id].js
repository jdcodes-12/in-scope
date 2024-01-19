import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router'
import { ScreenHeaderBtn } from '../../ui/constants/index';
import { COLORS, SIZES } from '../../ui/constants/theme';
import { default as icons } from '../../ui/constants/icons';
import styles from '../../ui/styles/search';
import { RAPID_API_KEY, BASE_URL } from '@env';
import NearbyJobCard from '../../ui/components/cards/nearby/NearbyJobCard';
import { 
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator, 
  FlatList
} from 'react-native'

export default function JobSearch() {
  const searchParams = useGlobalSearchParams();
  const router = useRouter()

  // TODO: Convert to userReducer + reducer here here?
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);

  async function handleSearch() {
    setSearchLoader(true);
    setSearchResult([])

    try {
      const options = {
        method: "GET",
        url: `${BASE_URL}/search`,
        headers: {
          "X-RapidAPI-Key": RAPID_API_KEY,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: { 
          query: searchParams.id,
          page: page.toString(),
        },
      };

      const response = await axios.request(options);
      setSearchResult(response.data.data);
      
    } catch (error) {
      setSearchError(error);
      console.log(error);

    } finally {
      setSearchLoader(false);
    }
  };

  function handlePagination(direction) {
      if (direction === 'left' && page > 1) {
        setPage(page - 1);
        handleSearch();
      } else if (direction === 'right') {
        setPage(page + 1);
        handleSearch();
      }
  }

  useEffect(() => { 
    handleSearch();
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              onPress={() => router.back()}
            />  
          ),
          headerTitle: 'Search Results',
        }}
      />
      <FlatList
        data={searchResult}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
        renderItem={({ item }) => (
          <NearbyJobCard
            job={item}
            handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
          />
        )}
        ListHeaderComponent={() => (
          <ListHeader 
            params={searchParams} 
            loader={searchLoader}
            error={searchError}
          />
        )}
        ListFooterComponent={() => 
          <ListFooter 
            paginate={handlePagination} 
            page={page}
          />
        }
      />
    </SafeAreaView>
  );
}

function ListHeader({
  params,
  loader,
  error,
}) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.searchTitle}>
          {params.id}
        </Text>
        <Text style={styles.noOfSearchedJobs}>
          Job Opportunities
        </Text>
      </View>

      <View style={styles.loaderContainer}>
        {loader ? 
          (<ActivityIndicator size='large' color={COLORS.primary} />) :
          (error && <Text>Oops something went wrong</Text> )}
      </View>
    </>
  );
}

function ListFooter({ paginate, page }) {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.paginationButton}
        onPress={() => paginate('left')}
      >
        <Image
            resizeMode="contain"
            style={styles.paginationImage}
            source={icons.chevronLeft}
        />
      </TouchableOpacity>

      <View style={styles.paginationTextBox}>
        <Text style={styles.paginationText}>
          {page}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.paginationButton}
        onPress={() => paginate('right')}
      >
        <Image
          resizeMode="contain"
          style={styles.paginationImage}
          source={icons.chevronRight}
        />
      </TouchableOpacity>
    </View>
  );
}