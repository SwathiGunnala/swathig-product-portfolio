"use client"

import * as React from "react"
import {
  Search,
  TrendingUp,
  Users,
  Zap,
  Target,
  Award,
  BarChart3,
  Sparkles,
  BookOpen,
  FileText,
  Palette,
  Instagram,
  ExternalLink,
  Linkedin,
  Building2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

type CaseStudy = {
  id: string
  company: string
  title: string
  subtitle: string
  tags: string[]
  tldr: string[]
  deepDive: {
    Problem: string
    Vision: string
    Discovery: string
    Strategy: string // Added Strategy section
    Execution: string // Added Execution section
    Solution: string
    Metrics: string
    Learnings: string
  }
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "7eleven-payouts",
    company: "7-Eleven (7NOW)",
    title: "Merchant Payout Automation Platform",
    subtitle: "Payee API • Payouts • Settlement • Tax • Reconciliation",
    tags: ["Payments", "FinTech", "Platforms", "Compliance"],
    tldr: [
      "Built Payee API and merchant integrations to cut onboarding from ~10 days to <4 hours.",
      "Automated weekly & monthly merchant payouts; generated settlement files for accounting review.",
      "Implemented commission tax + marketplace facilitator tax (state-specific) and achieved 100% daily reconciliation coverage.",
      "Launched EBT as a new payment type; increased reactivated customers by 58%.",
    ],
    deepDive: {
      Problem:
        "Merchant onboarding and payouts relied on manual steps and cross-team handoffs, causing long lead times, payout errors, and limited scalability as merchant volume grew. Finance teams spent hours reconciling payments manually, creating risk of errors and delayed settlements.",
      Vision:
        "Create an API-first, auditable payout and settlement platform that scales merchant growth while maintaining compliance, accuracy, and finance confidence. Enable self-service merchant onboarding and real-time settlement visibility.",
      Discovery:
        "Conducted comprehensive workflow mapping sessions with Finance, Accounting, and Operations teams to document the complete merchant lifecycle. Analyzed 6 months of support tickets and error logs to identify pain points. Interviewed 12+ merchants to understand onboarding friction. Key findings: payee setup took 8-10 days due to manual verification steps, settlement reconciliation consumed 15+ hours per week, and tax calculation errors led to merchant disputes.",
      Strategy:
        "Prioritized API-first architecture using RICE framework: onboarding API (Reach: High, Impact: Critical, Confidence: High, Effort: Medium). Decided to build vs. buy after evaluating 3 third-party solutions that lacked our tax complexity requirements. Defined success metrics: <4 hour onboarding, 100% reconciliation coverage, zero settlement errors. Secured executive buy-in by presenting ROI model showing $200K annual savings in operational costs.",
      Execution:
        "Led cross-functional team of 8 engineers, 2 designers, 1 compliance specialist. Ran bi-weekly sprint planning and stakeholder demos. Implemented phased rollout: Phase 1 (Payee API + basic payouts), Phase 2 (Tax logic), Phase 3 (Reconciliation dashboard). Worked closely with Legal/Compliance to ensure marketplace facilitator tax requirements were met for 45+ states. Coordinated with Finance to validate settlement file format and accounting system integration.",
      Solution:
        "Launched Payee API + integration APIs, automated weekly/monthly payouts, produced structured settlement files, embedded tax logic for commissions and marketplace facilitator requirements, and delivered daily reconciliation visibility. Built admin dashboard for Finance team to review exceptions and approve settlements.",
      Metrics:
        "Onboarding time: ~10 days → <4 hours (96% improvement). Reconciliation coverage: 100% (up from 65%). Manual finance workload: ~30% reduction (saving 10+ hours/week). Reactivated customers: +58% after EBT launch. Settlement error rate: 0.2% (down from 8%).",
      Learnings:
        "Payouts are trust-critical. Accuracy + auditability come before speed. APIs unlock scale faster than process fixes, but exceptions and reconciliation must be designed from day one. Early Finance team involvement prevented 3+ months of rework. Tax logic complexity was underestimated—allocate buffer for state-by-state requirements.",
    },
  },
  {
    id: "taxact",
    company: "TaxAct / Taxwell",
    title: "Consumer + Professional Tax Platforms",
    subtitle: "Experiments • Vue.js • DocuSign eSign • VOC + Balto AI",
    tags: ["Compliance", "B2C", "B2B", "Platforms", "AI/VOC"],
    tldr: [
      "Consumer: launched competitor tax return import to reduce data entry friction and improve conversion.",
      "Consumer: piloted DIY Tax Assistant (500 users) via A/B testing to learn and iterate.",
      "Professional: launched DocuSign eSignature reducing 49 manual steps to 10 steps.",
      "VOC + AI: integrated Balto for call theme detection; improved CSAT by 10 points and NPS by 15 points.",
    ],
    deepDive: {
      Problem:
        "Tax preparation is high-stakes and compliance-heavy with complex IRS regulations. Small UX frictions cause significant drop-off, especially during peak tax season. Professional tax preparers faced cumbersome manual workflows with 49+ steps for client signatures, creating delays and errors. Customer support teams struggled to identify recurring issues across thousands of calls.",
      Vision:
        "Make tax preparation simpler and more reliable by reducing data entry, modernizing the platform, and using VOC signals to iterate fast without compromising compliance. Empower professional tax preparers with streamlined workflows that save time and reduce errors.",
      Discovery:
        "Created comprehensive business cases for all product initiatives in collaboration with cross-functional stakeholders (Engineering, Design, Marketing, Sales, Support, Legal/Compliance). Presented business cases to C-Suite leadership for approval and development prioritization. Analyzed 10,000+ support tickets and conducted 50+ user interviews to identify top friction points. Used experiments (pilot + A/B tests) to validate hypotheses. Key insight: data entry accounted for 40% of drop-offs, and eSignature workflow was the #1 complaint from pro users.",
      Strategy:
        "Built prioritization framework balancing impact, compliance risk, and engineering effort. For Consumer: focused on reducing data entry friction via competitor import (validated through prototype testing with 100 users showing 35% time savings). For Professional: prioritized DocuSign integration (calculated 15 hours saved per preparer per week). For VOC: evaluated 4 AI vendors and selected Balto based on compliance requirements and integration capabilities. Secured $500K budget through C-Suite presentation demonstrating projected 25% increase in conversion.",
      Execution:
        "Led 3 parallel workstreams with 12 engineers, 3 designers, 1 compliance officer, and partnership teams. Consumer: Ran 2-week sprints with continuous A/B testing. Professional: Coordinated with DocuSign for API integration and compliance certification. VOC: Worked with Support leadership to integrate Balto into call center systems and train agents. Held weekly stakeholder syncs and monthly C-Suite updates with metrics dashboards showing progress against KPIs.",
      Solution:
        "Consumer: competitor import, DIY assistant pilot, Vue.js platform improvements for faster rendering. Professional: DocuSign eSign integration, competitor conversion tools, improved form search with fuzzy matching, enhanced review + print workflows, and scalable practice management features. VOC: Balto AI integration analyzing 100% of support calls for theme detection and agent coaching.",
      Metrics:
        "eSignature steps: 49 → 10 (80% reduction). Time per return: 45 min → 28 min (38% faster). DIY assistant: 500-user pilot with 22% completion increase. CSAT: +10 points. NPS: +15 points. Support ticket volume: -18%. Professional user retention: +12%.",
      Learnings:
        "In regulated products, stability is a feature—compliance gates prevented 2 potential issues. VOC + experimentation keeps teams grounded in real friction, and step-reduction is often higher ROI than net-new UI. Executive alignment through data-driven business cases accelerates high-impact initiatives. C-Suite buy-in requires clear ROI models, not just feature descriptions.",
    },
  },
  {
    id: "walmart",
    company: "Walmart",
    title: "HR Automation + Perishable Inventory Systems",
    subtitle: "Internal platforms • Distribution Center field research",
    tags: ["Enterprise", "Platforms", "Supply Chain"],
    tldr: [
      "Automated internal HR applications supporting incentives, paychecks, hiring, and onboarding.",
      "Perishables: visited DCs to understand allocation, palletization, and inventory updates to inform system design.",
      "Improved operational speed and reduced error rates across internal workflows.",
      "Improved perishable inventory accuracy and reduced spoilage risk.",
    ],
    deepDive: {
      Problem:
        "Large-scale internal HR workflows for 2.3M+ associates were manual and slow, creating payroll errors and delayed incentive payments. Perishable inventory required near-real-time alignment between physical DC operations and digital systems, but system delays caused spoilage and out-of-stock scenarios costing millions annually.",
      Vision:
        "Automate high-volume internal workflows and strengthen the integrity of supply chain data to improve freshness, availability, and operational confidence. Reduce manual touchpoints and create real-time visibility for HR and supply chain teams.",
      Discovery:
        "Partnered with HR, Payroll, and Operations stakeholders to map 15+ workflows across hiring, onboarding, and compensation. Conducted 8 field visits to Walmart distribution centers, shadowing warehouse workers and managers to understand physical allocation, palletization, and inventory update processes. Analyzed system logs revealing 6-hour data sync delays. Key insight: physical-to-digital gap caused 15-20% inventory discrepancies for perishables.",
      Strategy:
        "HR Automation: Prioritized highest-volume workflows first (payroll processing 2.3M records biweekly, incentive calculations 500K+ quarterly). Evaluated build vs. buy and decided on custom solution due to Walmart-specific rules. Perishables: Chose event-driven architecture to reduce sync latency from 6 hours to <15 minutes. Presented business case to VP-level stakeholders showing $8M annual savings from reduced spoilage and payroll errors.",
      Execution:
        "Led 2 pods: HR automation (6 engineers, 1 designer) and Perishables (8 engineers, supply chain SMEs). HR: Implemented automated incentive calculation engine, paycheck generation system, and self-service onboarding portal. Coordinated with Legal/Compliance for labor law requirements across 50 states. Perishables: Built real-time event system for allocation and inventory updates. Worked with DC operations to pilot in 5 locations before national rollout. Ran weekly stakeholder demos and quarterly executive reviews.",
      Solution:
        "Automated HR processes (incentives/payroll/hiring/onboarding) with self-service dashboards for associates and managers. Enhanced perishables inventory system with real-time updates aligned to allocation and palletization workflows, including expiration date tracking and automated reordering triggers.",
      Metrics:
        "HR processing time: ~40–60% reduction (from 8 hours to 3 hours for payroll). Payroll errors: ~30–40% reduction. Onboarding time: 3 days → 4 hours. Perishable inventory accuracy: ~15–25% improvement. Spoilage reduction: $2.5M annually. Out-of-stock incidents: -22%.",
      Learnings:
        "Field research reveals the hidden constraints—DC workers taught us that physical palletization order matters for digital accuracy. Ops alignment is a product feature, and internal tools deserve the same UX rigor as customer products. Real-time data prevents more problems than it solves downstream. Don't assume digital systems reflect physical reality—validate in the field.",
    },
  },
  {
    id: "sams-auctions",
    company: "Sam's Club",
    title: "Online Auctions Platform",
    subtitle: "Bidding UX • Gift cards • Online revenue channel",
    tags: ["Retail", "B2C", "Payments"],
    tldr: [
      "Built real-time bidding experience to sell products online via auctions.",
      "Supported multiple payment types including gift cards.",
      "Enabled a new digital channel for inventory monetization.",
      "Improved engagement via competitive bidding dynamics.",
    ],
    deepDive: {
      Problem:
        "Sam's Club needed a trustworthy, scalable auctions experience to sell excess inventory and clearance products online. Existing channels lacked competitive bidding dynamics, and payment flexibility (especially gift cards) was limited, reducing member engagement and revenue potential.",
      Vision:
        "Make auctions simple and reliable: easy bidding, secure checkout, clear auction lifecycle states, and flexible payment options to maximize member participation and inventory monetization.",
      Discovery:
        "Conducted competitive analysis of eBay, Shopify auctions, and Woot to understand best practices. Interviewed 30+ Sam's Club members to understand bidding psychology and payment preferences. Analyzed inventory data showing $12M in slow-moving/clearance products annually. Key insight: members wanted gift card support (48% preference) and clear bid status visibility.",
      Strategy:
        "Defined MVP scope: real-time bidding, multi-payment support (credit/debit/gift cards), mobile-responsive UX. Decided on WebSocket architecture for real-time bid updates vs. polling (performance + cost trade-off). Prioritized gift card integration based on member feedback and existing Sam's Club gift card volume ($200M+ annually). Created phased rollout: pilot with 500 products → category expansion → full launch.",
      Execution:
        "Led cross-functional team of 5 engineers, 2 designers, 1 payments specialist. Coordinated with Payments team to integrate gift card API and ensure PCI compliance. Built real-time bidding engine with conflict resolution for simultaneous bids. Designed auction lifecycle states (upcoming, active, ending soon, closed) with automated email notifications. Ran 4-week pilot with 500 members, iterating on UX based on feedback.",
      Solution:
        "Delivered real-time bidding experience with WebSocket updates, checkout integration supporting multiple payment methods (including gift cards), automated auction lifecycle management, and member notification system. Built seller admin portal for inventory management and auction performance analytics.",
      Metrics:
        "New digital revenue channel enabled generating $2.8M in first 6 months. Avg. bid completion rate: 68%. Gift card usage: 35% of transactions. Member engagement: 4.2 bids per active user. Inventory turnover: +28% for clearance items.",
      Learnings:
        "In auctions, trust and system reliability matter as much as UX polish—especially at checkout. Real-time bid conflicts need careful handling to maintain fairness. Gift card support was table stakes for member adoption. Clear auction end-time visibility reduces support tickets and disputes.",
    },
  },
  {
    id: "jcp",
    company: "JCPenney",
    title: "Retail & eCommerce Platform Enhancements",
    subtitle: "Funnel friction reduction • Peak readiness • Omnichannel alignment",
    tags: ["Retail", "B2C"],
    tldr: [
      "Optimized digital shopping journey and reduced friction across key flows.",
      "Improved platform stability during high-traffic retail periods.",
      "Aligned digital experience with store/ops realities.",
      "Prepared foundation for deeper JCPenney case study expansion.",
    ],
    deepDive: {
      Problem:
        "Retail customers expect fast, reliable, low-friction journeys; peak traffic periods (Black Friday, holiday season) magnified both UX and platform weaknesses. Site crashes during peak resulted in lost revenue and damaged brand trust. Omnichannel features (buy online pickup in-store, ship-from-store) had high error rates.",
      Vision:
        "Make discovery → checkout → fulfillment smoother and more resilient across channels. Ensure platform can handle 10x traffic spikes without degradation.",
      Discovery:
        "Journey and funnel analysis showing 42% drop-off at checkout. Analyzed system performance logs during previous Black Friday revealing database bottlenecks and API timeout issues. Stakeholder alignment across Merchandising, Store Operations, and Engineering. Conducted store visits to understand BOPIS and ship-from-store workflows. Key insight: inventory sync delays caused 30% of BOPIS failures.",
      Strategy:
        "Prioritized checkout optimization (highest drop-off), peak performance improvements (business-critical), and inventory sync enhancement (highest complaint volume). Evaluated caching strategies and load balancing options. Decided to implement CDN for static assets and database read replicas. Set performance targets: 2-second page load, 99.9% uptime during peak, <5% BOPIS errors.",
      Execution:
        "Led platform stability workstream with Infrastructure team (10 engineers). Implemented performance testing framework simulating 10x traffic. Optimized checkout flow reducing form fields from 15 to 8. Worked with Store Operations to improve inventory sync from 30-minute to 5-minute intervals. Coordinated Black Friday war room with 24/7 monitoring and rapid response team.",
      Solution:
        "Platform and experience optimizations across core shopping flows: simplified checkout, CDN implementation, database scaling, real-time inventory sync for omnichannel, and automated performance monitoring with alerting.",
      Metrics:
        "Checkout drop-off: 42% → 28% (33% improvement). Black Friday uptime: 99.9% (vs. 94% previous year). Page load time: 5.2s → 1.8s. BOPIS errors: 30% → 6%. Revenue during peak: +18% YoY.",
      Learnings:
        "Small frictions compound at scale—reducing 7 form fields increased conversion by 14%. Peak readiness is a product requirement, not an ops afterthought. Load testing must simulate realistic user behavior, not just traffic volume. Omnichannel success requires tight store-digital coordination.",
    },
  },
]

const DOMAIN_FILTERS = [
  "All",
  "Payments",
  "FinTech",
  "Platforms",
  "Compliance",
  "Retail",
  "B2B",
  "B2C",
  "Enterprise",
  "Supply Chain",
  "AI/VOC",
]

function tagMatchesFilter(tags: string[], filter: string) {
  if (filter === "All") return true
  return tags.some((t) => t.toLowerCase() === filter.toLowerCase())
}

export default function PortfolioPage() {
  const [query, setQuery] = React.useState("")
  const [filter, setFilter] = React.useState<string>("All")
  const [openId, setOpenId] = React.useState<string | null>(null)

  const selected = React.useMemo(() => CASE_STUDIES.find((c) => c.id === openId) ?? null, [openId])

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    return CASE_STUDIES.filter((c) => {
      const matchesFilter = tagMatchesFilter(c.tags, filter)
      const haystack =
        `${c.company} ${c.title} ${c.subtitle} ${c.tags.join(" ")} ${c.tldr.join(" ")} ${Object.values(c.deepDive).join(" ")}`.toLowerCase()
      const matchesQuery = q.length === 0 ? true : haystack.includes(q)
      return matchesFilter && matchesQuery
    })
  }, [query, filter])

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* HERO */}
        <div className="space-y-6">
          <Card className="rounded-2xl border-2">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold">Swathi G. — Product Portfolio</CardTitle>
              <CardDescription className="text-base">
                Senior Product Manager | B2B & B2C Platform Leader | AI-Driven Solutions | SaaS | FinTech | Retail
                Supply Chain | Strategic Growth
              </CardDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">FinTech & Payments</Badge>
                <Badge variant="secondary">Compliance & Tax</Badge>
                <Badge variant="secondary">Retail & eCommerce</Badge>
                <Badge variant="secondary">AI + VOC</Badge>
              </div>
            </CardHeader>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">5+</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300 mt-1">Products Shipped</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Across FinTech, Retail & Tax</div>
                  </div>
                  <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-3xl font-bold text-green-900 dark:text-green-100">$10M+</div>
                    <div className="text-sm text-green-700 dark:text-green-300 mt-1">Revenue Impact</div>
                    <div className="text-xs text-green-600 dark:text-green-400 mt-1">Through process automation</div>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-3xl font-bold text-purple-900 dark:text-purple-100">1M+</div>
                    <div className="text-sm text-purple-700 dark:text-purple-300 mt-1">Users Served</div>
                    <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">B2B & B2C platforms</div>
                  </div>
                  <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-3xl font-bold text-orange-900 dark:text-orange-100">40-60%</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300 mt-1">Time Saved</div>
                    <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                      Operational efficiency gains
                    </div>
                  </div>
                  <Zap className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Core PM Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Product Strategy",
                    "Stakeholder Management",
                    "C-Suite Presentations",
                    "Business Cases",
                    "Data Analytics",
                    "Cross-functional Leadership",
                    "User Research",
                    "Agile & Scrum",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Technical & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Analytics & Data</div>
                    <div className="flex flex-wrap gap-2">
                      {["SQL", "Tableau", "Google Analytics", "Mixpanel", "A/B Testing"].map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">PM Tools</div>
                    <div className="flex flex-wrap gap-2">
                      {["Jira", "Confluence", "Figma", "Miro", "ProductBoard"].map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Development</div>
                    <div className="flex flex-wrap gap-2">
                      {["API Design", "Vue.js", "REST", "Microservices", "CI/CD"].map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              size="lg"
              className="rounded-2xl"
              onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Case Studies
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-2xl"
              onClick={() => document.getElementById("metrics")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Detailed Metrics
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-2xl bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* FEATURED CASE STUDIES */}
        <div id="featured-case-studies" className="pt-16">
          <h2 className="text-2xl font-bold">Featured Case Studies</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Deep-dive explorations of product challenges, research methodologies, and solutions.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* TJ Maxx/HomeGoods Case Study */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">Reducing 40-Minute Checkout Wait Times</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span>TJ Maxx & HomeGoods</span>
                    </div>
                  </div>
                  <Badge variant="secondary">Retail</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  A comprehensive UX research study analyzing checkout pain points during peak shopping seasons,
                  identifying critical bottlenecks, and proposing data-driven solutions to improve customer experience.
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    UX Research
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Customer Experience
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Retail Operations
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Wait Time Optimization
                  </Badge>
                </div>

                <div className="pt-2 border-t">
                  <h4 className="text-sm font-semibold mb-2">Key Highlights:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Field research during peak holiday shopping periods</li>
                    <li>• Multi-method approach: observations, interviews, surveys</li>
                    <li>• Identified 5 critical pain points in checkout flow</li>
                    <li>• Actionable recommendations for immediate improvement</li>
                  </ul>
                </div>

                <a
                  href="https://www.notion.so/Case-Study-Reducing-40-Minute-Checkout-Wait-Times-at-TJ-Maxx-HomeGoods-2a81cc4128fe80fe929ed7b03ba343c2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Read Full Case Study
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            {/* Placeholder for additional case studies */}
            <Card className="hover:shadow-lg transition-shadow border-dashed">
              <CardHeader>
                <CardTitle className="text-xl mb-2">More Case Studies Coming Soon</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Additional in-depth case studies exploring product strategy, user research, and problem-solving
                  methodologies across various domains.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Product Strategy
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    User Research
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Data Analysis
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CASE STUDIES */}
        <div id="case-studies" className="pt-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              {/* CHANGE: Updated heading from "Case Studies" to "Work Experience" */}
              <h2 className="text-2xl font-bold">Work Experience</h2>
              <p className="text-sm text-muted-foreground">
                Filter by domain, search, then choose your depth (TL;DR vs Deep Dive).
              </p>
            </div>

            <div className="relative w-full md:w-[420px]">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-9 rounded-2xl"
                placeholder="Search: payouts, EBT, DocuSign, Vue, inventory…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filters */}
          <div className="mt-4 flex flex-wrap gap-2">
            {DOMAIN_FILTERS.map((f) => (
              <Button
                key={f}
                size="sm"
                variant={filter === f ? "default" : "secondary"}
                className="rounded-2xl"
                onClick={() => setFilter(f)}
              >
                {f}
              </Button>
            ))}
          </div>

          {/* Cards */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {filtered.map((c) => (
              <Card key={c.id} className="rounded-2xl hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-base">{c.company}</CardTitle>
                      <CardDescription className="text-sm mt-1">
                        <span className="font-medium text-foreground">{c.title}</span>
                        <span className="block mt-1">{c.subtitle}</span>
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {c.tags.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Tabs defaultValue="tldr" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 rounded-2xl">
                      <TabsTrigger value="tldr" className="rounded-2xl text-xs">
                        TL;DR
                      </TabsTrigger>
                      <TabsTrigger value="deep" className="rounded-2xl text-xs">
                        Deep Dive
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="tldr" className="pt-3">
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        {c.tldr.slice(0, 3).map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="deep" className="pt-3">
                      <div className="space-y-6 text-sm">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Problem & Context</h4>
                          <p className="text-muted-foreground leading-relaxed">{c.deepDive.Problem}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Vision</h4>
                          <p className="text-muted-foreground leading-relaxed">{c.deepDive.Vision}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Discovery & Research</h4>
                          <p className="text-muted-foreground leading-relaxed">{c.deepDive.Discovery}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Strategy & Decision-Making</h4>
                          <p className="text-muted-foreground leading-relaxed">{c.deepDive.Strategy}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Execution & Collaboration</h4>
                          <p className="text-muted-foreground leading-relaxed">{c.deepDive.Execution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                          <p className="text-muted-foreground leading-relaxed">{c.deepDive.Solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Results & Impact</h4>
                          <p className="text-muted-foreground leading-relaxed">{c.deepDive.Metrics}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Key Learnings</h4>
                          <p className="text-muted-foreground leading-relaxed">{c.deepDive.Learnings}</p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" className="rounded-2xl" onClick={() => setOpenId(c.id)}>
                      Read Full Story
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {filtered.length === 0 && (
              <Card className="rounded-2xl md:col-span-2">
                <CardContent className="py-10 text-center text-sm text-muted-foreground">
                  No matches. Try a different keyword or filter.
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* METRICS */}
        <div id="metrics" className="pt-16">
          <h2 className="text-2xl font-bold">Impact Metrics</h2>
          <p className="text-sm text-muted-foreground mb-6">Quantified outcomes across products and initiatives.</p>

          <div className="space-y-6">
            {/* Business Impact */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                BUSINESS IMPACT
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="rounded-2xl border-l-4 border-l-green-500">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">10 days → 4h</div>
                    <div className="text-sm text-muted-foreground mt-1">Merchant onboarding time</div>
                    <div className="text-xs text-muted-foreground mt-1">Payee API automation (7-Eleven)</div>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl border-l-4 border-l-blue-500">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">+58%</div>
                    <div className="text-sm text-muted-foreground mt-1">Reactivated customers</div>
                    <div className="text-xs text-muted-foreground mt-1">EBT payment launch (7-Eleven)</div>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl border-l-4 border-l-purple-500">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                    <div className="text-sm text-muted-foreground mt-1">Daily reconciliation</div>
                    <div className="text-xs text-muted-foreground mt-1">Automated settlement (7-Eleven)</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Operational Efficiency */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                <Zap className="h-4 w-4" />
                OPERATIONAL EFFICIENCY
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="rounded-2xl border-l-4 border-l-orange-500">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">-30%</div>
                    <div className="text-sm text-muted-foreground mt-1">Manual finance workload</div>
                    <div className="text-xs text-muted-foreground mt-1">Payout automation (7-Eleven)</div>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl border-l-4 border-l-red-500">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-red-600 dark:text-red-400">49 → 10</div>
                    <div className="text-sm text-muted-foreground mt-1">eSignature steps</div>
                    <div className="text-xs text-muted-foreground mt-1">DocuSign integration (TaxAct)</div>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl border-l-4 border-l-yellow-500">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-500">40-60%</div>
                    <div className="text-sm text-muted-foreground mt-1">HR processing time</div>
                    <div className="text-xs text-muted-foreground mt-1">Automation platform (Walmart)</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Customer Experience */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                <Users className="h-4 w-4" />
                CUSTOMER EXPERIENCE
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="rounded-2xl border-l-4 border-l-teal-500">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">+10 pts</div>
                    <div className="text-sm text-muted-foreground mt-1">CSAT improvement</div>
                    <div className="text-xs text-muted-foreground mt-1">VOC + Balto AI (TaxAct)</div>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl border-l-4 border-l-indigo-500">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">+15 pts</div>
                    <div className="text-sm text-muted-foreground mt-1">NPS improvement</div>
                    <div className="text-xs text-muted-foreground mt-1">Product optimization (TaxAct)</div>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl border-l-4 border-l-pink-500">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">15-25%</div>
                    <div className="text-sm text-muted-foreground mt-1">Inventory accuracy</div>
                    <div className="text-xs text-muted-foreground mt-1">Perishables system (Walmart)</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* PRINCIPLES */}
        <div id="principles" className="pt-16">
          <h2 className="text-2xl font-bold">Product Philosophy</h2>
          <p className="text-sm text-muted-foreground mb-6">How I build, measure, and ship products.</p>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Strategic Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                  <li>
                    <span className="font-medium text-foreground">Platforms scale</span> better than point solutions
                  </li>
                  <li>Build comprehensive business cases with cross-functional stakeholders</li>
                  <li>
                    <span className="font-medium text-foreground">Present to C-Suite</span> with data-driven rationale
                  </li>
                  <li>Automation should remove operational pain, not move it</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Execution Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                  <li>
                    <span className="font-medium text-foreground">Metrics define success</span> — outcomes over outputs
                  </li>
                  <li>Ship incrementally, learn continuously, iterate based on data</li>
                  <li>Empathy applies equally to internal users, merchants, and consumers</li>
                  <li>Voice of Customer (VOC) and experimentation keep teams grounded</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SIDE PROJECTS */}
        <div id="side-projects" className="pt-16">
          <h2 className="text-2xl font-bold">Side Projects & Explorations</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Building, creating, and experimenting with AI, design, and product ideas.
          </p>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Content & Thought Leadership
            </h3>
            <Card className="rounded-2xl hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Product Management & Customer Obsession Articles</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Writing on LinkedIn and Medium about product strategy, customer-centric thinking, and lessons
                        learned from building B2B and B2C products at scale.
                      </p>
                      <div className="flex gap-3 mt-3">
                        <a
                          href="https://www.linkedin.com/in/swathi-gunnala/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          <Linkedin className="h-4 w-4" />
                          LinkedIn Articles
                        </a>
                        <a
                          href="https://medium.com/@swathigunnala06"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Medium Blog
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Tech & Product Experiments
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3 mb-8">
            <Card className="rounded-2xl hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Shipped
                  </Badge>
                </div>
                <CardTitle className="text-base mt-3">Magic Story Jar</CardTitle>
                <CardDescription className="text-sm">Personalized storytelling app for kids</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Built with ChatGPT vibecoding for my daughter. AI-powered bedtime stories that adapt to her
                    interests and imagination.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      AI/ChatGPT
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Vibecoding
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Product Discovery
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl hover:shadow-lg transition-shadow border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <Badge className="text-xs">In Progress</Badge>
                </div>
                <CardTitle className="text-base mt-3">PM Learning Hub</CardTitle>
                <CardDescription className="text-sm">A gym for building PM muscle</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Interactive platform for aspiring PMs to practice real-world scenarios, case studies, and
                    frameworks. Built on Replit for rapid iteration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Replit
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      EdTech
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      PM Skills
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl hover:shadow-lg transition-shadow border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <Badge className="text-xs">In Progress</Badge>
                </div>
                <CardTitle className="text-base mt-3">FunMath App</CardTitle>
                <CardDescription className="text-sm">Gamified math learning for kids</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Interactive game-mode math app for elementary grades 1-5. Making math engaging through game
                    mechanics and instant feedback.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Replit
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      EdTech
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      K-12
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Gamification
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Creative & Business Projects
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="rounded-2xl hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <Palette className="h-5 w-5 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Active
                  </Badge>
                </div>
                <CardTitle className="text-base mt-3">Small Business Branding</CardTitle>
                <CardDescription className="text-sm">Flyer design & visual marketing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Designed marketing flyers for small business owners using Canva and ChatGPT. Helping local
                    entrepreneurs create professional visual assets.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Canva
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      ChatGPT
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Design
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Completed
                  </Badge>
                </div>
                <CardTitle className="text-base mt-3">Local Business GTM Strategy</CardTitle>
                <CardDescription className="text-sm">Go-to-market planning & execution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Designed a comprehensive GTM strategy and communication plan for a local business. Defined target
                    market, positioning, and launch tactics.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      GTM Strategy
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Marketing
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Communications
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                    <Instagram className="h-4 w-4 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Active
                  </Badge>
                </div>
                <CardTitle className="text-base mt-3">Swasacrafts</CardTitle>
                <CardDescription className="text-sm">Craft & event management showcase</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Instagram handle showcasing craft and art work for event management. Building a creative portfolio
                    and community engagement.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Instagram
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Crafts
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Event Design
                    </Badge>
                  </div>
                  <a
                    href="https://instagram.com/swasacrafts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline flex items-center gap-1 mt-2"
                  >
                    <Instagram className="h-4 w-4" />
                    View on Instagram
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4 p-4 bg-muted/50 rounded-2xl">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Why this matters:</span> Building products hands-on helps me
              stay close to the technology, understand engineering challenges, and rapidly prototype ideas before
              investing team resources.
            </p>
          </div>
        </div>

        {/* CONTACT */}
        <div id="contact" className="pt-16">
          <h2 className="text-2xl font-bold">Let's Connect</h2>
          <p className="text-sm text-muted-foreground pb-4">
            Open to product leadership roles, consulting, and collaboration opportunities.
          </p>

          <Card className="rounded-2xl">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="font-medium min-w-[100px]">Email:</div>
                    <a href="mailto:swathigunnala06@gmail.com" className="text-primary hover:underline">
                      swathigunnala06@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="font-medium min-w-[100px]">LinkedIn:</div>
                    <a
                      href="https://www.linkedin.com/in/swathi-gunnala/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      linkedin.com/in/swathi-gunnala
                    </a>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="font-medium min-w-[100px]">Location:</div>
                    <span className="text-muted-foreground">Coppell, Texas, United States</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="font-medium min-w-[100px]">Current Role:</div>
                    <span className="text-muted-foreground">Sr. Technical Product Manager at 7-Eleven</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MODAL */}
        <Dialog open={!!openId} onOpenChange={(o) => !o && setOpenId(null)}>
          <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl">
            {selected && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl">
                    {selected.company} — {selected.title}
                  </DialogTitle>
                  <DialogDescription>{selected.subtitle}</DialogDescription>
                </DialogHeader>

                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>

                <Tabs defaultValue="tldr" className="mt-4">
                  <TabsList className="grid w-full grid-cols-2 rounded-2xl">
                    <TabsTrigger value="tldr" className="rounded-2xl">
                      TL;DR
                    </TabsTrigger>
                    <TabsTrigger value="deep" className="rounded-2xl">
                      Deep Dive
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="tldr" className="pt-4">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      {selected.tldr.map((x, i) => (
                        <li key={i}>{x}</li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="deep" className="pt-4">
                    <Accordion type="multiple" className="w-full">
                      {Object.entries(selected.deepDive).map(([k, v]) => (
                        <AccordionItem key={k} value={k}>
                          <AccordionTrigger className="text-left">{k}</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-sm text-muted-foreground whitespace-pre-line">{v}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                </Tabs>

                <div className="flex justify-end gap-2 pt-2">
                  <Button variant="secondary" className="rounded-2xl" onClick={() => setOpenId(null)}>
                    Close
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
