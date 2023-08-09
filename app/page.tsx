import Hero from "@/components/hero/Hero";
import OurWork from "@/components/our-work/OurWork";
import Partners from "@/components/partners/Partners";
import Spinner from "@/components/spinner/Spinner";
import dynamic from "next/dynamic";

const LazySection = dynamic(() => import("@/components/section/Section"), {
  loading: () => <Spinner />,
});

const LazyHistory = dynamic(() => import("@/components/history/History"), {
  loading: () => <Spinner />,
});

// const LazySection1 = dynamic(() => import("@/components/section/Section1"), {
//   loading: () => <Spinner />,
// });

const LazyTestimonials = dynamic(() => import("@/components/testimonials/Testimonials"), {
  loading: () => <Spinner />,
});

const LazyNews = dynamic(() => import("@/components/news/News"), {
  loading: () => <Spinner />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <LazySection />
      {/* // make lazy */}
      <OurWork />
      {/* <LazySection1 /> */}
      <LazyHistory />
      {/* <LazyTestimonials /> */}
      {/* <Partners /> */}
      <LazyNews />
    </>
  );
}
