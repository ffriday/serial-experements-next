import { DefaultLayout } from "@/widgets/DefaultLayout";

export default function DefaultDarkLayout(args: LayoutProps<"/[locale]">) {
  return <DefaultLayout {...args} transparencyType="solid" colorType="dark" />;
}
