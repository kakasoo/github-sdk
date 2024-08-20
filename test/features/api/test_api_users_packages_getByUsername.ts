import api from "@kakasoo/github-sdk";
import { IApiUsersPackages } from "@kakasoo/github-sdk/lib/structures/IApiUsersPackages";
import { packages } from "@kakasoo/github-sdk/lib/structures/package";
import typia from "typia";

export async function test_api_users_packages_getByUsername(
  connection: api.IConnection,
) {
  const output: packages[] = await api.functional.users.packages.getByUsername(
    connection,
    typia.random<string>(),
    typia.random<IApiUsersPackages.GetQuery>(),
  );
  typia.assert(output);
}
