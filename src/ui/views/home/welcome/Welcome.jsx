import React, { useState } from 'react'
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

const jobTypes = ['Full-time', 'Part-time', 'Contractor'];

export default function Welcome() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Full-time');

  return (
    <View>
      <ViewHeader />
      <SearchBar />
      <JobTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

function ViewHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hello Johnny,</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job, today.</Text>
    </View>
  );
}

function SearchBar() {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput 
          style={styles.searchInput}
          value=''
          onChange={() => {}}
          placeholder='What job are you looking for?'
        />
      </View>
      <TouchableOpacity
        style={styles.searchBtn}
        onPress={() => {}}
      >
        <Image 
          source={icons.search}
          resizeMode='contain'
          style={styles.searchBtnImage}
        />
      </TouchableOpacity>
    </View>
  );
}

function JobTabs({ activeTab, setActiveTab }) {
  return (
    <View style={styles.tabsContainer}>
      <FlatList
        horizontal
        data={jobTypes}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.tab(activeTab, item)}
            // Changing active tab state, 
            // updating view Stack (i.e. changing routes).
            onPress={() => {
              setActiveTab(item);
              router.push(`/search/${item}`)
            }}
          >
            <Text style={styles.tabText(activeTab, item)}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small }}
      />
    </View>
  );
}