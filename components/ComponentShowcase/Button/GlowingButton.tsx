import GlowButton from '@/components/CustomComponent/Button/GlowingButton';

export default function GlowButtonShowcase() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <GlowButton
        glowFromColor="230, 50%, 50%"
        glowToColor="280, 70%, 60%"
        height="90px"
        width="300px"
      >
        Glowing Button
      </GlowButton>
    </div>
  );
}
