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
      className="max-w-[1636px]  h-screen max-h-[906px] px-[20px] lg:px-[56px] box-border mx-auto relative overflow-hidden
      "
    >
      <HeroHeader />

      <HeroTitle />
      <HeroFooter />
      <GetButton />
      <Sticks />
    </main>
  );
}
