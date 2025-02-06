import Modal from '@/components/Modal';
import CompanyMarquee from '@/components/CompanyMarquee';
import Courses from '@/components/Courses';
import Feature from '@/components/Feature';
import HeroSection from '@/components/Hero';
import PhotoGallery from '@/components/Students';
import FAQComponent from '@/components/faq';
import Team from '@/components/team';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen gap-24">
      <HeroSection />
      <CompanyMarquee />
      <Feature/>
      <Courses/>
      <PhotoGallery/>
      <Team/>
      <FAQComponent/>
      <Modal/>
    </div>
  );
};

export default LandingPage;
