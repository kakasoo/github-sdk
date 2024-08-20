import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_users_packages_eraseByUsernameAndPackage_typeAndPackage_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.users.packages.eraseByUsernameAndPackage_typeAndPackage_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
