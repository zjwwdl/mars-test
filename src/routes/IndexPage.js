import React from 'react';
import { connect } from 'dva';
import mars from './mars.less'
import Header from '../module/jin_header'
import Lanjiazai from '../module/Lanjiazai/jin_lanjiazai'
import Music from '../module/Music/jin_music'
import Zmage from '../module/Zmage/jin_zmage'

class IndexPage extends React.Component {
  //生命周期
  constructor(props){
    super(props);
    console.log('生命周期constructor，首先调用');
    this.state = {
      //音乐自定义数据（react-music-player）
      songInfo:[
        {
          src:"http://qqma.tingge123.com:83/123/2016/10/青蛙乐队 - 小跳蛙.mp3",
          artist:"青蛙乐队",
          name:"小跳蛙",
          img:"http://singerimg.kugou.com/uploadpic/softhead/400/20160913/20160913140233132.jpg",
          id:"66575568441"
        },
        {
          src:"http://qqma.tingge123.com:83/20081117/认真的雪.mp3",
          artist:"薛之谦",
          name:"认真的雪",
          img:"http://img14.3lian.com/201512/02/9478d19283ce6f990741fbac92203132.jpg",
          id:"66575568449"
        }
      ]
      //音乐自定义数据（react-music-player）
    }
  }
  //生命周期
  componentWillMount(){
    console.log('生命周期componentWillMount，在render前触发');
  }
  //生命周期
  componentDidMount(){
    console.log('生命周期componentDidMount,组件挂载之后被调用(render之后)');
  }

  //跳转到新页面方法*****
  testgo(){
    this.props.history.push('/Onemod/')
  }
  //跳转到新页面方法*****

  render() {
    console.log('render');
    return (
      <div className={mars.Mars_body}>
        <div className={mars.mars_body_header}>
          <Header testgo={this.testgo.bind(this)}/>
        </div>
        <div className={mars.mars_body_second}>
          <div className={mars.mars_s_onesection}>
            <Lanjiazai/>
          </div>
          <div className={mars.mars_s_twosection}>
            <Music info={this.state.songInfo}/>
          </div>
          <div className={mars.mars_s_threesection}>
            <Zmage/>
          </div>
          <div className={mars.mars_s_foursection}>

          </div>
          <div className={mars.mars_s_fivesection}>

          </div>
          <div className={mars.mars_s_sixsection}>

          </div>
        </div>

      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
