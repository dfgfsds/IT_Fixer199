'use client';

import DeskTop from '@/components/deskTop/page';
import { useDevice } from '@/lib/useDevice';
import Mobile from './mobile/page';

export default function Page() {
  const device = useDevice();
  if (device === 'mobile') return <Mobile />;
  if(device === 'tablet') return <Mobile />;
  return <DeskTop />;
}
