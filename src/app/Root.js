// @flow weak

import React, {
  Component
}                               from 'react';
import {
  // Router, // using now ConnectedRouter from react-router-redux v5.x (the only one compatible react-router 4)
  Switch,
  Route
}                               from 'react-router-dom';
import { ConnectedRouter }      from 'react-router-redux';
import { Provider }             from 'react-redux';
import { Web3Provider }         from 'react-web3'
import configureStore           from './redux/store/configureStore';
import { history }              from './redux/store/configureStore';
import App                      from './containers/app';
import ScrollTop                from './components/scrollToTop/ScrollToTop';
import Login                    from './views/login/index';
import Register                 from './views/register'
import PageNotFound             from './views/pageNotFound';

//import getWeb3 from './services/getWeb3'
 

// #region flow types
type Props = any;
type State = any;
// #endregion

export const store = configureStore()
export { history } from './redux/store/configureStore'


class Root extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <Web3Provider > 
          <div>
            <ConnectedRouter history={history}>
              <ScrollTop>
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <App />
                  <Route component={PageNotFound} />
                </Switch>
              </ScrollTop>
            </ConnectedRouter>
          </div>
        </Web3Provider>
      </Provider>
    );
  }
}

export default Root;
