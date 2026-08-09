import DefaultLayout from '@/shared/ui/DefaultLayout/DefaultLayout';

export default function DefaultTransparentLayout(args: LayoutProps<"/">) {
  return <DefaultLayout {...args} transparencyType="transparent" />;
}
