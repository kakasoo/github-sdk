import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_user_packages_eraseByPackage_typeAndPackage_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.user.packages.eraseByPackage_typeAndPackage_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
