import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import SessionManager from './SessionManager';
import { withServerManager } from '../ServerManagerProvider/ServerManagerProvider';
import { setCartData, setCartProducts } from '../../apis/redux/cart/cart.actions';
import { selectAccountData } from '../../apis/redux/auth/auth.selectors';

const mapStateToProps = state => ({
  auth: selectAccountData(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setCartProducts,
    setCartData
  }, dispatch)
});

export default compose(
  withServerManager,
  connect(mapStateToProps, mapDispatchToProps)
)(SessionManager);
