import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineItem from "./TimelineItem";

gsap.registerPlugin(ScrollTrigger);

const Timeline = ({ items = [] }) => {
  useGSAP(() => {
    // Animate each card in individually
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        xPercent: -100,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Animate timeline line scaleY as scroll progress
    gsap.set(".timeline-line", { scaleY: 0, transformOrigin: "top center" });

    ScrollTrigger.create({
      trigger: ".timeline",
      start: "top center",
      end: "bottom center",
      transformOrigin: "top bottom",
      scrub: true, // makes animation sync with scroll
      onUpdate: (self) => {
        gsap.to(".timeline-line", {
          scaleY: self.progress,
          ease: "power1.out",
          overwrite: "auto",
        });
      },
    });
  }, []);

  return (
    <section id="experience" className="section-padding mt-10 px-5 xl:px-0">
      <div className="w-full max-w-6xl mx-auto relative min-h-screen">
        {/* Vertical Line from top to bottom */}
        <div className="timeline-line absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-[#00cea8] to-[#bb61f7] origin-top scale-y-100 z-0" />

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
