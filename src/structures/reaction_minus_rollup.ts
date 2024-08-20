import { tags } from "typia";

/**
 * @title Reaction Rollup
 */
export type reaction_minus_rollup = {
  url: string & tags.Format<"uri">;
  total_count: number & tags.Type<"int32">;
  "+1": number & tags.Type<"int32">;
  "-1": number & tags.Type<"int32">;
  laugh: number & tags.Type<"int32">;
  confused: number & tags.Type<"int32">;
  heart: number & tags.Type<"int32">;
  hooray: number & tags.Type<"int32">;
  eyes: number & tags.Type<"int32">;
  rocket: number & tags.Type<"int32">;
};
