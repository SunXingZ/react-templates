import React from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#bbbbbb',
    height: 2,
    overflow: 'hidden'
  },
  fill: {
    backgroundColor: '#ff4e00',
    height: 2
  }
});

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(this.props.initialProgress || 0)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.progress >= 0 && this.props.progress != prevProps.progress) {
      this.update()
    }
  }

  render() {
    return (
      <View style={[styles.background, this.props.backgroundStyle, this.props.style]}>
        <Animated.View style={[styles.fill, this.props.fillStyle, {
          transform: [{
            translateX: this.state.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [-this.props.style.width, 0]
            })
          }]
        }]} />
      </View>
    )
  }

  update() {
    Animated.timing(this.state.progress, {
      easing: this.props.easing,
      duration: this.props.easingDuration,
      toValue: this.props.progress,
      useNativeDriver: true
    }).start();
  }
}

ProgressBar.defaultProps = {
  style: styles,
  easing: Easing.inOut(Easing.ease),
  easingDuration: 500
}
