import { DefaultLayout } from "@/widgets/DefaultLayout";

export default function DefaultTransparentLayout(args: LayoutProps<"/">) {
  return <DefaultLayout {...args} transparencyType="transparent" />;
}
