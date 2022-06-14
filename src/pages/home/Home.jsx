import './home.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='imgBox'>
        <img
          className='imginnav img-fluid'
          src='https://i.hizliresim.com/8ddy7q8.jpg'
          alt=''
        />
      </div>
      <Header />

      <Footer />
    </div>
  );
};

export default Home;
