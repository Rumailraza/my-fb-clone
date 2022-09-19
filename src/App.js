import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Posts from './components/Posts';
import Chatbox from './components/Chatbox';
function App() {
  return (
    <div>
      <Navbar />
      <div className='facebook'>
        <Sidebar />
        <Posts />
        <Chatbox />
      </div>
    </div>
  );
}

export default App;
