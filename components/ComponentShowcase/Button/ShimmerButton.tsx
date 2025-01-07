import ShimmerButton from '@/components/CustomComponent/Button/ShimmerButton';

export default function ShimmerButtonShowcase() {
  return (
    <div className="bg-gradient-radial from-[rgb(67,54,74)] via-[rgb(47,48,67)] to-[rgb(27,23,36)] flex items-center justify-center p-8">
      <ShimmerButton initialEffect="wave" />
    </div>
  );
}
