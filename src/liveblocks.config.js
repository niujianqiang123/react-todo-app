import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: "pk_live_xxxxxxxxxxxxxxxxxxxxxxxx",
});

export const { RoomProvider } = createRoomContext(client);