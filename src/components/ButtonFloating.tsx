import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { useState } from 'react'
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence
} from 'react-native-reanimated'

export function ButtonFloating() {
  const [toggleButtonFloating, setToggleButtonFloating] =
    useState<boolean>(false)
  const duration = 2000
  const easing = Easing.bezier(0.25, -0.5, 0.25, 1)

  const rotationAnimation = useSharedValue<number>(0)

  rotationAnimation.value = withRepeat(
    withSequence(
      withTiming(59, { duration: 150 }),
      withTiming(20, { duration: 150 })
    ),
    4
    // 4 // Run the animation 4 times
  )

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }]
  }))

  const handleButtonFloating = () => {
    //

    rotationAnimation.value = withRepeat(
      withTiming(29, { duration, easing }),
      -1
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonFloating}
        onPress={handleButtonFloating}
      >
        <Animated.View style={animatedStyle}>
          <Entypo name='plus' size={24} color='black' />
          {/* Como hacer la rotación del botón aquí un tutorial */}
          {/* https://docs.swmansion.com/react-native-reanimated/docs/animations/withRepeat */}
          {/* Video tutorial de animaciones: https://www.youtube.com/watch?v=AC6ogTHoX4M */}
          {/* Bonito efecto de listado algo así como view transition:  https://www.youtube.com/watch?v=8hW5Dnuu99Q */}
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonFloating: {
    backgroundColor: 'deepskyblue',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30
  }
})
