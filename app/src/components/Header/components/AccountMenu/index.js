import AccountMenu from './AccountMenu'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { signOut } from '../../../../apis/redux/auth/auth.actions';
import { selectAccountData } from '../../../../apis/redux/auth/auth.selectors';

const mapStateToProps = (state) => ({
  account: selectAccountData(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    signOut
  }, dispatch)
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(AccountMenu)
