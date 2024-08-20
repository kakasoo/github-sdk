import { check_minus_run_minus_with_minus_simple_minus_check_minus_suite } from "./check_minus_run_minus_with_minus_simple_minus_check_minus_suite";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title Check Run Completed Event
 */
export type webhook_minus_check_minus_run_minus_completed = {
  action?: "completed";
  check_run: check_minus_run_minus_with_minus_simple_minus_check_minus_suite;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
