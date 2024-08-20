import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { custom_minus_property_minus_value } from "./custom_minus_property_minus_value";

/**
 * @title Custom property values updated event
 */
export type webhook_minus_custom_minus_property_minus_values_minus_updated = {
  action: "updated";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  repository: repository_minus_webhooks;
  organization: organization_minus_simple_minus_webhooks;
  sender?: simple_minus_user_minus_webhooks;
  /**
   * The new custom property values for the repository.
   */
  new_property_values: custom_minus_property_minus_value[];
  /**
   * The old custom property values for the repository.
   */
  old_property_values: custom_minus_property_minus_value[];
};
