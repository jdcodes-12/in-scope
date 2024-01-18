import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Prevent splash screen from being hidden.
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsInAssetBundle] = useFonts({
    DMBold: require ('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require ('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require ('../assets/fonts/DMSans-Regular.ttf'),
  }); 

  // Hides the native splash screen once the fonts, only
  // if the fonts have been loaded. Once the fonts are loaded,
  // the splash screen is then hidden.
  const onLayoutRootView = useCallback(async () => {
    if (fontsInAssetBundle) 
      await SplashScreen.hideAsync();

  }, [fontsInAssetBundle]);

  return (
    fontsInAssetBundle ? 
      <Stack onLayoutRootView={onLayoutRootView} /> : 
      null  
  );
}