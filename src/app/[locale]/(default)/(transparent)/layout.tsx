import { DefaultLayout } from "@/widgets/DefaultLayout";

export default function DefaultTransparentLayout(
  args: LayoutProps<"/[locale]">,
) {
  return <DefaultLayout {...args} transparencyType="transparent" />;
}
