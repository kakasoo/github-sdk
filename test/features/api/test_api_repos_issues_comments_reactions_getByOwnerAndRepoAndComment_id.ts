import api from "@kakasoo/github-sdk";
import { IApiReposIssuesCommentsReactions } from "@kakasoo/github-sdk/lib/structures/IApiReposIssuesCommentsReactions";
import { reaction } from "@kakasoo/github-sdk/lib/structures/reaction";
import typia from "typia";

export async function test_api_repos_issues_comments_reactions_getByOwnerAndRepoAndComment_id(
  connection: api.IConnection,
) {
  const output: reaction[] =
    await api.functional.repos.issues.comments.reactions.getByOwnerAndRepoAndComment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposIssuesCommentsReactions.GetQuery>(),
    );
  typia.assert(output);
}
