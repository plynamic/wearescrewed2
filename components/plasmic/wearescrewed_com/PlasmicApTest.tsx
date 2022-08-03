// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3hhGRWLPdvgGCLMEoJyAMR
// Component: -oO_1wtpEQ
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
import Button from "../../Button"; // plasmic-import: vCsmFDPh-Q_/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: PKldDYkH42/codeComponent

import { useScreenVariants as useScreenVariants_6EdLyFs6Xvmxe } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 6EDLyFs6Xvmxe/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_wearescrewed_com.module.css"; // plasmic-import: 3hhGRWLPdvgGCLMEoJyAMR/projectcss
import sty from "./PlasmicApTest.module.css"; // plasmic-import: -oO_1wtpEQ/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: VCWKZ9t0Yc9/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: ZGoBIb9AIsM/icon

export type PlasmicApTest__VariantMembers = {};

export type PlasmicApTest__VariantsArgs = {};
type VariantPropType = keyof PlasmicApTest__VariantsArgs;
export const PlasmicApTest__VariantProps = new Array<VariantPropType>();

export type PlasmicApTest__ArgsType = {};
type ArgPropType = keyof PlasmicApTest__ArgsType;
export const PlasmicApTest__ArgProps = new Array<ArgPropType>();

export type PlasmicApTest__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  wearescrewedLogo?: p.Flex<typeof p.PlasmicImg>;
  navigation?: p.Flex<"div">;
  musicDesktop?: p.Flex<typeof Embed>;
  columns?: p.Flex<"div">;
  apcalc?: p.Flex<"div">;
  apcalcCount?: p.Flex<typeof Embed>;
  apush?: p.Flex<"div">;
  apushCount?: p.Flex<typeof Embed>;
};

export interface DefaultApTestProps {}

function PlasmicApTest__RenderFunc(props: {
  variants: PlasmicApTest__VariantsArgs;
  args: PlasmicApTest__ArgsType;
  overrides: PlasmicApTest__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_6EdLyFs6Xvmxe()
  });

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <p.PlasmicImg
              data-plasmic-name={"wearescrewedLogo"}
              data-plasmic-override={overrides.wearescrewedLogo}
              alt={"wearescrewed.com " as const}
              className={classNames(sty.wearescrewedLogo)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={
                hasVariant(globalVariants, "screen", "mobile")
                  ? ("80%" as const)
                  : hasVariant(globalVariants, "screen", "tablet")
                  ? ("50%" as const)
                  : ("25%" as const)
              }
              displayMinHeight={"0" as const}
              displayMinWidth={"100px" as const}
              displayWidth={"auto" as const}
              loading={"eager" as const}
              onClick={"" as const}
              src={{
                src: "/plasmic/wearescrewed_com/images/imageedit17520095357Png.png",
                fullWidth: 1230,
                fullHeight: 121,
                aspectRatio: undefined
              }}
              title={"" as const}
            />

            <div
              data-plasmic-name={"navigation"}
              data-plasmic-override={overrides.navigation}
              className={classNames(projectcss.all, sty.navigation)}
            >
              <Button
                className={classNames("__wab_instance", sty.button__bptIx)}
                color={"softBlue" as const}
                link={"/testy" as const}
                shape={"rounded" as const}
                size={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? undefined
                    : ("compact" as const)
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___0Ek9F
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Finals"
                    : "Finals"}
                </div>
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button___4FQn5)}
                color={"green" as const}
                link={"/aptesty" as const}
                shape={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? ("rounded" as const)
                    : ("rounded" as const)
                }
                size={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? undefined
                    : ("compact" as const)
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__aKcw0
                  )}
                >
                  {"AP Exams"}
                </div>
              </Button>
            </div>

            {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
              <Embed
                data-plasmic-name={"musicDesktop"}
                data-plasmic-override={overrides.musicDesktop}
                className={classNames("__wab_instance", sty.musicDesktop)}
                code={
                  '<style>\r\naudio{\r\nwidth: 100px !important;\r\n}\r\naudio::-webkit-media-controls-play-button{\r\nbackground-color:#64e8c7 !important;\r\n}\r\naudio::-webkit-media-controls-panel{\r\nbackground-color:#64e8c7 !important;\r\n}\r\naudio::-webkit-media-controls-current-time-display{\r\ndisplay:none !important;\r\n}\r\naudio::-webkit-media-controls-current-time-display{\r\ndisplay:none !important;\r\n}\r\naudio::-webkit-media-controls-time-remaining-display{\r\ndisplay:none !important;\r\n}\r\naudio::-webkit-media-controls-timeline{\r\ndisplay:none !important;\r\n}\r\naudio::-webkit-media-controls-mute-button{\r\ndisplay:none !important;\r\n}\r\n</style>\r\n\r\n<audio controls>\r\n<source src="https://firebasestorage.googleapis.com/v0/b/musichost-b3aa9.appspot.com/o/Extended%20wearescrewed1-3.mp3?alt=media&token=da0122a6-6489-40bb-b4ed-d20285e0f621" type="audio/mp3">\r\nSo sorry for this issue. But your browser does not support this audio.\r\n</audio>' as const
                }
              />
            ) : null}
          </div>

          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div
              data-plasmic-name={"apcalc"}
              data-plasmic-override={overrides.apcalc}
              className={classNames(projectcss.all, sty.apcalc)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cNw0F
                )}
              >
                {"AP Calculus AB Exam"}
              </div>

              <Embed
                data-plasmic-name={"apcalcCount"}
                data-plasmic-override={overrides.apcalcCount}
                className={classNames("__wab_instance", sty.apcalcCount)}
                code={
                  '<script src="https://cdn.logwork.com/widget/countdown.js"></script>\r\n<a href="https://logwork.com/countdown-7974" class="countdown-timer" data-timezone="America/Chicago" data-textcolor="#dedede" data-date="2023-05-08 08:00" data-background="#dedede" data-digitscolor="#1a1a1a" data-unitscolor="#dedede">⠀</a>' as const
                }
              />
            </div>

            <div
              data-plasmic-name={"apush"}
              data-plasmic-override={overrides.apush}
              className={classNames(projectcss.all, sty.apush)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7ZOXm
                )}
              >
                {"AP US History Exam"}
              </div>

              <Embed
                data-plasmic-name={"apushCount"}
                data-plasmic-override={overrides.apushCount}
                className={classNames("__wab_instance", sty.apushCount)}
                code={
                  '<script class="45b35c055f474f6ece43d5ef94cdfd1d" src="https://w.promofeatures.com/js/timer/45b35c055f474f6ece43d5ef94cdfd1d.js?v=1659471002"></script>' as const
                }
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "wearescrewedLogo",
    "navigation",
    "musicDesktop",
    "columns",
    "apcalc",
    "apcalcCount",
    "apush",
    "apushCount"
  ],
  freeBox: ["freeBox", "wearescrewedLogo", "navigation", "musicDesktop"],
  wearescrewedLogo: ["wearescrewedLogo"],
  navigation: ["navigation"],
  musicDesktop: ["musicDesktop"],
  columns: ["columns", "apcalc", "apcalcCount", "apush", "apushCount"],
  apcalc: ["apcalc", "apcalcCount"],
  apcalcCount: ["apcalcCount"],
  apush: ["apush", "apushCount"],
  apushCount: ["apushCount"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  wearescrewedLogo: typeof p.PlasmicImg;
  navigation: "div";
  musicDesktop: typeof Embed;
  columns: "div";
  apcalc: "div";
  apcalcCount: typeof Embed;
  apush: "div";
  apushCount: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicApTest__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicApTest__VariantsArgs;
    args?: PlasmicApTest__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicApTest__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicApTest__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicApTest__ArgProps,
          internalVariantPropNames: PlasmicApTest__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicApTest__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicApTest";
  } else {
    func.displayName = `PlasmicApTest.${nodeName}`;
  }
  return func;
}

export const PlasmicApTest = Object.assign(
  // Top-level PlasmicApTest renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    wearescrewedLogo: makeNodeComponent("wearescrewedLogo"),
    navigation: makeNodeComponent("navigation"),
    musicDesktop: makeNodeComponent("musicDesktop"),
    columns: makeNodeComponent("columns"),
    apcalc: makeNodeComponent("apcalc"),
    apcalcCount: makeNodeComponent("apcalcCount"),
    apush: makeNodeComponent("apush"),
    apushCount: makeNodeComponent("apushCount"),

    // Metadata about props expected for PlasmicApTest
    internalVariantProps: PlasmicApTest__VariantProps,
    internalArgProps: PlasmicApTest__ArgProps
  }
);

export default PlasmicApTest;
/* prettier-ignore-end */
