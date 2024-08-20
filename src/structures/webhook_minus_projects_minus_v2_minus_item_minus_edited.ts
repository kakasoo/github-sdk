import { tags } from "typia";

import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { projects_minus_v2_minus_item } from "./projects_minus_v2_minus_item";
import { projects_minus_v2_minus_iteration_minus_setting } from "./projects_minus_v2_minus_iteration_minus_setting";
import { projects_minus_v2_minus_single_minus_select_minus_option } from "./projects_minus_v2_minus_single_minus_select_minus_option";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title Projects v2 Item Edited Event
 */
export type webhook_minus_projects_minus_v2_minus_item_minus_edited = {
  action: "edited";
  /**
   * The changes made to the item may involve modifications in the item's fields and draft issue body.
   * It includes altered values for text, number, date, single select, and iteration fields, along with the GraphQL node ID of the changed field.
   */
  changes?:
    | {
        field_value: {
          field_node_id?: string;
          field_type?: string;
          field_name?: string;
          project_number?: number & tags.Type<"int32">;
          from?:
            | string
            | (number & tags.Type<"int32">)
            | projects_minus_v2_minus_single_minus_select_minus_option
            | projects_minus_v2_minus_iteration_minus_setting
            | null;
          to?:
            | string
            | (number & tags.Type<"int32">)
            | projects_minus_v2_minus_single_minus_select_minus_option
            | projects_minus_v2_minus_iteration_minus_setting
            | null;
        };
      }
    | {
        body: {
          from?: string | null;
          to?: string | null;
        };
      };
  installation?: simple_minus_installation;
  organization: organization_minus_simple_minus_webhooks;
  projects_v2_item: projects_minus_v2_minus_item;
  sender: simple_minus_user_minus_webhooks;
};
