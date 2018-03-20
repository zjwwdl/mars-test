import React, { Component } from 'react';
import fangda from '../Zmage/jin_zmage.less'
//*********图片放大*********
import Zmage from 'react-zmage'
//*********图片放大*********


class Fangda extends Component {
  render() {
    return (
      <div className={fangda.fangda_body}>
        <Zmage className={fangda.fangda_img} src="https://raw.githubusercontent.com/zjwwdl/mars-test/master/src/assets/ba5.jpg" alt="图片放大"/>
      </div>
    );
  }
}

Fangda.propTypes = {

}

export default Fangda;
