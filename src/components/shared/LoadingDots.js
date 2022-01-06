import React  from 'react';
import PropTypes from 'prop-types';
import loadingImg from './loading.gif';

class LoadingDots extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = ({frame : 1});
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({
                frame : this.state.frame + 1
            });
        },this.props.interval);
    }

    // componentWillMount(){
    //     clearInterval(this.interval);
    // }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        //let dots = this.state.frame % (this.props.dots + 1);
        // let text = '';
        // while(dots > 0){
        //     text += '.';
        //     dots--;
        // }
        return (
         <img src={loadingImg} className="App-logo" alt="logo" style={{position: 'absolute',top:'600%',left:'50%'}} />
        //  <span {...this.props} style={{fontSize:20,color:'red'}}>{text}&nbsp;</span>
        )
    }
}

LoadingDots.default = {
    interval : 300 , dots : 3
}

LoadingDots.propTypes = {
    interval : PropTypes.number,
    dots : PropTypes.number
};

export default LoadingDots;