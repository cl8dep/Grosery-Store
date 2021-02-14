import Header from './Header'
import { bindActionCreators } from 'redux';
import { toggleDrawer } from '../../apis/redux/layout/layout.actions';
import { selectDrawerOpen } from '../../apis/redux/layout/layout.selectors';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { selectAccountData } from '../../apis/redux/auth/auth.selectors';
import { signOut } from '../../apis/redux/auth/auth.actions';

const mapStateToProps = state => ({
  isDrawerOpen: selectDrawerOpen(state),
  account: selectAccountData(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    toggleDrawer,
    signOut
  }, dispatch)
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Header)
