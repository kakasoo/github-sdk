import api from "@kakasoo/github-sdk";
import { minimal_minus_repository } from "@kakasoo/github-sdk/lib/structures/minimal_minus_repository";
import typia, { tags } from "typia";

export async function test_api_orgs_personal_access_tokens_repositories_getByOrgAndPat_id(
  connection: api.IConnection,
) {
  const output: minimal_minus_repository[] =
    await api.functional.orgs.personal_access_tokens.repositories.getByOrgAndPat_id(
      connection,
      typia.random<string>(),
      typia.random<number & tags.Type<"int32">>(),
    );
  typia.assert(output);
}
