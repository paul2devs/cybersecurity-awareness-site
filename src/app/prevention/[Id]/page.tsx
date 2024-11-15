import { preventionTips } from '@/lib/preventionData';
import { notFound } from 'next/navigation';
import PreventionTip from '@/components/PreventionTip';

export default function PreventionTipPage({ params }: { params: { Id: string } }) {
  
  const tip = preventionTips.find(t => t.id === params.Id);

  
  if (!tip) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-16"> 
      {/* Pass the found tip */}
      <PreventionTip tip={tip} />
    </div>
  );
}