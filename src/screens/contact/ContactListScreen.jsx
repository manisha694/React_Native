import { FlatList, Text } from 'react-native';
import { styles } from './style';
import { users } from './UserContactInfo';
import ContactItem from '../../components/ContactItem';

const ContactListScreen = () => {

  const renderItem = ({ item }) => (
    <ContactItem
      name={item.name}
      email={item.email}
    />
  );

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
      ListHeaderComponent={
        <Text style={styles.heading}>Contacts</Text>
      }
    />
  );
};

export default ContactListScreen;