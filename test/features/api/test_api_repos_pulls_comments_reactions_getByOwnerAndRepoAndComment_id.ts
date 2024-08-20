import api from "@kakasoo/github-sdk";
import { IApiReposPullsCommentsReactions } from "@kakasoo/github-sdk/lib/structures/IApiReposPullsCommentsReactions";
import { reaction } from "@kakasoo/github-sdk/lib/structures/reaction";
import typia from "typia";

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
