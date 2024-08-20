import { tags } from "typia";

/**
 * Actor
 *
 * @title Actor
 */
export type actor = {
  id: number & tags.Type<"int32">;
  login: string;
  display_login?: string;
  gravatar_id: string | null;
  url: string & tags.Format<"uri">;
  avatar_url: string & tags.Format<"uri">;
};
