import Header from './components/1-container/Header';
import About from './components/2-container/About';
import Project03 from './components/3-container/Project03';
import Project02 from './components/3-container/Project02';
import Project01 from './components/3-container/Project01';
import Project04 from './components/3-container/Project04';
import Footer from './components/4-container/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Project03 />
      <Project02 />
      <Project01 />
      <Project04 />
      <Footer />
    </div>
  );
}

export default App;
