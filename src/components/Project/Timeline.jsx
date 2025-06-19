import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineItem from "./TimelineItem";

gsap.registerPlugin(ScrollTrigger);

const Timeline = ({ items = [] }) => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        y: 30,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
    });
    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to(".timeline-line", {
        // scaleY:0,
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "bottom bottom",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to(".timeline-line", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
  }, []);

  return (
    <section id="experience" className="section-padding mt-10 px-5 xl:px-0">
      <div className="w-full max-w-6xl mx-auto relative min-h-screen">
        {/* Vertical Line from top to bottom */}
        <div className="timeline-line absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-700 origin-top scale-y-100 z-0" />

        {/* Cards */}
        <div className="flex flex-col gap-20 relative z-10 pt-10 pb-20">
          {items.map((item, index) => (
            <TimelineItem key={item.title || index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
