import Sidebar from './Sidebar'
import { bindActionCreators } from 'redux';
import { toggleDrawer } from '../../apis/redux/layout/layout.actions';
import { selectDrawerOpen } from '../../apis/redux/layout/layout.selectors';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const mapStateToProps = state => ({
  isDrawerOpen: selectDrawerOpen(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    toggleDrawer
  }, dispatch)
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Sidebar)
