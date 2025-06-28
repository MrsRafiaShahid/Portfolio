import { useRef } from "react";

const TimelineItem = ({ item, index }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div className="timeline-card relative pl-10 group">
      <div className="absolute left-[-1.25rem] top-4 w-10 h-10 bg-white rounded-full border-4 border-[#00cea8] flex items-center justify-center overflow-hidden z-10">
        <img src={item.icon} alt="icon" className="w-6 h-6 object-contain" />
      </div>

      <div
        ref={(el) => (cardRefs.current[index] = el)}
        onMouseMove={handleMouseMove(index)}
        className="card card-border rounded-xl p-8 text-secondary shadow-xl"
      >
        <div className="glow"/>

        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-white">{item.title}</h1>
          <p className="italic text-[#839CB5]">Responsibilities</p>
          <ul className="list-disc ms-5 mt-2 flex flex-col gap-2 text-white-50">
            {(item.points || []).map((point, idx) => (
              <li key={`point-${idx}`} className="text-sm tracking-wide">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
