import Aside from "./Aside";
import Section from "./Section";

export default function Main1() {
  return (
    <div className="border border-black text-white bg-[#008B8B] text-[22px] flex flex-row flex-nowrap justify-center items-center h-[300px]">
      <Section></Section>
      <Aside></Aside>
    </div>
  );
}
