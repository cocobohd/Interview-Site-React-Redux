import Header from '../1-container/Header';
import About from '../2-container/About';
import Project03 from '../3-container/Project03';
import Project02 from '../3-container/Project02';
import Project01 from '../3-container/Project01';
import Project04 from '../3-container/Project04';
import Footer from '../4-container/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Project03 />
      <Project02 />
      <Project01 />
      <Project04 />
      <Footer 
        footer="footer"
        allRights="all--rights"
        findUs="findus--text"
        link1="link1"
        link2="link2"
      />
    </>
  )
}