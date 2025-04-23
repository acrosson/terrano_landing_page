import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - Terrano',
  description: 'Discover the powerful features of Terrano that help manufacturers streamline their operations.',
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
