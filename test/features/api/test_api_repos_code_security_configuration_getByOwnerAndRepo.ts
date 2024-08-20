import api from "@kakasoo/github-sdk";
import { code_minus_security_minus_configuration_minus_for_minus_repository } from "@kakasoo/github-sdk/lib/structures/code_minus_security_minus_configuration_minus_for_minus_repository";
import typia from "typia";

export async function test_api_repos_code_security_configuration_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: code_minus_security_minus_configuration_minus_for_minus_repository =
    await api.functional.repos.code_security_configuration.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
