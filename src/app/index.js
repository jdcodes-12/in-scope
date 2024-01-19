import { useState } from 'react';
import { View, SafeAreaView, ScrollView, } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, SIZES } from '../ui/constants/theme';
import { default as icons } from '../ui/constants/icons';
import { default as images } from '../ui/constants/images';
import Welcome from "../ui/views/home/welcome/Welcome";
import NearbyJobs from "../ui/views/home/nearby/Nearbyjobs";
import PopularJobs from "../ui/views/home/popular/Popularjobs";
import { ScreenHeaderBtn } from '../ui/constants/index';

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1, 
        backgroundColor: COLORS.lightWhite
      }}
    >
        <NavigationBar />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              padding: SIZES.medium
            }}
          >
            <Welcome />
            <PopularJobs />
            <NearbyJobs />
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

function NavigationBar() {
  return (
    <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn 
              iconUrl={icons.menu}
              dimension="60%"
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn 
              iconUrl={images.profile}
              dimension="100%"
            />
          ),
          headerTitle: "JobSifter"
        }}
    />
  );
}