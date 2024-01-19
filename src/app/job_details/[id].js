import { useState, useCallback } from 'react';
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router';
import { COLORS, SIZES } from '../../ui/constants/theme';
import { default as icons } from '../../ui/constants/icons';
import useFetch from '../../lib/hooks/use-fetch.hook';
import Company from '../../ui/views/jobdetails/company/Company';
import About from '../../ui/views/jobdetails/about/About';
import Tabs from '../../ui/views/jobdetails/tabs/Tabs';
import Specifics from '../../ui/views/jobdetails/specifics/Specifics';
import Footer from '../../ui/views/jobdetails/footer/Footer';
import { ScreenHeaderBtn } from '../../ui/constants';
import { 
  View, SafeAreaView, ScrollView,
  Text,
  ActivityIndicator,
  RefreshControl
} from 'react-native';
import { JOB_DATA_FAKE } from '../../assets/mock-data/pop-jobs-data.mock';

const tabs = ['About', 'Qualifications', 'Responsibilities'];

export default function JobDetailsView() {

  const searchParams = useGlobalSearchParams();
  const router = useRouter();

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const data = JOB_DATA_FAKE[1];
  const isLoading = false;
  const error = false;

  const onRefresh = () => {};

  // const { data, isLoading, error, refetch } 
  //   = useFetch('job-details', {
  //     job_id: searchParams?.id 
  //   });

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.lightWhite }}
    >
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: 'Job Details',
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              onPress={() => router.back()}
            />  
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension='60%'
            />
          )
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefresh}
            />
          }
        >
          {isLoading ?
            (<ActivityIndicator color={COLORS.primary} size='large' />) :
            error ? (<Text>Something went wrong fetching data.</Text>)  :
              data === 0 ? 
                (<Text>No data to show.</Text>) :
                ( 
                  <ViewContent 
                    data={data} 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                )
          }
        </ScrollView>
        <Footer 
          url={data?.job_google_link ?? 'http://careers.google.com/jobs/results'}
        />
      </>
    </SafeAreaView>
  );
}

function ViewContent({ data, activeTab, setActiveTab }) {
  
  const { 
    job_title, 
    job_country,
    employer_logo, 
    employer_name 
  } = data;

  function displayTabContent() {
    switch(activeTab) {
      case 'About':
        return (
          <About 
            info={data.job_description ?? 'No description available.'}
          />
        );

      case 'Qualifications':
        return (
          <Specifics 
            title='Qualifications'
            points={data.job_highlights?.Qualifications ?? ['N/A']}
          />
        );

      case 'Responsibilities': 
        return (
          <Specifics 
            title='Responsibilities'
            points={data.job_highlights?.Responsibilities ?? ['N/A']}
          />
        );

      default: {
        console.log('> Failed to render a tab on JobDetailsView');
        break;
      }
    }
  }

  return (
    <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
      <Company
        companyLogo={employer_logo}
        companyName={employer_name}
        location={job_country}
        jobTitle={job_title}
      />

      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {displayTabContent()}
    </View>
  )
}