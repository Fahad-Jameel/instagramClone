import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Dummy data for conversations
const conversations = [
  { id: '1', username: 'Useless', lastMessage: 'Hey, how are you?', avatar: 'https://img.freepik.com/free-photo/3d-illustration-asian-woman-red-jacket-gray-background_1142-57685.jpg?t=st=1726435820~exp=1726439420~hmac=8ba416a95707dfe872a896f45e1b2cdc41f4dbf12e016b4ed7aa7f630d8ba8f1&w=826', time: '2m' },
  { id: '2', username: 'Mini', lastMessage: 'yeshhhh', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', time: '1h' },
  { id: '3', username: 'Stupid', lastMessage: 'tata', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', time: '3h' },
 
];

const ConversationItem = ({ item }) => (
  <TouchableOpacity style={styles.conversationItem}>
    <Image source={{ uri: item.avatar }} style={styles.avatar} />
    <View style={styles.conversationInfo}>
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.lastMessage}>{item.lastMessage}</Text>
    </View>
    <Text style={styles.time}>{item.time}</Text>
  </TouchableOpacity>
);

export default function Messages({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity>
          <Ionicons name="create-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={conversations}
        renderItem={({ item }) => <ConversationItem item={item} />}
        keyExtractor={item => item.id}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newMessageButton: {
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  newMessageText: {
    color: '#3897f0',
    fontWeight: 'bold',
  },
  conversationItem: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  conversationInfo: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lastMessage: {
    color: 'gray',
  },
  time: {
    color: 'gray',
    fontSize: 12,
  },
});