import api from "@kakasoo/github-sdk";
import { IApiUserPackages } from "@kakasoo/github-sdk/lib/structures/IApiUserPackages";
import { packages } from "@kakasoo/github-sdk/lib/structures/package";
import typia from "typia";

export async function test_api_user_packages_get(connection: api.IConnection) {
  const output: packages[] = await api.functional.user.packages.get(
    connection,
    typia.random<IApiUserPackages.GetQuery>(),
  );
  typia.assert(output);
}
