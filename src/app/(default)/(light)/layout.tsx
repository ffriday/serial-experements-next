import DefaultLayout from '@/shared/ui/DefaultLayout/DefaultLayout';

export default function DefaultLightLayout(args: LayoutProps<"/">) {
  return <DefaultLayout {...args} transparencyType="solid" colorType="light" />;
}
