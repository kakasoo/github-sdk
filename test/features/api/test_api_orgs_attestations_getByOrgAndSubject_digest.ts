import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_orgs_attestations_getByOrgAndSubject_digest(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.orgs.attestations.getByOrgAndSubject_digest(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
