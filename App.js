import { useState } from 'react';
import { StyleSheet, View, Button, FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  };

  function endAddGoalHandler() {
    setModalIsVisible(false);
  };

  //add a goal
  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, 
        {id: Math.random().toString(), text: enteredGoalText}]);
    endAddGoalHandler();  
  };

  //delete a goal
  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  };

  //view being outputted to app
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        
        <Button title='Add New Goal' 
          color="#1982FC"
          onPress={startAddGoalHandler}/>

        <GoalInput visible={modalIsVisible} 
          onAddGoal={addGoalHandler} 
          onCancel={endAddGoalHandler}/>

        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals}  
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
                />}}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

//main screen css styles
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5,
  }
});
