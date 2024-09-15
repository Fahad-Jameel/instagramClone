import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Post from '../components/Post';
import Story from '../components/Story';
import { posts, stories } from '../data/dummyData';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="logo-instagram" size={30} color="black" />
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
            <Ionicons name="heart-outline" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
            <Ionicons name="paper-plane-outline" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        ListHeaderComponent={
          <FlatList
            horizontal
            data={stories}
            renderItem={({ item }) => <Story story={item} />}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        }
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 44,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
});