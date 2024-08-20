import { personal_minus_access_minus_token_minus_request } from "./personal_minus_access_minus_token_minus_request";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";

/**
 * @title personal_access_token_request denied event
 */
export type webhook_minus_personal_minus_access_minus_token_minus_request_minus_denied =
  {
    action: "denied";
    personal_access_token_request: personal_minus_access_minus_token_minus_request;
    organization: organization_minus_simple_minus_webhooks;
    enterprise?: enterprise_minus_webhooks;
    sender: simple_minus_user_minus_webhooks;
    installation: simple_minus_installation;
  };