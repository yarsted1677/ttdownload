import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function FAQ() {
  const faqs = [
    {
      question: 'Do I have to pay to use TikTok download without watermark?',
      answer: 'No, our service to download TikTok videos without a watermark is entirely free! Utilize our TikTok video downloader to store videos on all contemporary browsers such as Chrome, Firefox, Safari, and Edge.'
    },
    {
      question: 'Do I need to install an extension to use the TikTok Downloader?',
      answer: 'Definitely not. To begin downloading a TikTok video and eliminating the TikTok watermark online, you only require a link. Insert it into the input area and choose the correct format for transformation. Our TTDownloader video downloader and watermark eradicator application will handle everything else.'
    },
    {
      question: 'Where are TikTok videos saved after downloading?',
      answer: 'When you download TikTok videos without a watermark, they are usually stored in your browser\'s default TikTok download folder. The destination folder can be altered in your browser settings.'
    },
    {
      question: 'Do I need to have a TT account to download TikTok videos?',
      answer: 'No, you aren\'t required to have a TikTok account. You can download TikTok videos without a watermark simply by using a link. Insert it into the input box at the top of the TikTok download site and hit \'Save.\' Our TikTok downloader will eliminate the watermark, and the video will be prepared in moments.'
    },
    {
      question: 'Can the HD TikTok Downloader save videos from private accounts?',
      answer: 'Our website for downloading TikTok videos without watermarks cannot access content from private accounts or save TikTok videos without watermarks from those accounts. The account needs to be public for videos to be stored.'
    },
    {
      question: 'How do I get a link for TikTok videos?',
      answer: 'Launch the TT app and choose the video you wish to download. Click "Share" and then select "Copy Link". The URL for your TikTok video download will be copied to your clipboard.'
    },
    {
      question: 'Can I use your TikTok downloader without watermark on my Android phone?',
      answer: 'Absolutely, you can utilize TTDownloader to download TikTok videos on an Android device using our TikTok watermark remover site. Our TikTok downloader application is completely free, quick, and regularly updated.'
    },
    {
      question: 'Is TikTok Download Available in MP4 Format?',
      answer: 'Yes, you can download Tik Tok videos in MP4 format using TTDownloader. Utilize our watermark-free TikTok downloader app to download videos in high definition'
    }
  ];
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-[rgb(241,241,241)] rounded-lg px-6 border-none"
            >
              <AccordionTrigger className="text-left text-[rgb(37,46,105)] font-bold hover:no-underline cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[rgb(42,42,42)] text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}