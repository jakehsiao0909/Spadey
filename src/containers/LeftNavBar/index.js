import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Drawer, AppBar, Divider } from 'material-ui';
import { Link } from 'react-router-dom';
/* component styles */
import { styles } from './styles.scss';
import './styles.scss';

/* actions */
import * as uiActionCreators from 'core/actions/actions-ui';

class LeftNavBar extends Component {
  constructor(props) {
    super(props);
  }

  closeNav = () => {
    this.props.actions.ui.closeNav();
  };

  render() {
    return (
      <div className={styles}>
        <Drawer
          docked={false}
          open={this.props.ui.leftNavOpen}
          onRequestChange={this.closeNav}
        >
          <AppBar title="" />
          <Divider />
          <div className="logout">
            <a href="/auth/logout">
              <span />Logout
            </a>
          </div>
          <div className="analysis">
            <Link to="/overallanalysis">Overall Analysis</Link>
          </div>
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavBar);
