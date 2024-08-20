import { tags } from "typia";

/**
 * A public SSH key used to sign Git commits
 *
 * @title SSH Signing Key
 */
export type ssh_minus_signing_minus_key = {
  key: string;
  id: number & tags.Type<"int32">;
  title: string;
  created_at: string & tags.Format<"date-time">;
};
