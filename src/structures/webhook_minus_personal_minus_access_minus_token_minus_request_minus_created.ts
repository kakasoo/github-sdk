import { personal_minus_access_minus_token_minus_request } from "./personal_minus_access_minus_token_minus_request";
import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";

/**
 * @title personal_access_token_request created event
 */
export type webhook_minus_personal_minus_access_minus_token_minus_request_minus_created =
  {
    action: "created";
    personal_access_token_request: personal_minus_access_minus_token_minus_request;
    enterprise?: enterprise_minus_webhooks;
    organization: organization_minus_simple_minus_webhooks;
    sender: simple_minus_user_minus_webhooks;
    installation?: simple_minus_installation;
  };