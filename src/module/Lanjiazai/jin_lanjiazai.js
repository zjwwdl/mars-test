import React, { Component } from 'react';
import lanjiazai from '../Lanjiazai/jin_lanjiazai.less'
//*********图片懒加载*********
import { withLazyimg } from 'react-lazyimg-component';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'
//*********图片懒加载*********
// 配置 *********图片懒加载*********
const config = {
  placeholder: ''
};
const Lazy = withLazyimg(config);
// 配置 *********图片懒加载*********

class Lanjiazai extends Component {

  render() {
    return (
      <div className={lanjiazai.lanjiazai_body}>
        <Lazy   className={lanjiazai.lanjiazai_item}   js_effect="transition.shrinkIn"  src={'https://zhansingsong.github.io/lazyimg/bg9.b4fca14f.jpg'} />
        <Lazy   className={lanjiazai.lanjiazai_item}   js_effect="transition.whirlIn"  src={'https://zhansingsong.github.io/lazyimg/bg9.b4fca14f.jpg'} />
      </div>
    );
  }
}

Lanjiazai.propTypes = {

}

export default Lanjiazai;
