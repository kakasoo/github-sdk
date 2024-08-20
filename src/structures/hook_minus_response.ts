import { tags } from "typia";

/**
 * @title Hook Response
 */
export type hook_minus_response = {
  code: (number & tags.Type<"int32">) | null;
  status: string | null;
  message: string | null;
};
