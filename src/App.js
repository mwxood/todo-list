
import './App.css';
import Create from './components/create/Create';
import Items from './components/items/Items';

function App() {

  const state = [
    {
      id: 1,
      title: 'Create the perfect list for every need.'
    }, 

    {
      id: 2,
      title: 'Organize, discuss and get things done.'
      
    },

    {
      id: 3,
      title: 'Organize everything into different spaces.'
    }
  ]

  const newState = [...state]

  return (
    <div className="App container mt-5">
      <h1 className="text-center heading">To do list</h1>
        <Create />
        <Items list={newState} />
    </div>
  );
}

export default App;
