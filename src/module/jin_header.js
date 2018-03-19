import React, { Component } from 'react';
import header from './jin_header.less'

class Header extends Component {
  goOnemod = () => {
    this.props.testgo();
  }

  render() {
    return (
      <div className={header.jin_header_body}>
        <div className={header.jin_header_item} onClick={this.goOnemod}><p>测试模块1</p></div>
        <div className={header.jin_header_item}><p>测试模块2</p></div>
        <div className={header.jin_header_item}><p>测试模块3</p></div>
        <div className={header.jin_header_item}><p>测试模块4</p></div>
      </div>
    );
  }
}

Header.propTypes = {

}

export default Header;
