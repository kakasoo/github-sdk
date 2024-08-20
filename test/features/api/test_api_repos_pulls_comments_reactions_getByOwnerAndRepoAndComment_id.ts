import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { reaction } from "@ORGANIZATION/PROJECT-api/lib/structures/reaction";
import { IApiReposPullsCommentsReactions } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposPullsCommentsReactions";

export async function test_api_repos_pulls_comments_reactions_getByOwnerAndRepoAndComment_id(
  connection: api.IConnection,
) {
  const output: reaction[] =
    await api.functional.repos.pulls.comments.reactions.getByOwnerAndRepoAndComment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposPullsCommentsReactions.GetQuery>(),
    );
  typia.assert(output);
}
