import React from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import { Button } from "react-native-elements";
import { DeviceConfigs } from "../configs";

/**
 * 1、网络异常(网络断开连接或异常时展示)
 * 2、加载失败(接口报错时展示，如：404，500)
 * 3、无数据提示(页面没有数据时展示)
 * 4、页面级操作提示(不使用alert、toast等提示方式)
 */
export default class StateScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {
    return (
      <ScrollView
        style={[this.props.contentStyle ? this.props.contentStyle : {}]}
      >
        {
          this.props.children || (
            <View style={[styles.wrap, this.props.style ? this.props.style : {}]}>
              <Image
                style={[styles.image, this.props.imageStyle ? this.props.imageStyle : {}]}
                source={this.props.image}
                resizeMethod="auto"
                resizeMode="contain"
              />
              {this.props.text && (
                <Text style={[styles.text, this.props.textStyle ? this.props.textStyle : {}]}>
                  {this.props.text}
                </Text>
              )}
              {this.props.buttonText && (
                <Button
                  titleStyle={[this.props.buttonTextStyle ? this.props.buttonTextStyle : {}]}
                  containerStyle={[styles.button, this.props.buttonStyle ? this.props.buttonStyle : {}]}
                  title={this.props.buttonText}
                  onPress={this.props.onButtonPress ? this.props.onButtonPress : null}
                />
              )}
            </View>
          )
        }
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: DeviceConfigs.deviceHeight * 0.7
  },
  image: {
    alignSelf: 'center',
    width: DeviceConfigs.deviceWidth * 0.5,
    height: DeviceConfigs.deviceHeight * 0.2
  },
  text: {
    alignSelf: 'center',
    paddingTop: 15,
    fontSize: 16,
    color: '#666666'
  },
  button: {
    width: 100,
    height: 44,
    marginTop: 20
  }
});