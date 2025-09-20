import TransformationsSlider from "@/components/sliders/TransformationsSlider";
import Whom from "@/sections/Whom";


export default function Transformations() {
  return (
    <section className="section transformations" id="beforeAfter">
      <div className="container-wide">
        <TransformationsSlider/>
      </div>
      <Whom />
    </section>
  );
}