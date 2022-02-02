import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';

import { Switch, Route } from 'react-router-dom'
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Footer from './components/Footer';
import home from './components/Home';
import About from './components/About';

import register from './components/register'
import Chat from './components/chat';
import Payment from './components/payment';
import profile from './components/profile';


import ResultList from './components/result';
import Loginn from './components/loginn';
import Admin from './components/admin';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import Thank from './components/Thankyou';






function App() {
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/home" component={home} />
        <Route exact path="/about" component={About} />

        <Route exact path="/register" component={register} />
        <Route exact path="/support" component={Chat} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/profile" component={profile} />

        <Route exact path="/log" component={Loginn} />
        <Route exact path="/logpro" component={ResultList} />
        <Route exact path="/admin" component={Admin} />

        <Route exact path='/create' component={Create} />



        <Route exact path='/read' component={Read} />


        <Route path='/update' component={Update} />
        <Route path="/thank" component={Thank} />





      </Switch >

      <Footer />




    </div >
  );
}

export default App;
