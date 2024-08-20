import { tags } from "typia";

/**
 * The [`deploy key`](https://docs.github.com/rest/deploy-keys/deploy-keys#get-a-deploy-key) resource.
 */
export type webhooks_deploy_key = {
  added_by?: string | null;
  created_at: string;
  id: number & tags.Type<"int32">;
  key: string;
  last_used?: string | null;
  read_only: boolean;
  title: string;
  url: string & tags.Format<"uri">;
  verified: boolean;
};
