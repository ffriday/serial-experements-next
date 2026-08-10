import { DefaultLayout } from "@/widgets/DefaultLayout";

export default function DefaultDarkLayout(args: LayoutProps<"/">) {
  return <DefaultLayout {...args} transparencyType="solid" colorType="dark" />;
}
