import Testimonials from '@/components/FeedbackSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import NavbarComponent from '@/components/Navbar';
import ShowCaseSection from '@/components/ShowcaseSection';

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavbarComponent mode="home" />
      <HeroSection />
      <ShowCaseSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
