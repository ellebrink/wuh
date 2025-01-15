"use client";
import TextRotate from "@/components/fancy/text-rotate";
import Typewriter from "@/components/fancy/typewriter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, LayoutGroup } from "motion/react";
import { useTheme } from "next-themes";
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
              <Badge>Wuh</Badge>
            </span>
            <span> Konsultbolaget som betalar till konsulten </span>
          </Badge>

          <div className="max-w-screen-md text-left text-4xl md:text-6xl font-bold">
            <h1>
              Ett jobb 💼 ska{" "}
              <Typewriter
                text={[
                  "ge dig frihet att arbeta varifrån du vill.",
                  "lämna dig ifred samma sekund du checkar ut.",
                  "vara roligt. Och ge dig galet bra lön 💸, framför allt!",
                  "inte ge dig ångest på söndagar.",
                  "vara flexibelt.",
                  "inte tvinga med dig på stela firmafester med din tråkiga chef.",
                  "vara ett jobb.",
                  "💸💸💸",
                ]}
                speed={40}
                className="text-primary"
                waitTime={2000}
                deleteSpeed={20}
                cursorChar={"_"}
              />
            </h1>
          </div>

          {/* <div className="w-full h-full text-2xl sm:text-3xl md:text-5xl flex flex-row items-center justify-center font-light overflow-hidden p-12 sm:p-20 md:p-24">
            <LayoutGroup>
              <motion.p className="flex whitespace-pre" layout>
                <motion.span
                  className="pt-0.5 sm:pt-1 md:pt-2"
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                  Ett jobb 💼 ska{" "}
                </motion.span>
                <TextRotate
                  texts={[
                    "ge schysst lön.",
                    "vara transparent.",
                    "inte ge ångest.",
                    "vara flexibelt.",
                    "vara ett jobb.",
                    "💸💸💸",
                  ]}
                  mainClassName="text-white px-2 sm:px-2 md:px-3 bg-primary overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                  splitBy="lines"
                />
              </motion.p>
            </LayoutGroup>
          </div> */}

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Att arbeta för Wuh är som att driva eget minus allt det tråkiga. Vi
            ger dig mer lön, mer förmåner, och mer frihet. Du får jobba med
            schyssta kunder på alldeles egna villkor.
            <br />
            <br />
            Vad är haken? Det finns ingen. Vi tar pengarna som traditionella
            konsultbolag lägger på kontor och firmafester och istället ger dem
            till dig.
            <br />
            <br />
            Vi tror innerligt att vårt sätt att arbeta på är framtiden.
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
