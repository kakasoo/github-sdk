import { tags } from "typia";

/**
 * An SSH key granting access to a single repository.
 *
 * @title Deploy Key
 */
export type deploy_minus_key = {
  id: number & tags.Type<"int32">;
  key: string;
  url: string;
  title: string;
  verified: boolean;
  created_at: string;
  read_only: boolean;
  added_by?: string | null;
  last_used?: string | null;
};
