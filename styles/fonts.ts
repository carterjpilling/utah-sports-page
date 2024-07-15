import { UnifrakturMaguntia, Merriweather, Lora, Open_Sans } from 'next/font/google'

const unifrakturMaguntia = UnifrakturMaguntia({
  subsets: ['latin'],
  weight: '400'
})

const merriWeather = Merriweather({
  subsets: ['latin'],
  weight: '700'
})

const loraBold = Lora({
  subsets: ['latin'],
  weight: '700'
})


const loraLight = Lora({
  subsets: ['latin'],
  weight: '400'
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '300',
  // style: 'italic',
})


export { unifrakturMaguntia, merriWeather, loraLight, loraBold, openSans };