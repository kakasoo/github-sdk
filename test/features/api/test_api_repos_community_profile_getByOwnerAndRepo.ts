import api from "@kakasoo/github-sdk";
import { community_minus_profile } from "@kakasoo/github-sdk/lib/structures/community_minus_profile";
import typia from "typia";

export async function test_api_repos_community_profile_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: community_minus_profile =
    await api.functional.repos.community.profile.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
