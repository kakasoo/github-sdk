import { custom_minus_property } from "./custom_minus_property";
import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title custom property updated event
 */
export type webhook_minus_custom_minus_property_minus_updated = {
  action: "updated";
  definition: custom_minus_property;
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  sender?: simple_minus_user_minus_webhooks;
};
