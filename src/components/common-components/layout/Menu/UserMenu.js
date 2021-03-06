import React, {Component} from 'react';
import classNames from 'classnames';
import classes from './Menu.module.less';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

class UserMenu extends Component {
  render(){
    
  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classNames(classes.item, classes.active)}>
            <Link to="/jobs" style={{ color: 'black' }}>
              탐색
            </Link>
          </li>
          <li className={classes.item}>직군별 연봉</li>
          <li className={classes.item}>
            <Link to="/resumeList" style={{ color: 'black' }}>
              이력서
            </Link>
          </li>
          <li className={classes.item}>추천</li>
          <li className={classes.item}>이벤트</li>
        </ul>
      </nav>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <Link to="/signup">회원가입</Link>
            <Link to="/login">/로그인</Link>
          </li>
          <li className={classes.item}>
            <Link to="/mypage">마이페이지</Link>
          </li>
          
          <li className={classes.item}>
            <span onClick={this.props.handleChange}>
            <Link to="/companymain">기업 서비스</Link>
            </span>
            </li>
        </ul>
      </nav>
      <aside className={classes.aside}>
        <SearchOutlined />
        <BellOutlined />
      </aside>
    </>
  );
  
}
}

export default UserMenu;
