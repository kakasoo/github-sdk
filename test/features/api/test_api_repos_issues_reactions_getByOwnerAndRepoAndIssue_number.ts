import api from "@kakasoo/github-sdk";
import { IApiReposIssuesReactions } from "@kakasoo/github-sdk/lib/structures/IApiReposIssuesReactions";
import { reaction } from "@kakasoo/github-sdk/lib/structures/reaction";
import typia from "typia";

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
