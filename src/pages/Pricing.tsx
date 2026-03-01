import { Check } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const plans = [
  {
    name: "Silver",
    subtitle: "Elegant Presence",
    desc: "Best for private events, dinners, and social occasions",
    features: ["High-quality talent", "Professional conduct", "Advance booking recommended"],
    tier: "silver" as const,
  },
  {
    name: "Gold",
    subtitle: "Premium Experience",
    desc: "Extended engagement options",
    features: ["High-end profiles", "Priority scheduling", "Extended engagement options"],
    tier: "gold" as const,
    popular: true,
  },
  {
    name: "Platinum",
    subtitle: "Signature Engagement",
    desc: "Top-tier talents with customized experiences",
    features: ["Top-tier talents", "Customized experiences", "Travel extensions", "Premium support", "Dedicated concierge service"],
    tier: "platinum" as const,
  },
];

const Pricing = () => {
  return (
    <div className="bg-emerald-gradient min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-elegant text-xs md:text-sm tracking-[0.3em] uppercase text-primary/50 mb-3">Investment</p>
            <h1 className="font-display text-3xl md:text-5xl tracking-wider text-primary">Pricing & Plans</h1>
            <div className="gold-divider w-20 mx-auto mt-4" />
            <p className="font-elegant text-sm md:text-base text-primary/45 mt-4 max-w-lg mx-auto">
              We offer tiered packages designed to fit different preferences and budgets while delivering premium value.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {plans.map((plan, i) => (
            <FadeInSection key={plan.name} delay={i * 0.15}>
              <div
                className={`relative flex flex-col h-full rounded-2xl p-6 md:p-8 border transition-all duration-500 hover:-translate-y-1 ${
                  plan.tier === "platinum"
                    ? "border-primary/60 bg-card shadow-gold"
                    : plan.tier === "gold"
                    ? "border-primary/40 bg-card"
                    : "border-primary/20 bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-body text-[9px] md:text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-5 md:mb-6">
                  <h3 className="font-display text-xl md:text-2xl text-primary tracking-wide mb-1">{plan.name}</h3>
                  <p className="font-elegant text-sm md:text-base text-primary/60 italic">{plan.subtitle}</p>
                </div>

                <p className="font-elegant text-xs md:text-sm text-primary/40 mb-5 md:mb-6 leading-relaxed">{plan.desc}</p>

                <div className="gold-divider w-full mb-5 md:mb-6" />

                <ul className="space-y-3 md:space-y-4 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-xs md:text-sm text-primary/55 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.5}>
          <p className="text-center font-elegant text-xs md:text-sm text-primary/40 mt-8 md:mt-10 italic">
            Exact pricing shared upon private inquiry. Discretion ensured.
          </p>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Pricing;
