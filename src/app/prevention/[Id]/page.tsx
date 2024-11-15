import { preventionTips } from '@/lib/preventionData';
import { notFound } from 'next/navigation';
import PreventionTip from '@/components/PreventionTip';

export default function PreventionTipPage({ params }: { params: { Id: string } }) {
  // Find the prevention tip by ID
  const tip = preventionTips.find(t => t.id === params.Id);

  // If the tip is not found, call notFound() to trigger a 404 response
  if (!tip) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-16"> 
      {/* Pass the found tip to the PreventionTip component */}
      <PreventionTip tip={tip} />
    </div>
  );
}