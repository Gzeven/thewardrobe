import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/winkel/*" element={<Shop />} />
        <Route path="/authenticatie" element={<Authentication />} />
        <Route path="/afrekenen" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
