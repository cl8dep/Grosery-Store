import SignUp from './SignUp'
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { withServerManager } from '../../components/ServerManagerProvider/ServerManagerProvider';
import { connect } from 'react-redux';
import { selectSignUpSetting } from '../../apis/redux/settings/settings.selectors';


const mapStateToProps = state => ({
  settings: selectSignUpSetting(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({

  }, dispatch)
});

export default compose(
  withServerManager,
  connect(mapStateToProps, mapDispatchToProps)
)(SignUp)
