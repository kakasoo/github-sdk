import { actions_minus_enabled } from "./actions_minus_enabled";
import { allowed_minus_actions } from "./allowed_minus_actions";
import { selected_minus_actions_minus_url } from "./selected_minus_actions_minus_url";

export type actions_minus_repository_minus_permissions = {
  enabled: actions_minus_enabled;
  allowed_actions?: allowed_minus_actions;
  selected_actions_url?: selected_minus_actions_minus_url;
};
