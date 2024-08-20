import api from "@kakasoo/github-sdk";
import { check_minus_automated_minus_security_minus_fixes } from "@kakasoo/github-sdk/lib/structures/check_minus_automated_minus_security_minus_fixes";
import typia from "typia";

export async function test_api_repos_automated_security_fixes_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: check_minus_automated_minus_security_minus_fixes =
    await api.functional.repos.automated_security_fixes.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
