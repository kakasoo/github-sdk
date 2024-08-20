import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { full_minus_repository } from "./full_minus_repository";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { security_minus_and_minus_analysis } from "./security_minus_and_minus_analysis";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title security_and_analysis event
 */
export type webhook_minus_security_minus_and_minus_analysis = {
  changes: {
    from?: {
      security_and_analysis?: security_minus_and_minus_analysis;
    };
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: full_minus_repository;
  sender?: simple_minus_user_minus_webhooks;
};
