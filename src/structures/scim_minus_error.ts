import { tags } from "typia";

/**
 * Scim Error
 *
 * @title Scim Error
 */
export type scim_minus_error = {
  message?: string | null;
  documentation_url?: string | null;
  detail?: string | null;
  status?: number & tags.Type<"int32">;
  scimType?: string | null;
  schemas?: string[];
};
