import { code_minus_security_minus_configuration } from "./code_minus_security_minus_configuration";

/**
 * Code security configuration associated with a repository and attachment status
 */
export type code_minus_security_minus_configuration_minus_for_minus_repository =
  {
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
    configuration?: code_minus_security_minus_configuration;
  };
