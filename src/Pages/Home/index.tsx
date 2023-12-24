import PrimarySearchAppBar from "./components/appBar/appBar";
import SliderCarrousel from "./components/sliderCarrousel/sliderCarrousel";
import GridProducts from "./components/gridProducts/gridProducts";


export default function Home() {
  return (
    <>
      <PrimarySearchAppBar />
      <SliderCarrousel />
      <GridProducts />
    </>
  );
}
