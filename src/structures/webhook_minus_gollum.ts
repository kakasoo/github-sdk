import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title gollum event
 */
export type webhook_minus_gollum = {
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  /**
   * The pages that were updated.
   */
  pages: {
    /**
     * The action that was performed on the page. Can be `created` or `edited`.
     */
    action: "created" | "edited";
    /**
     * Points to the HTML wiki page.
     */
    html_url: string & tags.Format<"uri">;
    /**
     * The name of the page.
     */
    page_name: string;
    /**
     * The latest commit SHA of the page.
     */
    sha: string;
    summary: string | null;
    /**
     * The current page title.
     */
    title: string;
  }[];
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
