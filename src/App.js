import Task_a from "./Task-a/Task_a";
import Task_b from "./Task-b/Task_b";


function App() {
  return (
    <>
      <Task_a />



      <Task_b
        name="Jaydeep"
        imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZ2mAbA5Xih1iadsraVkyI_nL591zpeO9Mg&s"
        bio="This is the bio of user 1"
      />

    
    </>
  );
}

export default App;