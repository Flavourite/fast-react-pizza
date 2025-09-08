import { useEffect } from 'react';
import Header from './Header';
import Cart from '../features/cart/Cart';
import CartOverview from '../features/cart/CartOverview';

function AppLayout() {
  useEffect(() => {
    document.title = 'Fast React Pizza Co.';
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>Content</h1>
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
