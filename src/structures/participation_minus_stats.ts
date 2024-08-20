import { tags } from "typia";

/**
 * @title Participation Stats
 */
export type participation_minus_stats = {
  all: (number & tags.Type<"int32">)[];
  owner: (number & tags.Type<"int32">)[];
};
