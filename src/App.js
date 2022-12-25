import Hero1 from './components/MainComps/Hero1';
import MyNavbar from './components/Navbar/NavbarMain';
import './custom.scss';

function App() {
  return (
    <div className="bg-primary">
      <MyNavbar />
      <Hero1 />
    </div>
  );
}

export default App;
