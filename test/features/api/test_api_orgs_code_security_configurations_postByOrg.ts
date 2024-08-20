import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { code_minus_security_minus_configuration } from "@kakasoo/github-sdk/lib/structures/code_minus_security_minus_configuration";
import typia from "typia";

export async function test_api_orgs_code_security_configurations_postByOrg(
  connection: api.IConnection,
) {
  const output: code_minus_security_minus_configuration =
    await api.functional.orgs.code_security.configurations.postByOrg(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
