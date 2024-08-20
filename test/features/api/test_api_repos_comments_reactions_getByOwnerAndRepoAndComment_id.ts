import api from "@kakasoo/github-sdk";
import { IApiReposCommentsReactions } from "@kakasoo/github-sdk/lib/structures/IApiReposCommentsReactions";
import { reaction } from "@kakasoo/github-sdk/lib/structures/reaction";
import typia from "typia";

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
