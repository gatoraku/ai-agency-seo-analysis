import { useTranslation } from 'react-i18next';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Semantic Header */}
      <header>
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 bg-gray-800 shadow-lg z-50" aria-label="Main Navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold">
                  <Link to="/" title="nextai - AI Agency">nextai</Link>
                </h1>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/services" className="text-gray-300 hover:text-white" aria-current="page">{t('nav.services')}</Link>
                <Link to="/solutions" className="text-gray-300 hover:text-white">{t('nav.solutions')}</Link>
                <Link to="/about" className="text-gray-300 hover:text-white">{t('nav.about')}</Link>
                <Link to="/contact" className="text-gray-300 hover:text-white">{t('nav.contact')}</Link>
                <Link to="/contact" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                  {t('cta.schedule')}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content with Semantic Structure */}
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-3xl font-bold text-center mb-12">
            Our AI Services
          </h2>
          
          <p className="text-xl text-center max-w-4xl mx-auto mb-12">
            We provide comprehensive AI solutions tailored to your business needs, 
            helping you harness the power of artificial intelligence for growth and innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Strategy Card with semantic article tag and proper heading hierarchy */}
            <article className="service-card">
              <ServiceCard
                title={t('strategy.title')}
                description={t('strategy.description')}
                items={[
                  t('strategy.item1'),
                  t('strategy.item2'),
                  t('strategy.item3')
                ]}
                url="/services/ai-strategy-consulting"
              />
            </article>

            {/* AI Integration Card */}
            <article className="service-card">
              <ServiceCard
                title={t('integration.title')}
                description={t('integration.description')}
                items={[
                  t('integration.item1'),
                  t('integration.item2'),
                  t('integration.item3')
                ]}
                url="/services/ai-integration-implementation"
              />
            </article>

            {/* AI Analytics Card */}
            <article className="service-card">
              <ServiceCard
                title={t('analytics.title')}
                description={t('analytics.description')}
                items={[
                  t('analytics.item1'),
                  t('analytics.item2'),
                  t('analytics.item3')
                ]}
                url="/services/ai-analytics-insights"
              />
            </article>

            {/* Process Automation Card */}
            <article className="service-card">
              <ServiceCard
                title={t('automation.title')}
                description={t('automation.description')}
                items={[
                  t('automation.item1'),
                  t('automation.item2'),
                  t('automation.item3')
                ]}
                url="/services/process-automation"
              />
            </article>

            {/* AI Compliance Card */}
            <article className="service-card">
              <ServiceCard
                title={t('compliance.title')}
                description={t('compliance.description')}
                items={[
                  t('compliance.item1'),
                  t('compliance.item2'),
                  t('compliance.item3')
                ]}
                url="/services/ai-compliance-governance"
              />
            </article>

            {/* AI Training Card */}
            <article className="service-card">
              <ServiceCard
                title={t('training.title')}
                description={t('training.description')}
                items={[
                  t('training.item1'),
                  t('training.item2'),
                  t('training.item3')
                ]}
                url="/services/ai-training-adoption"
              />
            </article>
          </div>
        </section>
      </main>

      {/* Semantic Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">nextai</h3>
              <p className="text-gray-300">
                Your trusted partner for AI implementation and strategy.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services/ai-strategy-consulting" className="text-gray-300 hover:text-white">AI Strategy</Link></li>
                <li><Link to="/services/ai-integration-implementation" className="text-gray-300 hover:text-white">AI Integration</Link></li>
                <li><Link to="/services/ai-analytics-insights" className="text-gray-300 hover:text-white">AI Analytics</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://linkedin.com/company/nextai" className="text-gray-300 hover:text-white">LinkedIn</a></li>
                <li><a href="https://twitter.com/nextai" className="text-gray-300 hover:text-white">Twitter</a></li>
                <li><a href="mailto:info@nextai.com" className="text-gray-300 hover:text-white">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} nextai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}