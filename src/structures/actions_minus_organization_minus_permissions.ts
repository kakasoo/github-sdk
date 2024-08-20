import { enabled_minus_repositories } from "./enabled_minus_repositories";
import { allowed_minus_actions } from "./allowed_minus_actions";
import { selected_minus_actions_minus_url } from "./selected_minus_actions_minus_url";

export type actions_minus_organization_minus_permissions = {
  enabled_repositories: enabled_minus_repositories;
  /**
   * The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`.
   */
  selected_repositories_url?: string;
  allowed_actions?: allowed_minus_actions;
  selected_actions_url?: selected_minus_actions_minus_url;
};
