import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { projects_minus_v2 } from "./projects_minus_v2";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title Projects v2 Project Edited Event
 */
export type webhook_minus_projects_minus_v2_minus_project_minus_edited = {
  action: "edited";
  changes: {
    description?: {
      from?: string | null;
      to?: string | null;
    };
    public?: {
      from?: boolean;
      to?: boolean;
    };
    short_description?: {
      from?: string | null;
      to?: string | null;
    };
    title?: {
      from?: string;
      to?: string;
    };
  };
  installation?: simple_minus_installation;
  organization: organization_minus_simple_minus_webhooks;
  projects_v2: projects_minus_v2;
  sender: simple_minus_user_minus_webhooks;
};
