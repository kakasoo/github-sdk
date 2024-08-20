import api from "@kakasoo/github-sdk";
import { IApiReposReleasesReactions } from "@kakasoo/github-sdk/lib/structures/IApiReposReleasesReactions";
import { reaction } from "@kakasoo/github-sdk/lib/structures/reaction";
import typia from "typia";

export async function test_api_repos_releases_reactions_getByOwnerAndRepoAndRelease_id(
  connection: api.IConnection,
) {
  const output: reaction[] =
    await api.functional.repos.releases.reactions.getByOwnerAndRepoAndRelease_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposReleasesReactions.GetQuery>(),
    );
  typia.assert(output);
}
