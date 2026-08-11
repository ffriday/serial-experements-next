import { getTranslations } from "next-intl/server";
import { GridItem, PageGrid } from "@/shared/ui/PageGrid";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <PageGrid as="main">
      <GridItem span="m">
        <h1>{t("title")}</h1>
      </GridItem>
    </PageGrid>
  );
}
