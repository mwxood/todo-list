import { Button, Input } from '@material-ui/core';
import './App.css';
import Card from './components/card/Card';

function App() {

  const state = [
    {
      id: 1,
      title: 'test'
    }
  ]

  return (
    <div className="App container mt-5">
      <h1 className="text-center heading">To do list</h1>
      <Card>
        <Input />
        <Button>dasdasd</Button>
      </Card>
    </div>
  );
}

export default App;
