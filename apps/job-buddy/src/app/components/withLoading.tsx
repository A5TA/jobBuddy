import { Suspense, useEffect, useState } from 'react';
import Loading from './Loading';

// Helper function to simulate a delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const withLoading = (Component: React.ComponentType, delayTime: number = 2000) => {
  return function WrappedComponent(props: any) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a loading delay
      delay(delayTime).then(() => setLoading(false));
    }, []);

    if (loading) {
      return <Loading />;  // Show loading during the delay
    }

    return (
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default withLoading;
