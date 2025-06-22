import SliderPng from "../assets/slider-p1.png";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

function Slider({ className }) {
  return (
    <Carousel className={className}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="text-light-text-color relative flex h-[753px] flex-col items-center justify-center gap-12 px-13 text-center lg:items-start lg:pl-58 lg:text-left">
              <div className="absolute top-0 left-0 z-[-1] h-full w-full bg-[url('assets/slider-p1.png')] bg-cover bg-center"></div>
              <div className="h5">SUMMER 2020</div>
              <div className="h2 lg:h1">NEW COLLECTION</div>
              <div className="h4 text-primary-foreground lg:max-w-[369px]">
                We know how large objects will act, but things on a small scale.
              </div>
              <Button
                variant={"success"}
                size={"lg"}
                className="h3 bg-success-color text-light-text-color rounded-b-none"
              >
                SHOP NOW
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant="ghost"
        className="hover:bg-accent/60 left-1 size-10"
      />
      <CarouselNext
        variant="ghost"
        className="hover:bg-accent/60 right-1 size-10"
      />
    </Carousel>
  );
}
export default Slider;
