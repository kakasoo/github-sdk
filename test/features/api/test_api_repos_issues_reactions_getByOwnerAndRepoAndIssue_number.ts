import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { reaction } from "@ORGANIZATION/PROJECT-api/lib/structures/reaction";
import { IApiReposIssuesReactions } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposIssuesReactions";

export async function test_api_repos_issues_reactions_getByOwnerAndRepoAndIssue_number(
  connection: api.IConnection,
) {
  const output: reaction[] =
    await api.functional.repos.issues.reactions.getByOwnerAndRepoAndIssue_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposIssuesReactions.GetQuery>(),
    );
  typia.assert(output);
}
