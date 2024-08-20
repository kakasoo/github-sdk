import { simple_minus_repository } from "./simple_minus_repository";

/**
 * Repositories associated with a code security configuration and attachment status
 */
export type code_minus_security_minus_configuration_minus_repositories = {
  /**
   * The attachment status of the code security configuration on the repository.
   */
  status?:
    | "attached"
    | "attaching"
    | "detached"
    | "removed"
    | "enforced"
    | "failed"
    | "updating"
    | "removed_by_enterprise";
  repository?: simple_minus_repository;
};
