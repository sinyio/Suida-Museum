import Hero from "./Hero/Hero"
import { useTranslation } from '../../hooks/useTranslation/useTranslation'

const Home = () => {
  const { text } = useTranslation('hero')

  return (
    <main>
      <Hero />
    </main>
  )
}

export default Home