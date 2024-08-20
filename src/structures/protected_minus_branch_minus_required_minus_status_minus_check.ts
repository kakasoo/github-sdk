import { tags } from "typia";

/**
 * Protected Branch Required Status Check
 *
 * @title Protected Branch Required Status Check
 */
export type protected_minus_branch_minus_required_minus_status_minus_check = {
  url?: string;
  enforcement_level?: string;
  contexts: string[];
  checks: {
    context: string;
    app_id: (number & tags.Type<"int32">) | null;
  }[];
  contexts_url?: string;
  strict?: boolean;
};
