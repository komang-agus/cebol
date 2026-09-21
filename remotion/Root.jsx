import {Composition, Folder} from "remotion";
import {CeBolLaunchVertical} from "./CeBolLaunchVertical";
import {HookScene} from "./scenes/HookScene";
import {ProductScene} from "./scenes/ProductScene";
import {CollectionScene} from "./scenes/CollectionScene";
import {PackScene} from "./scenes/PackScene";
import {CtaScene} from "./scenes/CtaScene";

export const RemotionRoot = () => {
  return (
    <>
      <Folder name="CeBol-Scenes">
        <Composition id="CeBol-Hook" component={HookScene} durationInFrames={105} fps={30} width={1080} height={1920} />
        <Composition id="CeBol-Product" component={ProductScene} durationInFrames={125} fps={30} width={1080} height={1920} />
        <Composition id="CeBol-Collection" component={CollectionScene} durationInFrames={140} fps={30} width={1080} height={1920} />
        <Composition id="CeBol-Pack" component={PackScene} durationInFrames={125} fps={30} width={1080} height={1920} />
        <Composition id="CeBol-CTA" component={CtaScene} durationInFrames={145} fps={30} width={1080} height={1920} />
      </Folder>
      <Composition
        id="CeBolLaunchVertical"
        component={CeBolLaunchVertical}
        durationInFrames={560}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
