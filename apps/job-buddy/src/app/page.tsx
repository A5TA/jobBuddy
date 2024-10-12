'use client'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

const Home: React.FC = (props) => {

  const handleLogin = () => {
    console.log('Log In button clicked');
  };

  const handleSignUp = () => {
    console.log('Sign Up button clicked');
  };

  return (
    <div>
      <header>
        <Navbar transparent={false} />
      </header>
      <main>
        <Welcome></Welcome>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;