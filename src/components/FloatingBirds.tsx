import wivenLogo from '@/assets/wiven-logo.svg';

interface FloatingBird {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: string;
  rotate: string;
  delay: string;
  duration: string;
}

const birds: FloatingBird[] = [
  // Hero area - top of page
  { top: '2%', left: '10%', size: 'w-20 h-20 sm:w-28 sm:h-28', rotate: '15deg', delay: '0s', duration: '9s' },
  { top: '3%', right: '12%', size: 'w-16 h-16 sm:w-24 sm:h-24', rotate: '-20deg', delay: '1.5s', duration: '11s' },
  { top: '6%', left: '45%', size: 'w-10 h-10 sm:w-14 sm:h-14', rotate: '40deg', delay: '3s', duration: '8s' },
  { top: '5%', right: '30%', size: 'w-12 h-12 sm:w-16 sm:h-16', rotate: '-35deg', delay: '0.5s', duration: '10s' },
  { top: '8%', right: '5%', size: 'w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32', rotate: '-15deg', delay: '0s', duration: '8s' },
  { top: '10%', left: '3%', size: 'w-14 h-14 sm:w-20 sm:h-20', rotate: '25deg', delay: '2s', duration: '10s' },
  // Methodology / Checkout
  { top: '16%', right: '15%', size: 'w-18 h-18 sm:w-22 sm:h-22', rotate: '30deg', delay: '1s', duration: '9s' },
  { top: '20%', left: '8%', size: 'w-12 h-12 sm:w-18 sm:h-18', rotate: '-40deg', delay: '2.5s', duration: '12s' },
  { top: '24%', right: '3%', size: 'w-14 h-14 sm:w-18 sm:h-18', rotate: '35deg', delay: '1s', duration: '9s' },
  { top: '28%', left: '2%', size: 'w-20 h-20 sm:w-28 sm:h-28', rotate: '-25deg', delay: '3s', duration: '11s' },
  // Funnel / Affiliates
  { top: '33%', right: '10%', size: 'w-10 h-10 sm:w-14 sm:h-14', rotate: '50deg', delay: '0.5s', duration: '7s' },
  { top: '37%', left: '12%', size: 'w-16 h-16 sm:w-20 sm:h-20', rotate: '-15deg', delay: '4s', duration: '10s' },
  // Members / Dashboard
  { top: '42%', right: '6%', size: 'w-12 h-12 sm:w-16 sm:h-16', rotate: '10deg', delay: '0.5s', duration: '7s' },
  { top: '47%', left: '5%', size: 'w-18 h-18 sm:w-24 sm:h-24', rotate: '-30deg', delay: '3s', duration: '9s' },
  { top: '52%', right: '15%', size: 'w-14 h-14 sm:w-18 sm:h-18', rotate: '20deg', delay: '1.5s', duration: '11s' },
  { top: '55%', left: '4%', size: 'w-16 h-16 sm:w-24 sm:h-24', rotate: '-30deg', delay: '4s', duration: '12s' },
  // Pricing / Pix
  { top: '60%', right: '3%', size: 'w-10 h-10 sm:w-14 sm:h-14', rotate: '45deg', delay: '2s', duration: '8s' },
  { top: '65%', right: '4%', size: 'w-20 h-20 sm:w-24 sm:h-24', rotate: '45deg', delay: '2.5s', duration: '9s' },
  { top: '68%', left: '8%', size: 'w-12 h-12 sm:w-16 sm:h-16', rotate: '-50deg', delay: '0s', duration: '10s' },
  { top: '72%', left: '6%', size: 'w-10 h-10 sm:w-14 sm:h-14', rotate: '-10deg', delay: '1.5s', duration: '8s' },
  // Support / Awards
  { top: '76%', right: '12%', size: 'w-16 h-16 sm:w-22 sm:h-22', rotate: '15deg', delay: '3.5s', duration: '11s' },
  { top: '82%', right: '8%', size: 'w-14 h-14 sm:w-20 sm:h-20', rotate: '25deg', delay: '3.5s', duration: '10s' },
  { top: '85%', left: '5%', size: 'w-18 h-18 sm:w-24 sm:h-24', rotate: '-20deg', delay: '1s', duration: '9s' },
  // Community / CTA / FAQ
  { top: '90%', left: '3%', size: 'w-18 h-18 sm:w-24 sm:h-24', rotate: '-20deg', delay: '0s', duration: '11s' },
  { top: '93%', right: '6%', size: 'w-12 h-12 sm:w-16 sm:h-16', rotate: '35deg', delay: '2s', duration: '8s' },
  { top: '96%', left: '15%', size: 'w-14 h-14 sm:w-20 sm:h-20', rotate: '-25deg', delay: '4s', duration: '10s' },
];

export const FloatingBirds = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {birds.map((bird, i) => (
        <div
          key={i}
          className={`absolute ${bird.size} opacity-[0.15]`}
          style={{
            top: bird.top,
            bottom: bird.bottom,
            left: bird.left,
            right: bird.right,
            transform: `rotate(${bird.rotate})`,
            animation: `floatBird ${bird.duration} ease-in-out ${bird.delay} infinite`,
          }}
        >
          <img src={wivenLogo} alt="" className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};
