import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_release } from "./webhooks_release";

/**
 * @title release edited event
 */
export type webhook_minus_release_minus_edited = {
  action: "edited";
  changes: {
    body?: {
      /**
       * The previous version of the body if the action was `edited`.
       */
      from: string;
    };
    name?: {
      /**
       * The previous version of the name if the action was `edited`.
       */
      from: string;
    };
    make_latest?: {
      /**
       * Whether this release was explicitly `edited` to be the latest.
       */
      to: boolean;
    };
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  release: webhooks_release;
  repository: repository_minus_webhooks;
  sender?: simple_minus_user_minus_webhooks;
};
