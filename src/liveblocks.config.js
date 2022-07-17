import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: "pk_live_o0yqJa1xLtnFo6w65_wHY1yR",
});

export const { RoomProvider, useOthers, useList, useUpdateMyPresence } =
createRoomContext(client);
