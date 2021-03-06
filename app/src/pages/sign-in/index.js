import SignIn from './SignIn'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { setAuthData } from '../../apis/redux/auth/auth.actions';
import { withRouter } from 'react-router-dom';
import { selectSignInSetting} from '../../apis/redux/settings/settings.selectors';

const mapStateToProps = state => ({
  settings: selectSignInSetting(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setAuthData
  }, dispatch)
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(SignIn);
