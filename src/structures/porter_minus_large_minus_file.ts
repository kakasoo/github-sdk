import { tags } from "typia";

/**
 * Porter Large File
 *
 * @title Porter Large File
 */
export type porter_minus_large_minus_file = {
  ref_name: string;
  path: string;
  oid: string;
  size: number & tags.Type<"int32">;
};
