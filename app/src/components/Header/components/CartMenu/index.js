
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { selectCartData, selectCartProducts } from '../../../../apis/redux/cart/cart.selectors';
import { withStyles } from '@material-ui/core';
import {styles} from './styles';

import CartMenu from './CartMenu'

const mapStateToProps = state => ({
  cartProducts: selectCartProducts(state),
  cartData: selectCartData(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({

  }, dispatch)
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(CartMenu)
