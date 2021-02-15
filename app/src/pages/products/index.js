import Products from './Products'
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { withServerManager } from '../../components/ServerManagerProvider/ServerManagerProvider';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCartProducts } from '../../apis/redux/cart/cart.actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setCartProducts
  }, dispatch)
});

export default compose(
  withServerManager,
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Products)
