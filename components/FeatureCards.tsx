export default function FeatureCards() {
  const features = [
    {
      title: 'Unlimited',
      description: 'Save TikTok videos as much as you need - without any limits.'
    },
    {
      title: 'No Watermark!',
      description: 'Download TikTok video in MP4 or remove a TT logo.'
    },
    {
      title: 'MP4 files',
      description: 'Save files in HD quality, convert TikTok to MP4 files easily.'
    }
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-8 shadow-md text-center hover:shadow-xl transition-shadow"
          >
            <h3 className="text-[rgb(37,46,105)] text-[28.8px] leading-[33.12px] font-bold mb-4">
              {feature.title}
            </h3>
            <p className="text-[rgb(42,42,42)] text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}