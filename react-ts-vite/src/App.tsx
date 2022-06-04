import './App.css';
import AuthBtn from './components/AuthBtn';
import Nav from './components/Nav';
import Header from './components/Header';
import Trending from './components/Trending';

function App() {
  return (
    <div className="grid md:grid-cols-5">
      <nav className="col-span-1 bg-cyan-200">
        <Nav />
      </nav>
      <main className="px-12 py-6 md:col-span-4 bg-cyan-50">
        <AuthBtn />
        <Header />
        <Trending />
      </main>
    </div>
  );
}

export default App;
