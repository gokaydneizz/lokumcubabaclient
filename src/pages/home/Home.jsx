import './home.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  return (
    <div className='home'>
      <div className='content-wrap'>
        <Navbar />
        <Header />
      </div>
    </div>
  );
};

export default Home;
