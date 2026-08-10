import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { resourceQuery } from "@/entities/resource/api";
import { ResourceView } from "@/entities/resource/ui/ResourceView";
import { getQueryClient } from "@/shared/api/get-query-client";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(resourceQuery);

  return (
    <main className="min-h-screen">
      <h1>HOME</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {/* <ResourceView /> */}
      </HydrationBoundary>
    </main>
  );
}
