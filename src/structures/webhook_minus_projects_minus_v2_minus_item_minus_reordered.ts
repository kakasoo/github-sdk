import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { projects_minus_v2_minus_item } from "./projects_minus_v2_minus_item";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title Projects v2 Item Reordered Event
 */
export type webhook_minus_projects_minus_v2_minus_item_minus_reordered = {
  action: "reordered";
  changes: {
    previous_projects_v2_item_node_id?: {
      from?: string | null;
      to?: string | null;
    };
  };
  installation?: simple_minus_installation;
  organization: organization_minus_simple_minus_webhooks;
  projects_v2_item: projects_minus_v2_minus_item;
  sender: simple_minus_user_minus_webhooks;
};