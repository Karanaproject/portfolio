export default function ExperiencePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Work Experience
        </h1>
        
        <div className="space-y-12">
          {/* Experience 1 */}
          <div className="border-l-4 border-primary pl-6 py-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h2 className="text-2xl font-semibold">Sales Manager</h2>
              <span className="text-base text-muted-foreground">2020 - Present</span>
            </div>
            <p className="text-lg text-primary font-medium mb-3">PT. Consumer Goods Indonesia</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Led team of 15 sales representatives across 3 regions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Achieved 150% revenue growth (IDR 15B to IDR 37.5B) through strategic territory expansion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Implemented new sales training program resulting in 40% increase in team productivity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Developed key performance indicators that improved sales forecasting accuracy by 25%</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Leadership</span>
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Sales Strategy</span>
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Team Management</span>
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Revenue Growth</span>
            </div>
          </div>
          
          {/* Experience 2 */}
          <div className="border-l-4 border-primary pl-6 py-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h2 className="text-2xl font-semibold">Senior Sales Executive</h2>
              <span className="text-base text-muted-foreground">2018 - 2020</span>
            </div>
            <p className="text-lg text-primary font-medium mb-3">PT. Food & Beverage Corp</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Developed distribution network covering 15 major cities in Java</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Increased market share from 15% to 30% in modern trade channel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Negotiated partnerships with 50+ new retail outlets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Reduced distribution costs by 20% through route optimization</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Distribution</span>
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Market Expansion</span>
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Partnership</span>
            </div>
          </div>
          
          {/* Experience 3 */}
          <div className="border-l-4 border-primary pl-6 py-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h2 className="text-2xl font-semibold">Sales Supervisor</h2>
              <span className="text-base text-muted-foreground">2016 - 2018</span>
            </div>
            <p className="text-lg text-primary font-medium mb-3">PT. Retail Solutions</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Managed key accounts in modern trade channel with 95% client retention rate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Increased sales volume by 35% through promotional activities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Trained 20+ junior sales staff on product knowledge and sales techniques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Received "Best Supervisor" award in 2017 for outstanding performance</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Account Management</span>
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Retail</span>
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Training</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
