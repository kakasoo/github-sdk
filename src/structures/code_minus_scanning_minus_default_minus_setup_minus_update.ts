/**
 * Configuration for code scanning default setup.
 */
export type code_minus_scanning_minus_default_minus_setup_minus_update = {
  /**
   * The desired state of code scanning default setup.
   */
  state?: "configured" | "not-configured";
  /**
   * CodeQL query suite to be used.
   */
  query_suite?: "default" | "extended";
  /**
   * CodeQL languages to be analyzed.
   */
  languages?: (
    | "c-cpp"
    | "csharp"
    | "go"
    | "java-kotlin"
    | "javascript-typescript"
    | "python"
    | "ruby"
    | "swift"
  )[];
};
