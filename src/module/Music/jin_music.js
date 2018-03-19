import React, {Component} from 'react';
import music from './jin_music.less';

let rotateTimer = 0;
class ReactMusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused:false,
      currentMusic:{},
      isPlayed:false
    };
    this.last = this.last.bind(this);
    this.play = this.play.bind(this);
    this.next = this.next.bind(this);
  }
  componentDidMount(){
    let audio = this.refs.audio;
    this.setState({
      currentMusic:this.props.info[0]
    })
    audio.addEventListener('canplay',()=>{

    })
    //设置初始音量
    // this.refs.volumeProgress.style.width = "50%";
    audio.volume = 0.5
  }
  last(){
    this.setState({
      angle:0
    });
    if(!this.state.currentMusic.src){
      return
    }
    let current = ""
    this.props.info.forEach((v,i)=>{
      if (v.src === this.state.currentMusic.src){
        current = i
      }
    });
    if(current>0){
      this.setState({
        currentMusic:this.props.info[current-1]
      },()=>{
        this.play()
      })
    }else{
      this.setState({
        currentMusic:this.props.info[this.props.info.length-1]
      },()=>{
        this.play()
      })
    }

  }
  play(){
    clearInterval(rotateTimer)
    let audio = this.refs.audio;
    if(audio.paused && this.state.currentMusic.src){
      audio.play()
      this.setState({
        isPaused:true,
        isPlayed:true
      },()=>{
        rotateTimer = setInterval(()=>{
          this.setState({
            angle:this.state.angle+1
          },()=>{
            // this.refs.musicAvatar.style.transform = `rotate(${this.state.angle}deg)`;
          })
        },33)
      })
    }else{
      audio.pause()
      this.setState({
        isPaused:false
      },()=>{
        clearInterval(rotateTimer)
      })
    }

    audio.addEventListener('timeupdate',()=>{
      if(audio.ended){
        this.next()
      }
    });
  }
  next(){
    this.setState({
      angle:0
    });
    if(!this.state.currentMusic.src){
      return
    }
    let current = ""
    this.props.info.forEach((v,i)=>{
      if (v.src === this.state.currentMusic.src){
        current = i
      }
    });
    if(current<this.props.info.length-1){
      this.setState({
        currentMusic:this.props.info[current+1]
      },()=>{
        this.play()
      })
    }else{
      this.setState({
        currentMusic:this.props.info[0]
      },()=>{
        this.play()
      })
    }

  }
  playThis(i){
    this.setState({
      currentMusic:this.props.info[i]
    },()=>{
      this.play()
    })
  }
  render() {
    return (
      <div id="react-music-player" className={music.musicbody}>
              <p className={music.last_p} onClick={this.last}>上一首</p>
              <p className={music.go_p} onClick={this.play}>{this.state.isPaused && this.state.currentMusic.src?"暂停":"播放"}</p>
              <p className={music.next_p} onClick={this.next}>下一首</p>
              <audio src={this.state.currentMusic.src?this.state.currentMusic.src:""} ref = "audio"></audio>
      </div>
    )
  }
}
export default ReactMusicPlayer
