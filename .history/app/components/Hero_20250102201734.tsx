import React, { useEffect, useState } from 'react';
import supabase from '../utils/supabaseClient';  // Adjust path if in 'utils'
import Image from 'next/image';  // Import Image from next/image

// Define types for the supabase data response (hero image path)
type HeroImageData = {
  image_path: string;
};

function Hero() {
  const [heroImage, setHeroImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroImage = async () => {
      const { data, error } = await supabase
        .from('hero')  // Table name is 'hero'
        .select('image_path')        // Only selecting 'image_path' column
        .limit(1);                   // Limiting to only one result (first row)

      if (error) {
        console.error('Error fetching hero image:', error);
      } else {
        setHeroImage(data?.[0]?.image_path || null);
      }
    };

    fetchHeroImage();
  }, [supabase]); // Including 'supabase' as a dependency

  return (
    <section id="hero">
      <div className="hero-main-container">
        {/* Text and Button Container */}
        <div className="hero-container">
          <div className="hero-text-container" data-aos="fade-up">
            <p>Bula there&apos;s</p>
            <h2>I am Akash Mishra.</h2>
            <p>A 2nd Year Student In Software Engineering.</p>
          </div>
          <a href="#contact" className="hero-button" data-aos="fade-up">
            Let&apos;s connect!
          </a>
        </div>

        {/* Image Container */}
        <div className="hero-img" data-aos="fade-up">
          {heroImage ? (
            <Image
              className="hero-image"
              src={heroImage}
              alt="Akash"
              layout="responsive"
              width={500}
              height={500}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
