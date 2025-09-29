import Link from "next/link";

export default function ExperienceSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {/* Experience 1 - PT. FKS Pangan Nusantara */}
            <div className="border-l-4 border-primary pl-6 py-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold">PT. FKS Pangan Nusantara</h3>
                <span className="text-sm text-muted-foreground">Aug 2023 - Dec 2024</span>
              </div>
              <p className="text-primary font-medium mb-2">Sales Commander & Territory Sales Supervisor</p>
              <p className="text-muted-foreground mb-3">Surabaya, Mojokerto, Malang</p>
              
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Achieved +15% QoQ sales growth and ranked #2 nationally</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Expanded 80-100 new GT outlets and grew Bola Deli sales by +90% YoY</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Implemented demand forecasting maintaining 14-day buffer stock</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Team Leadership</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Sales Growth</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Supply Chain</span>
              </div>
            </div>
            
            {/* Experience 2 - PT. Marga Nusantara Jaya */}
            <div className="border-l-4 border-primary pl-6 py-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold">PT. Marga Nusantara Jaya</h3>
                <span className="text-sm text-muted-foreground">Jan 2021 - Jul 2023</span>
              </div>
              <p className="text-primary font-medium mb-2">Area Sales Manager & Management Trainee</p>
              <p className="text-muted-foreground mb-3">Multiple Provinces</p>
              
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Achieved #1 National KPI Productivity ranking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Improved distribution efficiency by 20-25%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Led 15+ New Product Launches with 90%+ GT penetration</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Sales Strategy</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Distribution</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Product Launches</span>
              </div>
            </div>
          </div>
          
          {/* Link to full experience page */}
          <div className="text-center mt-12">
            <Link 
              href="/experience" 
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              View complete work experience
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
