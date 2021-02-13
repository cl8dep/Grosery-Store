import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectDrawerOpen } from '../../apis/redux/layout/layout.selectors';
import { toggleDrawer } from '../../apis/redux/layout/layout.actions';
import Layout from './Layout'
import { compose } from 'recompose';

const mapStateToProps = state => ({
  isDrawerOpen: selectDrawerOpen(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    toggleDrawer
  }, dispatch)
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Layout)
