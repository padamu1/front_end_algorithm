import React,{Component} from 'react';
import User from './page/user';
import Submenu from './page/submenu';
import Mainpage from './page/mainpage';

class Router extends Component {
  render (){
    return(
      <div className="Router">
        <User />
        <Mainpage />
        <Submenu />
      </div>
    );
  }
}

export default Router;
