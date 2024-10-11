"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-16">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Nyhet</Badge>
            </span>
            <span> Wuh växer i Åre! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            {/* <h1>
              Trött på företag som är för
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                corporate
              </span>
              ?
            </h1> */}
            <TypeAnimation
              sequence={[
                "Trött på företag som är för 'corporate'?",
                2000,
                "Är högre lön bättre än firmafester?",
                2000,
                "Värderar du frihet i arbetslivet?",
                2000,
              ]}
              wrapper="h1"
              cursor={false}
              repeat={Infinity}
              speed={50}
              deletionSpeed={70}
              // omitDeletionAnimation={true}
            />
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`We're more than just a tool, we're a community of passionate
            creators. Get access to exclusive resources, tutorials, and support.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Github respository
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          {/* <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={
              theme === "light"
                ? "/hero-image-light.jpeg"
                : "/hero-image-dark.jpeg"
            }
            alt="dashboard"
          /> */}

          <div className="relative">
            <iframe
              loading="lazy"
              title="Gumlet video player"
              height={677}
              src="https://play.gumlet.io/embed/6708e9886ef193b227ead521?preload=true&autoplay=true&loop=true&disable_player_controls=true"
              // className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary border-t-primary/30"
              className="w-full md:w-[1200px] my-0 mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary border-t-primary/30"
              // style="border:none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
              allowFullScreen={false}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;"
            />

            <h2 className="p-3 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-4xl md:text-6xl font-bold bg-black/60 text-white border-4 border-white">
              Lorem ipsum doler
            </h2>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
