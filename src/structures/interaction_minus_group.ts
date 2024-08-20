/**
 * The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect.
 */
export type interaction_minus_group =
  | "existing_users"
  | "contributors_only"
  | "collaborators_only";
