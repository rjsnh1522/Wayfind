import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Phone, LogIn, Map, Users, Settings } from 'lucide-react';



const GroupsScreen = () => {
    const [groups, setGroups] = useState([]);
    const [locationEnabled, setLocationEnabled] = useState(false);
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Groups</Text>
          <View style={styles.locationToggle}>
            <Text>Location Sharing</Text>
            <Switch 
              value={locationEnabled}
              onValueChange={setLocationEnabled}
            />
          </View>
        </View>
  
        {groups.length === 0 ? (
          <View style={styles.emptyState}>
            <Users size={48} color="#6540F5" />
            <Text style={styles.emptyText}>No Active Groups</Text>
            <TouchableOpacity 
              style={styles.createButton}
              onPress={() => navigation.navigate('CreateGroup')}>
              <Text style={styles.buttonText}>Create New Group</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={groups}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.groupCard}
                onPress={() => navigation.navigate('GroupMap', { groupId: item.id })}>
                <View style={styles.groupInfo}>
                  <Text style={styles.groupName}>{item.name}</Text>
                  <Text style={styles.groupMembers}>
                    {item.members.length} members
                  </Text>
                </View>
                <View style={styles.groupActions}>
                  <TouchableOpacity 
                    style={styles.iconButton}
                    onPress={() => handleDeleteGroup(item.id)}>
                    <Trash size={20} color="#FF4444" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
  
        {groups.length < 3 && (
          <TouchableOpacity 
            style={styles.fab}
            onPress={() => navigation.navigate('CreateGroup')}>
            <Plus size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
    header: {
      padding: 16,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 2,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    locationToggle: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    groupCard: {
      backgroundColor: 'white',
      margin: 8,
      padding: 16,
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 2,
    },
    groupInfo: {
      flex: 1,
    },
    groupName: {
      fontSize: 18,
      fontWeight: '600',
    },
    groupMembers: {
      color: '#666',
      marginTop: 4,
    },
    groupActions: {
      flexDirection: 'row',
      gap: 12,
    },
    iconButton: {
      padding: 8,
    },
    fab: {
      position: 'absolute',
      right: 16,
      bottom: 16,
      backgroundColor: '#6540F5',
      width: 56,
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
    },
    // Auth styles
    authCard: {
      backgroundColor: 'white',
      padding: 24,
      margin: 16,
      borderRadius: 16,
      elevation: 2,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
      marginBottom: 24,
    },
    authButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      backgroundColor: '#F5F5F5',
      borderRadius: 8,
      marginBottom: 12,
      gap: 12,
    },
  });
  
  export default GroupsScreen;