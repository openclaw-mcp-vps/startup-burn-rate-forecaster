export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Finance
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Predict runway based on{' '}
          <span className="text-[#58a6ff]">growth patterns</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect your bank accounts and forecast exactly how long your cash lasts — with real hiring plans and growth scenarios baked in.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Start Forecasting — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🏦</div>
            <h3 className="text-white font-semibold mb-2">Bank Account Sync</h3>
            <p className="text-[#8b949e] text-sm">Plaid-powered connection to all major banks. Real-time balance and transaction data.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📈</div>
            <h3 className="text-white font-semibold mb-2">Scenario Modeling</h3>
            <p className="text-[#8b949e] text-sm">Model aggressive growth, conservative spend, or planned hires — see runway shift instantly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">⚡</div>
            <h3 className="text-white font-semibold mb-2">Burn Rate Alerts</h3>
            <p className="text-[#8b949e] text-sm">Get notified when burn accelerates beyond your plan. Stay ahead of the zero-cash date.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
            Most Popular
          </span>
          <h3 className="text-white text-xl font-bold mb-1">Founder Plan</h3>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to manage runway</p>
          <div className="mb-6">
            <span className="text-5xl font-bold text-white">$49</span>
            <span className="text-[#8b949e] ml-1">/month</span>
          </div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Connect up to 5 bank accounts',
              'Unlimited runway scenarios',
              'Hiring plan modeling',
              'Weekly burn rate reports',
              'Slack & email alerts',
              'CSV export for investors',
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200 text-center"
          >
            Get Started
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">7-day free trial. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does bank account connection work?</h3>
            <p className="text-[#8b949e] text-sm">We use Plaid, the industry-standard bank connectivity layer trusted by thousands of fintechs. Your credentials never touch our servers — Plaid handles authentication directly with your bank.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I model different hiring scenarios?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Add planned hires with start dates and salaries, and the forecast updates in real time. You can compare multiple scenarios side-by-side to see how each hire affects your runway.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Is my financial data secure?</h3>
            <p className="text-[#8b949e] text-sm">All data is encrypted at rest and in transit. We use read-only Plaid access tokens — we can never move money. Your data is never sold or shared with third parties.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-sm text-[#6e7681]">
        <p>© {new Date().getFullYear()} Startup Burn Rate Forecaster. Built for founders, by founders.</p>
      </footer>
    </main>
  )
}
