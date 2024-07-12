import Constants from 'expo-constants'
import { useState } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Pressable
} from 'react-native'
import { Entypo } from '@expo/vector-icons'

import { ThemedText } from '@/src/components/ThemedText'
import { ThemedView } from '@/src/components/ThemedView'
import { ButtonFloating } from '@/src/components/ButtonFloating'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated'
// ? como hacer el efecto del header
// https://docs.swmansion.com/react-native-reanimated/docs/animations/withTiming

const TAB_WIDTH = 90
const TABS = ['Todos', 'Ingresos', 'Egresos']

export default function HomeScreen() {
  const [ingress, setIngress] = useState<number>(100000)
  const offset = useSharedValue<number>(0)

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }]
  }))

  const formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  })

  const handlePress = (tab: string) => {
    const newOffset = (() => {
      switch (tab) {
        case 'Todos':
          return 0
        case 'Ingresos':
          return 100
        case 'Egresos':
          return 200
        default:
          return 0
      }
    })()

    offset.value = withTiming(newOffset)
  }
  return (
    <ThemedView style={styles.container}>
      <ThemedText type='title' style={{ textAlign: 'center' }}>
        Gastos quincena
      </ThemedText>
      <ThemedText type='defaultSemiBold'>Ingresos:</ThemedText>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          gap: 5,
          borderLeftColor: 'deepskyblue',
          borderLeftWidth: 5,
          padding: 5,
          borderRadius: 5
        }}
      >
        {/* <ThemedText type='subtitle'>3,000.00</ThemedText> */}
        <ThemedText type='subtitle'>{formatter.format(ingress)}</ThemedText>
        <ThemedText style={{ fontSize: 10 }}>MXN</ThemedText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            gap: 10
          }}
        >
          {TABS.map((tab, i) => (
            <TouchableOpacity
              key={tab}
              style={{
                borderWidth: 1,
                // padding: 5,
                borderRadius: 10,
                width: 90,
                position: 'relative'
                // overflow: 'hidden'
              }}
              onPress={() => handlePress(tab)}
            >
              {i === 0 && (
                <Animated.View
                  style={[styles.animatedBorder, animatedStyles]}
                />
              )}
              <Text
                style={{ textAlign: 'center', padding: 5, fontWeight: '500' }}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* <Animated.View style={[styles.animatedBorder, animatedStyles]} /> */}
      {/* <View>
        <View style={styles.tabs}>
          {TABS.map((tab, i) => (
            <Pressable
              key={tab}
              style={
                i !== TABS.length - 1
                  ? [styles.tab, styles.divider]
                  : styles.tab
              }
              onPress={() => handlePress(tab)}
            >
              <Text style={styles.tabLabel}>{tab}</Text>
            </Pressable>
          ))}
        </View>
        <Animated.View style={[styles.animatedBorder, animatedStyles]} />
      </View> */}
      <ButtonFloating />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    padding: 10
  },
  tabs: {
    flexDirection: 'row'
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: TAB_WIDTH
  },
  tabLabel: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  divider: {
    borderRightWidth: 1,
    borderRightColor: '#ddd'
  },
  animatedBorder: {
    height: '100%',
    width: 88,
    backgroundColor: 'deepskyblue',
    borderRadius: 9,
    position: 'absolute'
    // borderWidth: 1,
    // borderColor: 'tomato'
  }
})
