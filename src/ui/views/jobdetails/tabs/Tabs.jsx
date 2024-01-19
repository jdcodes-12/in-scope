import React from 'react';
import { SIZES } from '../../../constants/theme';
import styles from './tabs.style';
import { 
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';

export default function Tabs({
  tabs,
  activeTab,
  setActiveTab
}) {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabs}
        renderItem={({ tab }) =>
          <TabButton 
          name={tab}
          actveTab={activeTab}
          handleSearchType={() => setActiveTab(tab)}
          />
        }
        keyExtractor={(tab) => tab}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
}

function TabButton({ 
  tab,
  activeTab,
  handleSearchType
}) {
  return (
    <TouchableOpacity 
      style={styles.btn(tab, activeTab)}
      onPress={handleSearchType}
    >
      <Text style={styles.btnText(tab,activeTab)}>
        {tab}
      </Text>
    </TouchableOpacity>
  )
}