import { StyleSheet, Text, View, TextInput, Pressable, ScrollView , Platform} from 'react-native';
import { useState , useEffect } from 'react';

const API_URL = Platform.OS === 'ios' ?  'http://192.168.100.10:3000/api/' : 'http://localhost:3000/api/';

export default function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [updated , setUpdated] = useState(false);

  const handleAdd = async (index) => {
    if (!input.trim()) return;
    setItems([...items, input]);
    setInput("");
    try {
      const res = await fetch(API_URL + "add", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: items.length , value: input })
      })
    } catch (error) {
      console.error(error)
    } finally {
      setUpdated(true)
    }
  };

  const handleDelete = async (index) => {
    setItems(items.filter((item, i) => i !== index))
    try {
      const res = await fetch(API_URL + "delete", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: index })
      })
    } catch (err) {
      console.log(err)
    }finally {
      setUpdated(true)
    }
  }
  
  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(API_URL)
      const data = await res.json()
      console.log(data)
      setItems(data.items)
    }
    fetchItems()
    setUpdated(false)
  }, [updated])
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ToDo App</Text>

      {/* Input Section */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={input}
          onChangeText={setInput}
        />

        <Pressable style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addText}>+</Text>
        </Pressable>
      </View>

      {/* Todo List */}
      <View style={styles.list}>
        {items && items.map((item, index) => (
          <View key={index} style={styles.todoItem}>
            <Text style={styles.todoText} onPress={() => handleDelete(index)}>{index+1}: {item.value}</Text>
            <Pressable style={styles.deleteButton} onPress={() => handleDelete(item.id)}><Text style={styles.deleteText}>-</Text></Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingTop: 80,
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 28,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 6,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 3,
  },

  input: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 18,
    fontSize: 16,
    color: '#0F172A',
  },

  addButton: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '500',
    lineHeight: 26,
  },

  list: {
    gap: 14,
  },

  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 12,
    elevation: 2,
  },

  todoText: {
    fontSize: 16,
    color: '#1E293B',
    flex: 1,
    marginRight: 12,
  },

  /* 🔥 Delete styles */
  deleteButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#FEE2E2',
  },

  deleteText: {
    color: '#B91C1C',
    fontSize: 14,
    fontWeight: '500',
  },
});