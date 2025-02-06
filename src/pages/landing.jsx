import Modal from '@/components/Modal';
import CompanyMarquee from '@/components/CompanyMarquee';
import Courses from '@/components/Courses';
import Feature from '@/components/Feature';
import HeroSection from '@/components/Hero';
import PhotoGallery from '@/components/Students';
import FAQComponent from '@/components/faq';
import Team from '@/components/team';
import React from 'react';
import Benefits from '@/components/Benefits';
import BatchReviews from '@/components/BatchVideo';

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen gap-24">
      <HeroSection />
      <CompanyMarquee />
      <Feature/>
      <Benefits/>
      <Courses/>
      <PhotoGallery/>
      <BatchReviews/>
      <Team/>
      <FAQComponent/>

    </div>
  );
};

export default LandingPage;
