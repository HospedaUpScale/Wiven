import wivenLogoFull from '@/assets/wiven-logo-full.svg';

type WivenLogoProps = {
  className?: string;
};

export function WivenLogo({ className = 'h-7 w-auto' }: WivenLogoProps) {
  return <img src={wivenLogoFull} alt="Wiven" className={className} />;
}
