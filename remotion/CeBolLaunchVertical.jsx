import {Audio} from "@remotion/media";
import {TransitionSeries, linearTiming} from "@remotion/transitions";
import {fade} from "@remotion/transitions/fade";
import {slide} from "@remotion/transitions/slide";
import {staticFile} from "remotion";
import {HookScene} from "./scenes/HookScene";
import {ProductScene} from "./scenes/ProductScene";
import {CollectionScene} from "./scenes/CollectionScene";
import {PackScene} from "./scenes/PackScene";
import {CtaScene} from "./scenes/CtaScene";

export const CeBolLaunchVertical = () => {
  return (
    <>
      <Audio src={staticFile("audio/cebol-launch.wav")} volume={0.72} />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={105} name="Hook">
          <HookScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 20})} />
        <TransitionSeries.Sequence durationInFrames={125} name="Product reveal">
          <ProductScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({direction: "from-right"})} timing={linearTiming({durationInFrames: 20})} />
        <TransitionSeries.Sequence durationInFrames={140} name="Collection">
          <CollectionScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({direction: "from-bottom"})} timing={linearTiming({durationInFrames: 20})} />
        <TransitionSeries.Sequence durationInFrames={125} name="Pack facts">
          <PackScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 20})} />
        <TransitionSeries.Sequence durationInFrames={145} name="Call to action">
          <CtaScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </>
  );
};
