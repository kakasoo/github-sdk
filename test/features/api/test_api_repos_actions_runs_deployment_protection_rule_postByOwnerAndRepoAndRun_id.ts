import api from "@kakasoo/github-sdk";
import { review_minus_custom_minus_gates_minus_comment_minus_required } from "@kakasoo/github-sdk/lib/structures/review_minus_custom_minus_gates_minus_comment_minus_required";
import { review_minus_custom_minus_gates_minus_state_minus_required } from "@kakasoo/github-sdk/lib/structures/review_minus_custom_minus_gates_minus_state_minus_required";
import typia from "typia";

export async function test_api_repos_actions_runs_deployment_protection_rule_postByOwnerAndRepoAndRun_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.actions.runs.deployment_protection_rule.postByOwnerAndRepoAndRun_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<
        | review_minus_custom_minus_gates_minus_comment_minus_required
        | review_minus_custom_minus_gates_minus_state_minus_required
      >(),
    );
  typia.assert(output);
}
