import {
  GetButton,
  HeroFooter,
  HeroHeader,
  HeroTitle,
  Sticks,
} from "@/components";
export default function Home() {
  return (
    <main
      className="max-w-[1636px] lg:min-h-[896px] lg:min-h-auto  h-screen max-h- [906px] px-[20px] lg:px-[56px] box-border mx-auto relative overflow-hidden
      "
    >
      {/* <video
        className="pointer-events-none fixed inset-0 h-full max-h-[906p x] w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/bg-vid.mp4"
          media="(min-width: 1024px)"
          type="video/mp4"
        />
        <source
          src="/bg-mobile.mp4"
          media="(max-width: 1023px)"
          type="video/mp4"
        />
      </video> */}
      <HeroHeader />

      <HeroTitle />
      <HeroFooter />
      <GetButton />
      <Sticks />
    </main>
  );
}
