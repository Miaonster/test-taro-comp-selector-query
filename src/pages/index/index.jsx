import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.css'

export default class Index extends Component {
  componentDidMount() {
    Taro.nextTick(() => {
      Taro.createSelectorQuery().select('.shallow').boundingClientRect(res => {
        console.log(res)
      }).exec()
      Taro.createSelectorQuery().select('.deep').boundingClientRect(res => {
        console.log(res)
      }).exec()
    })
  }

  render () {
    return (
      <View className='index'>
        <View className='shallow'>
          <View>
            <View>
              <View>
                <View>
                  <View>
                    <View>
                      <View>
                        <View>
                          <View>
                            <View>
                              <View>
                                <View>
                                  <View>
                                    <View>
                                      <View className='deep'>
                                        haha
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
