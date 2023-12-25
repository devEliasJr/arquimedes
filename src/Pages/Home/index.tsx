import PrimarySearchAppBar from "./components/appBar/appBar";
import SliderCarrousel from "./components/sliderCarrousel/sliderCarrousel";
import GridProducts from "./components/gridProducts/gridProducts";
import Footer from "./components/footer/footer";


export default function Home() {
  return (
    <>
      <PrimarySearchAppBar />
      <SliderCarrousel />
      <GridProducts />
      <Footer />
    </>
  );
}
