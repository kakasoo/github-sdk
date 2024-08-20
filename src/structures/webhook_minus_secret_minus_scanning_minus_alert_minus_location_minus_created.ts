import { secret_minus_scanning_minus_alert_minus_webhook } from "./secret_minus_scanning_minus_alert_minus_webhook";
import { simple_minus_installation } from "./simple_minus_installation";
import { secret_minus_scanning_minus_location } from "./secret_minus_scanning_minus_location";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title Secret Scanning Alert Location Created Event
 */
export type webhook_minus_secret_minus_scanning_minus_alert_minus_location_minus_created =
  {
    action?: "created";
    alert: secret_minus_scanning_minus_alert_minus_webhook;
    installation?: simple_minus_installation;
    location: secret_minus_scanning_minus_location;
    organization?: organization_minus_simple_minus_webhooks;
    repository: repository_minus_webhooks;
    sender: simple_minus_user_minus_webhooks;
  };
