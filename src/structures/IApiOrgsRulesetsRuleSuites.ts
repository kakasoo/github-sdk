import { tags } from "typia";

export namespace IApiOrgsRulesetsRuleSuites {
  export type GetHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the rule suite result.
     * To get this ID, you can use [GET /repos/{owner}/{repo}/rulesets/rule-suites](https://docs.github.com/rest/repos/rule-suites#list-repository-rule-suites)
     * for repositories and [GET /orgs/{org}/rulesets/rule-suites](https://docs.github.com/rest/orgs/rule-suites#list-organization-rule-suites)
     * for organizations.
     */
    rule_suite_id: number & tags.Type<"int32">;
  };
}
