import React, { Component } from 'react';
import {
  ABOUT_US,
  HOME,
  LOGIN,
  LOGOUT,
  USER_PAGE,
  UPLOAD_PAGE,
  EXPLORE_PAGE,
  EDIT_PROFILE_PAGE
} from 'constants/links.js';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon, Dropdown, Button } from 'antd';
import { isThisPathUserPage } from 'helpers/StringProcess';
/** The common navbar ui used throughout the application. */
class CustomNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userId: null
    };
  }

  componentDidMount = () => {
    const { userStatus } = this.props;
    this.setState({ userEmail: userStatus.userEmail, userId: userStatus.userId });
  };

  componentDidUpdate = () => {
    const { userStatus } = this.props;
    const { userEmail, userId } = this.state;
    if (userStatus.userEmail !== userEmail || userStatus.userId !== userId)
      this.setState({ userEmail: userStatus.userEmail, userId: userStatus.userId });
  };

  handleMenuClick = e => {
    const { userId } = this.state;
    switch (e.key) {
      case 'userpage':
        this.props.history.push(USER_PAGE + '/' + userId);
        break;
      case 'editProfile':
        this.props.history.push(EDIT_PROFILE_PAGE);
        break;
      default:
        break;
    }
  };

  render() {
    const { userEmail, userId } = this.state;
    const isLogin = userEmail ? true : false;
    const { pathname } = this.props.location;

    const menu = (
      <Menu onClick={this.handleMenuClick}>
        {!isLogin && (
          <Menu.Item key='login'>
            <a href={LOGIN}>
              <Icon type='login' />
              <span className='ml-2'>Login</span>
            </a>
          </Menu.Item>
        )}
        {isLogin && (
          <Menu.Item key='editProfile'>
            <Icon type='edit' />
            Edit your profile
          </Menu.Item>
        )}
        {(isLogin && isThisPathUserPage(pathname)) && (
          <Menu.Item key='userpage-2'>
            <a href={USER_PAGE + '/' + userId}>
              <Icon type='profile' />
              <span className='ml-2'>Your page</span>
            </a>
          </Menu.Item>
        )}
        {(isLogin && !isThisPathUserPage(pathname)) && (
          <Menu.Item key='userpage'>
            <Icon type='profile' />
            Your page
          </Menu.Item>
        )}
        {isLogin && (
          <Menu.Item key='logout'>
            <a href={LOGOUT}>
              <Icon type='logout' />
              <span className='ml-2'>Logout</span>
            </a>
          </Menu.Item>
        )}
      </Menu>
    );

    return (
      <div className='navbar navbar-dark bg-primary'>
        <div>
          <Link to={HOME} className="navbar-brand">Home</Link>
          <Link to={EXPLORE_PAGE} className="navbar-toggler">Explore</Link>
          <Link to={ABOUT_US} className="navbar-toggler">About Our Team</Link>
        </div>
        <div>
          <Link to={UPLOAD_PAGE} className='navbar-toggler'>
            Create New Post
          </Link>
          <Dropdown overlay={menu}>
            <Button>
              Account
              <Icon type='user' />
            </Button>
          </Dropdown>
        </div>
      </div>
    );
  }
}
export default withRouter(CustomNavBar);
