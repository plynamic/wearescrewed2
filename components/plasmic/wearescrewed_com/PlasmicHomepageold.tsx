// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3hhGRWLPdvgGCLMEoJyAMR
// Component: rnRbq7zahH9
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { ParallaxWrapper } from "@plasmicpkgs/react-scroll-parallax"; // plasmic-import: bozP4lLlAZ/codeComponent
import Tilt from "@plasmicpkgs/react-parallax-tilt"; // plasmic-import: PfY466VIuq/codeComponent
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent
import Timecountdown2 from "../../Timecountdown2"; // plasmic-import: FnyG8lQBcG/component
import Button from "../../Button"; // plasmic-import: vCsmFDPh-Q_/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_wearescrewed_com.module.css"; // plasmic-import: 3hhGRWLPdvgGCLMEoJyAMR/projectcss
import sty from "./PlasmicHomepageold.module.css"; // plasmic-import: rnRbq7zahH9/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: VCWKZ9t0Yc9/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: ZGoBIb9AIsM/icon

export type PlasmicHomepageold__VariantMembers = {};

export type PlasmicHomepageold__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepageold__VariantsArgs;
export const PlasmicHomepageold__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepageold__ArgsType = {};
type ArgPropType = keyof PlasmicHomepageold__ArgsType;
export const PlasmicHomepageold__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepageold__OverridesType = {
  root?: p.Flex<"div">;
  scrollParallax?: p.Flex<typeof ParallaxWrapper>;
  titleTilt?: p.Flex<typeof Tilt>;
  titleTilt2?: p.Flex<typeof Tilt>;
  reveal?: p.Flex<typeof Reveal>;
  timecountdown2?: p.Flex<typeof Timecountdown2>;
  img?: p.Flex<typeof p.PlasmicImg>;
  button?: p.Flex<typeof Button>;
};

export interface DefaultHomepageoldProps {}

function PlasmicHomepageold__RenderFunc(props: {
  variants: PlasmicHomepageold__VariantsArgs;
  args: PlasmicHomepageold__ArgsType;
  overrides: PlasmicHomepageold__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  const [isN6452778Active, triggerN6452778ActiveProps] = useTrigger(
    "usePressed",
    {}
  );
  const triggers = {
    active_6452778: isN6452778Active
  };

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />

        <title key="title">{"wearescrewed 2"}</title>

        <meta key="og:title" property="og:title" content={"wearescrewed 2"} />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={"wearescrewed 2"}
        />

        <meta
          key="description"
          name="description"
          content={
            "wearescrewed.com *2*\ncoming soon!\nvisit for update posts!!!"
          }
        />

        <meta
          key="og:description"
          property="og:description"
          content={
            "wearescrewed.com *2*\ncoming soon!\nvisit for update posts!!!"
          }
        />

        <meta
          key="twitter:description"
          name="twitter:description"
          content={
            "wearescrewed.com *2*\ncoming soon!\nvisit for update posts!!!"
          }
        />

        <meta
          key="og:image"
          property="og:image"
          content={
            "https://site-assets.plasmic.app/d0a58f032554a239f9f02c73825aa195.png"
          }
        />

        <meta
          key="twitter:image"
          name="twitter:image"
          content={
            "https://site-assets.plasmic.app/d0a58f032554a239f9f02c73825aa195.png"
          }
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <ParallaxWrapper
            data-plasmic-name={"scrollParallax"}
            data-plasmic-override={overrides.scrollParallax}
            className={classNames("__wab_instance", sty.scrollParallax)}
            previewInEditor={true}
            speed={100 as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uA68W
              )}
            >
              {"scroll down!"}
            </div>
          </ParallaxWrapper>

          {true ? (
            <Tilt
              data-plasmic-name={"titleTilt"}
              data-plasmic-override={overrides.titleTilt}
              className={classNames("__wab_instance", sty.titleTilt)}
              glareBorderRadius={"5" as const}
              glareEnable={false}
              glareMaxOpacity={0.4 as const}
              glarePosition={"all" as const}
              glareReverse={false}
              gyroscope={true}
              tiltReverse={false}
            >
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__gho0C
                )}
              >
                {"wearescrewed.com"}
              </h1>
            </Tilt>
          ) : null}

          {true ? (
            <Tilt
              data-plasmic-name={"titleTilt2"}
              data-plasmic-override={overrides.titleTilt2}
              className={classNames("__wab_instance", sty.titleTilt2)}
              glareBorderRadius={"1" as const}
              glareEnable={false}
              gyroscope={true}
              tiltEnable={true}
              tiltReverse={false}
            >
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__noMEm
                )}
              >
                {"2\n"}
              </h1>
            </Tilt>
          ) : null}

          <Reveal
            data-plasmic-name={"reveal"}
            data-plasmic-override={overrides.reveal}
            cascade={true}
            className={classNames("__wab_instance", sty.reveal)}
            direction={"down" as const}
            effect={"bounce" as const}
            reverse={false}
            triggerOnce={true}
          >
            <Tilt
              className={classNames("__wab_instance", sty.tilt__wuhEa)}
              glareEnable={true}
              gyroscope={true}
              trackOnWindow={false}
            >
              <Timecountdown2
                data-plasmic-name={"timecountdown2"}
                data-plasmic-override={overrides.timecountdown2}
                className={classNames("__wab_instance", sty.timecountdown2)}
              />
            </Tilt>
          </Reveal>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__rVFog
            )}
          >
            {
              "wow look at that snazzy cat\ndisclaimer: that is not my cat i do not have a cat.\n\ncoming soon."
            }
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__uTBgm
            )}
          >
            <React.Fragment>
              <React.Fragment>{""}</React.Fragment>
              {
                <h5
                  className={classNames(
                    projectcss.all,
                    projectcss.h5,
                    projectcss.__wab_text,
                    sty.h5__jXbwD
                  )}
                >
                  {"update log 3 (july 21):"}
                </h5>
              }
              <React.Fragment>
                {
                  "development is going swimmingly 🐟🐠🐡\nwearescrewed 2 is looking way better than it was a week ago (and more stable)! \nmy main goal now is to get to a point of parity in terms of features as wearescrewed 1 so by launch it will have everything from wearescrewed 1. turns out tho that making a website on a codebase youve never worked with before and on something that isnt simple drag and drop (like google sites) is way easier said than done. maybe its time for our "
                }
              </React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700, color: "#2D546A" }}
              >
                {"FIRST EVER Q&A!!!!"}
              </span>
              <React.Fragment>{"\n"}</React.Fragment>
              {
                <h6
                  className={classNames(
                    projectcss.all,
                    projectcss.h6,
                    projectcss.__wab_text,
                    sty.h6___4Q2Ym
                  )}
                >
                  {"................................................"}
                </h6>
              }
              <React.Fragment>{""}</React.Fragment>
              {
                <h5
                  className={classNames(
                    projectcss.all,
                    projectcss.h5,
                    projectcss.__wab_text,
                    sty.h5__zYfqQ
                  )}
                  data-plasmic-trigger-props={[triggerN6452778ActiveProps]}
                >
                  {triggers.active_6452778 ? (
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#1BE385", fontWeight: 500 }}
                      >
                        {"Q&A sesh!!!"}
                      </span>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#FFFCFC", fontWeight: 500 }}
                      >
                        {"Q&A sesh!!!"}
                      </span>
                    </React.Fragment>
                  )}
                </h5>
              }
              <React.Fragment>{"\n"}</React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"Q:"}
              </span>
              <React.Fragment>
                {" why did u make a new website when the first one was fine?\n"}
              </React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"A:"}
              </span>
              <React.Fragment>
                {
                  " because google sites sucks ass and code embeds take a whole 5 seconds to load (unacceptable in a world where there is no time for lag)\n\n"
                }
              </React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"Q:"}
              </span>
              <React.Fragment>
                {
                  " what about google sites made you make a whole new one on a whole new codebase that you know absolutely nothing about, bringing you hours of pain and searching for solutions?\n"
                }
              </React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"A: "}
              </span>
              <React.Fragment>
                {"this one can make fancy text :D\n\n"}
              </React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"Q:"}
              </span>
              <React.Fragment>
                {" will wearescrewed2 be any better than the original?\n"}
              </React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"A:"}
              </span>
              <React.Fragment>
                {
                  " for sure!!! the new codebase for wearescrewed2 will allow for tons more features, such as "
                }
              </React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ color: "#0000008A", fontWeight: 700 }}
              >
                {"[REDACTED]"}
              </span>
              <React.Fragment>{"\n\n"}</React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"Q: "}
              </span>
              <React.Fragment>
                {
                  "many of our loyal viewers have compared the wearescrewed situation to the likes of those such as overwatch 2 and splatoon 3, why make a new entry in the series when the previous one is basically the same?\n"
                }
              </React.Fragment>
              {
                <h6
                  className={classNames(
                    projectcss.all,
                    projectcss.h6,
                    projectcss.__wab_text,
                    sty.h6__nfvxe
                  )}
                >
                  {"................................................"}
                </h6>
              }
              <React.Fragment>
                {
                  "\nunfortunately that was our last ever Q&A.\n\nin other news, wearescrewed 2 will be fully backwards-compatible with wearescrewed 1! take that sony! that means that you will be able to access wearescrewed 2 through both websites :)\nthere's a bunch more stuff that i've been working on but its all boring techy coding stuff 🤢🤢🤢\n\nanyways thats all for now. wearescrewed 2 will probably release sometime before 2099. thanks for reading."
                }
              </React.Fragment>
            </React.Fragment>
          </div>

          {true ? (
            <Tilt
              className={classNames("__wab_instance", sty.tilt__edkgV)}
              glareEnable={true}
              perspective={50 as const}
              scale={1 as const}
              tiltEnable={true}
              transitionSpeed={100 as const}
            >
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"227px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/wearescrewed_com/images/amongUsDancegif.gif",
                  fullWidth: 498,
                  fullHeight: 448,
                  aspectRatio: undefined
                }}
              />
            </Tilt>
          ) : null}

          {true ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4POhl
              )}
            >
              {"do you dare to touch the mogus?"}
            </div>
          ) : null}

          {true ? (
            <Tilt
              className={classNames("__wab_instance", sty.tilt__bxCYc)}
              glareEnable={true}
              gyroscope={true}
              trackOnWindow={false}
            >
              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
                color={"softSand" as const}
                link={"https://www.youtube.com/watch?v=LLFhKaqnWwk" as const}
                showEndIcon={true}
                showStartIcon={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__v2SGq
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <h6
                        className={classNames(
                          projectcss.all,
                          projectcss.h6,
                          projectcss.__wab_text,
                          sty.h6___2NN8H
                        )}
                      >
                        {"look at this cool button i coded"}
                      </h6>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </Button>
            </Tilt>
          ) : null}

          {true ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zMeR
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                {
                  <h5
                    className={classNames(
                      projectcss.all,
                      projectcss.h5,
                      projectcss.__wab_text,
                      sty.h5__qEzLo
                    )}
                  >
                    {"update log 1:"}
                  </h5>
                }
                <React.Fragment>
                  {"development has begun! :D\n\n"}
                </React.Fragment>
                {
                  <h5
                    className={classNames(
                      projectcss.all,
                      projectcss.h5,
                      projectcss.__wab_text,
                      sty.h5__j16Y8
                    )}
                  >
                    {"update log 2 (july 14):"}
                  </h5>
                }
                <React.Fragment>
                  {
                    "wearescrewed 2 is in active development. more details coming later. the original wearescrewed.com will continue to stay up, even after the release of wearescrewed 2. announcement coming soon! (probably)\n\nALSO i fixed the hitboxes for the wearescrewed.com 2 thingy at the top of the page because they were super janky and i made them before i knew how to use them. enjoy\n\nwoah and now the text even reacts to gyroscope!!!! how cool is that!!!!!!!! arent you guys super excited for this!!!!!!!! the future is now! \n(update 2.1: it doesnt work 😭 the future isnt now.)\n((update 2.2: omg gyro works!! its mobile only (unless your computer has a gyro?) the future IS NOW!!!))\n(((update 2.3: gyro is a mystery.)))"
                  }
                </React.Fragment>
              </React.Fragment>
            </div>
          ) : null}
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "scrollParallax",
    "titleTilt",
    "titleTilt2",
    "reveal",
    "timecountdown2",
    "img",
    "button"
  ],
  scrollParallax: ["scrollParallax"],
  titleTilt: ["titleTilt"],
  titleTilt2: ["titleTilt2"],
  reveal: ["reveal", "timecountdown2"],
  timecountdown2: ["timecountdown2"],
  img: ["img"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  scrollParallax: typeof ParallaxWrapper;
  titleTilt: typeof Tilt;
  titleTilt2: typeof Tilt;
  reveal: typeof Reveal;
  timecountdown2: typeof Timecountdown2;
  img: typeof p.PlasmicImg;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepageold__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepageold__VariantsArgs;
    args?: PlasmicHomepageold__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepageold__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepageold__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepageold__ArgProps,
          internalVariantPropNames: PlasmicHomepageold__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepageold__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepageold";
  } else {
    func.displayName = `PlasmicHomepageold.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepageold = Object.assign(
  // Top-level PlasmicHomepageold renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    scrollParallax: makeNodeComponent("scrollParallax"),
    titleTilt: makeNodeComponent("titleTilt"),
    titleTilt2: makeNodeComponent("titleTilt2"),
    reveal: makeNodeComponent("reveal"),
    timecountdown2: makeNodeComponent("timecountdown2"),
    img: makeNodeComponent("img"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicHomepageold
    internalVariantProps: PlasmicHomepageold__VariantProps,
    internalArgProps: PlasmicHomepageold__ArgProps
  }
);

export default PlasmicHomepageold;
/* prettier-ignore-end */
