'use client'
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
        <Welcome></Welcome>
    </div>
  );
}

export default Home;