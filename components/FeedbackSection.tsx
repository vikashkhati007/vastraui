'use client';
import { SlSocialTwitter } from 'react-icons/sl';
import { useEffect, useRef } from 'react';

interface Testimonial {
  name: string;
  handle: string;
  avatar: string;
  message: string;
  isVerified: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: 'Alice Johnson',
    handle: '@alice_j',
    avatar: 'https://i.pravatar.cc/150?img=3',
    message: 'Fantastic library! It made integrating components a breeze.',
    isVerified: true,
  },
  {
    name: 'Bob Williams',
    handle: '@bob_w',
    avatar: 'https://i.pravatar.cc/150?img=4',
    message:
      'The performance and flexibility are unmatched. Highly recommended!',
    isVerified: true,
  },
  {
    name: 'Carol Martinez',
    handle: '@carol_m',
    avatar: 'https://i.pravatar.cc/150?img=5',
    message: "A game-changer for our project's UI development.",
    isVerified: true,
  },
  {
    name: 'David Lee',
    handle: '@david_l',
    avatar: 'https://i.pravatar.cc/150?img=6',
    message: 'Excellent documentation and support',
    isVerified: true,
  },
  {
    name: 'Eva Green',
    handle: '@eva_g',
    avatar: 'https://i.pravatar.cc/150?img=7',
    message: 'Beautifully designed components that are easy to use.',
    isVerified: true,
  },
  {
    name: 'Frank Harris',
    handle: '@frank_h',
    avatar: 'https://i.pravatar.cc/150?img=8',
    message: 'Streamlined our workflow and improved our UI consistency.',
    isVerified: true,
  },
  {
    name: 'Grace Kim',
    handle: '@grace_k',
    avatar: 'https://i.pravatar.cc/150?img=9',
    message: 'Highly customizable and integrates seamlessly with our stack.',
    isVerified: true,
  },
  {
    name: 'Henry Adams',
    handle: '@henry_a',
    avatar: 'https://i.pravatar.cc/150?img=10',
    message: 'Saved us countless hours in development. Truly invaluable.',
    isVerified: true,
  },
  {
    name: 'Isabella Brown',
    handle: '@isabella_b',
    avatar: 'https://i.pravatar.cc/150?img=11',
    message: 'The attention to detail in the components is impressive.',
    isVerified: true,
  },
  {
    name: 'Jack Davis',
    handle: '@jack_d',
    avatar: 'https://i.pravatar.cc/150?img=12',
    message: 'Reliable and efficient. Our team loves using it every day.',
    isVerified: true,
  },
  {
    name: 'Jane Doe',
    handle: '@jane_d',
    avatar: 'https://i.pravatar.cc/150?img=13',
    message: 'This library has significantly boosted our development speed!',
    isVerified: true,
  },
  {
    name: 'Mike Thompson',
    handle: '@mike_t',
    avatar: 'https://i.pravatar.cc/150?img=14',
    message: 'Exceptional quality and ease of use. Our team loves it.',
    isVerified: true,
  },
  {
    name: 'Sara Lee',
    handle: '@sara_l',
    avatar: 'https://i.pravatar.cc/150?img=15',
    message: 'A must-have for any modern web project. Highly recommended!',
    isVerified: true,
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const totalWidth = container.scrollWidth / 2;
      const animation = container.animate(
        [
          { transform: 'translateX(0)' },
          { transform: `translateX(-${totalWidth}px)` },
        ],
        {
          duration: 20000, // Adjust for speed
          iterations: Infinity,
          easing: 'linear',
        }
      );

      return () => animation.cancel();
    }
  }, []);

  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 px-4 bg-white text-black dark:bg-black dark:text-white overflow-hidden w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
          What People Are Saying
        </h2>
        <p className="text-xl md:text-2xl text-center mb-16 max-w-3xl mx-auto text-zinc-600 dark:text-zinc-400">
          Don&apos;t just take our word for it. Here&apos;s what real people are
          saying about our UI library on Twitter.
        </p>

        {/* Testimonials Scroll */}

        <div className="relative flex flex-col">
          <div ref={containerRef} className="flex space-x-8">
            {repeatedTestimonials.map((testimonial, index) => (
              <div key={index} className="relative group flex-shrink-0 w-80">
                {/* Twitter Icon */}
                <div className="absolute top-4 right-4 text-blue-400">
                  <SlSocialTwitter className="w-5 h-5" />
                </div>

                {/* Card Content */}
                <div className=" rounded-xl p-6 border bg-zinc-100 border-zinc-200 dark:bg-zinc-900/50 dark:border-zinc-800/50">
                  <div className="flex items-center gap-3 mb-4">
                    {/* Avatar */}
                    <img
                      alt=""
                      className="w-12 h-12 rounded-full"
                      src={testimonial.avatar}
                    />
                    {/* User Info */}
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">{testimonial.name}</span>
                      </div>
                      <div className="text-sm text-zinc-500">
                        {testimonial.handle}
                      </div>
                    </div>
                  </div>
                  <p className="text-black dark:text-zinc-300">
                    {testimonial.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
