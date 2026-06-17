import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import JobsTicker        from './components/JobsTicker'
import About             from './components/About'
import JobCategories     from './components/JobCategories'
import Countries         from './components/Countries'
import HowItWorks        from './components/HowItWorks'
import Testimonials      from './components/Testimonials'
import EmployerSection   from './components/EmployerSection'
import RegisterForm      from './components/RegisterForm'
import Footer            from './components/Footer'
import FloatingButtons   from './components/FloatingButtons'
import ChatBot           from './components/ChatBot'
import SocialProofPopup  from './components/SocialProofPopup'
import LoadingScreen     from './components/LoadingScreen'

export default function App() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <div id="jobs-ticker">
          <JobsTicker />
        </div>
        <About />
        <JobCategories />
        <Countries />
        <HowItWorks />
        <Testimonials />
        <EmployerSection />
        <RegisterForm />
      </main>
      <Footer />
      <FloatingButtons />
      <ChatBot />
      <SocialProofPopup />
    </>
  )
}
