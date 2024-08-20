import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { reaction } from "@ORGANIZATION/PROJECT-api/lib/structures/reaction";
import { IApiReposCommentsReactions } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposCommentsReactions";

export async function test_api_repos_comments_reactions_getByOwnerAndRepoAndComment_id(
  connection: api.IConnection,
) {
  const output: reaction[] =
    await api.functional.repos.comments.reactions.getByOwnerAndRepoAndComment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposCommentsReactions.GetQuery>(),
    );
  typia.assert(output);
}
