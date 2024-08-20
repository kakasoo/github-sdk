import { tags } from "typia";

/**
 * @title Marketplace Account
 */
export type marketplace_minus_account = {
  url: string & tags.Format<"uri">;
  id: number & tags.Type<"int32">;
  type: string;
  node_id?: string;
  login: string;
  email?: (string & tags.Format<"email">) | null;
  organization_billing_email?: (string & tags.Format<"email">) | null;
};
