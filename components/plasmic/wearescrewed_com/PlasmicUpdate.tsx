// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3hhGRWLPdvgGCLMEoJyAMR
// Component: w2qKNxx_-2
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_wearescrewed_com.module.css"; // plasmic-import: 3hhGRWLPdvgGCLMEoJyAMR/projectcss
import sty from "./PlasmicUpdate.module.css"; // plasmic-import: w2qKNxx_-2/css

export type PlasmicUpdate__VariantMembers = {};

export type PlasmicUpdate__VariantsArgs = {};
type VariantPropType = keyof PlasmicUpdate__VariantsArgs;
export const PlasmicUpdate__VariantProps = new Array<VariantPropType>();

export type PlasmicUpdate__ArgsType = {};
type ArgPropType = keyof PlasmicUpdate__ArgsType;
export const PlasmicUpdate__ArgProps = new Array<ArgPropType>();

export type PlasmicUpdate__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  h1?: p.Flex<"h1">;
};

export interface DefaultUpdateProps {}

function PlasmicUpdate__RenderFunc(props: {
  variants: PlasmicUpdate__VariantsArgs;
  args: PlasmicUpdate__ArgsType;
  overrides: PlasmicUpdate__OverridesType;

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

  return (
    <React.Fragment>
      <Head></Head>

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
          <div className={classNames(projectcss.all, sty.freeBox__haPwb)}>
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={"wearescrewed.com " as const}
              className={classNames(sty.img)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"25%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"100px" as const}
              displayWidth={"auto" as const}
              loading={"eager" as const}
              src={{
                src: "/plasmic/wearescrewed_com/images/imageedit17520095357Png.png",
                fullWidth: 1230,
                fullHeight: 121,
                aspectRatio: undefined
              }}
            />
          </div>

          <div className={classNames(projectcss.all, sty.freeBox___5Ue6I)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sh7QB
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                {
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"2.0 Release Notes:"}
                  </h1>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___16DUh
              )}
            >
              {
                "wearescrewed 2 has officially been released! It's been rebuilt from the ground up and "
              }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "h1"],
  img: ["img"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  h1: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUpdate__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUpdate__VariantsArgs;
    args?: PlasmicUpdate__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUpdate__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUpdate__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicUpdate__ArgProps,
          internalVariantPropNames: PlasmicUpdate__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicUpdate__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUpdate";
  } else {
    func.displayName = `PlasmicUpdate.${nodeName}`;
  }
  return func;
}

export const PlasmicUpdate = Object.assign(
  // Top-level PlasmicUpdate renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicUpdate
    internalVariantProps: PlasmicUpdate__VariantProps,
    internalArgProps: PlasmicUpdate__ArgProps
  }
);

export default PlasmicUpdate;
/* prettier-ignore-end */
