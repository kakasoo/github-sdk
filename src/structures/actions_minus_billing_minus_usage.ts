import { tags } from "typia";

export type actions_minus_billing_minus_usage = {
  /**
   * The sum of the free and paid GitHub Actions minutes used.
   */
  total_minutes_used: number & tags.Type<"int32">;
  /**
   * The total paid GitHub Actions minutes used.
   */
  total_paid_minutes_used: number & tags.Type<"int32">;
  /**
   * The amount of free GitHub Actions minutes available.
   */
  included_minutes: number & tags.Type<"int32">;
  minutes_used_breakdown: {
    /**
     * Total minutes used on Ubuntu runner machines.
     */
    UBUNTU?: number & tags.Type<"int32">;
    /**
     * Total minutes used on macOS runner machines.
     */
    MACOS?: number & tags.Type<"int32">;
    /**
     * Total minutes used on Windows runner machines.
     */
    WINDOWS?: number & tags.Type<"int32">;
    /**
     * Total minutes used on Ubuntu 4 core runner machines.
     */
    ubuntu_4_core?: number & tags.Type<"int32">;
    /**
     * Total minutes used on Ubuntu 8 core runner machines.
     */
    ubuntu_8_core?: number & tags.Type<"int32">;
    /**
     * Total minutes used on Ubuntu 16 core runner machines.
     */
    ubuntu_16_core?: number & tags.Type<"int32">;
    /**
     * Total minutes used on Ubuntu 32 core runner machines.
     */
    ubuntu_32_core?: number & tags.Type<"int32">;
    /**
     * Total minutes used on Ubuntu 64 core runner machines.
     */
    ubuntu_64_core?: number & tags.Type<"int32">;
    /**
     * Total minutes used on Windows 4 core runner machines.
     */
    windows_4_core?: number & tags.Type<"int32">;
    /**
     * Total minutes used on Windows 8 core runner machines.
     */
    windows_8_core?: number & tags.Type<"int32">;
    /**
     * Total minutes used on Windows 16 core runner machines.
     */
    windows_16_core?: number & tags.Type<"int32">;
    /**
     * Total minutes used on Windows 32 core runner machines.
     */
    windows_32_core?: number & tags.Type<"int32">;
    /**
     * Total minutes used on Windows 64 core runner machines.
     */
    windows_64_core?: number & tags.Type<"int32">;
    /**
     * Total minutes used on macOS 12 core runner machines.
     */
    macos_12_core?: number & tags.Type<"int32">;
    /**
     * Total minutes used on all runner machines.
     */
    total?: number & tags.Type<"int32">;
  };
};
