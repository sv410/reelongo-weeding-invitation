import HeroParallax from '@/components/HeroParallax';
import GreenInvite from '@/components/GreenInvite';
import EventDetails from '@/components/EventDetails';
import BottomSections from '@/components/BottomSections';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden bg-[#faf8ec]">
      <HeroParallax />
      <GreenInvite />
      <EventDetails />
      <BottomSections />
    </main>
  );
}
