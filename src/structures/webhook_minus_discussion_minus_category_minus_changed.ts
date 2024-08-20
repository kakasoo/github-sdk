import { tags } from "typia";

import { discussion } from "./discussion";
import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title discussion category changed event
 */
export type webhook_minus_discussion_minus_category_minus_changed = {
  action: "category_changed";
  changes: {
    category: {
      from: {
        created_at: string & tags.Format<"date-time">;
        description: string;
        emoji: string;
        id: number & tags.Type<"int32">;
        is_answerable: boolean;
        name: string;
        node_id?: string;
        repository_id: number & tags.Type<"int32">;
        slug: string;
        updated_at: string;
      };
    };
  };
  discussion: discussion;
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
