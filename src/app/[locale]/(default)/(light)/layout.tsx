import { DefaultLayout } from "@/widgets/DefaultLayout";

export default function DefaultLightLayout(args: LayoutProps<"/[locale]">) {
  return <DefaultLayout {...args} transparencyType="solid" colorType="light" />;
}
