import { tags } from "typia";

/**
 * Language
 *
 * @title Language
 */
export type language = {
  [key: string]: number & tags.Type<"int32">;
};
