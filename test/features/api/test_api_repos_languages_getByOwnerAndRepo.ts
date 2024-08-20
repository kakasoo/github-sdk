import api from "@kakasoo/github-sdk";
import { language } from "@kakasoo/github-sdk/lib/structures/language";
import typia from "typia";

export async function test_api_repos_languages_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: language =
    await api.functional.repos.languages.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
