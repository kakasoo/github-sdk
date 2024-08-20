import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_orgs_personal_access_tokens_postByOrgAndPat_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.personal_access_tokens.postByOrgAndPat_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
