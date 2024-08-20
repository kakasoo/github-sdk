import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { reaction } from "@ORGANIZATION/PROJECT-api/lib/structures/reaction";
import { IApiReposIssuesCommentsReactions } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposIssuesCommentsReactions";

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
