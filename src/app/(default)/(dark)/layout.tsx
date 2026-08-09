import DefaultLayout from '@/shared/ui/DefaultLayout/DefaultLayout';

export default function DefaultDarkLayout(args: LayoutProps<"/">) {
  return <DefaultLayout {...args} transparencyType="solid" colorType="dark" />;
}
