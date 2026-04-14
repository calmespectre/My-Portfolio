import React from 'react';

const CaseStudies = () => {
  const cases = [
    {
      title: 'E-Commerce',
      subtitle: 'Online Store Platform',
      challenge: 'A local business needed an online presence with a complete shopping experience - browsing, cart, checkout, and inventory.',
      achievements: ['Built responsive React frontend with product filtering and search', 'Designed Django REST API with PostgreSQL for order management', 'Implemented automated CI/CD pipeline for seamless deployments'],
      metrics: ['100% Online Presence', '0 Downtime Deploys'],
      tech: ['React', 'Django', 'PostgreSQL', 'REST API', 'CI/CD']
    },
    {
      title: 'Productivity',
      subtitle: 'Task Management App',
      challenge: 'A team needed a tool to organize projects, assign tasks, track deadlines, and collaborate in real-time.',
      achievements: ['Built TypeScript + Node.js backend with Express and SQL', 'Created drag-and-drop task boards with real-time sync', 'Integrated user authentication and role-based access'],
      metrics: ['50% Faster Planning', '100% Test Coverage'],
      tech: ['TypeScript', 'Node.js', 'Express', 'SQL', 'React']
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
          <p className="text-xl text-gray-600">Featured Case Studies</p>
          <p className="text-gray-500 mt-2">Real projects with measurable outcomes.</p>
        </div>

        <div className="space-y-16">
          {cases.map((caseStudy, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{caseStudy.title}</span>
                  <h3 className="text-3xl font-bold mt-2 mb-4">{caseStudy.subtitle}</h3>
                  <p className="text-gray-700 mb-6">
                    <span className="font-semibold">The Challenge:</span> {caseStudy.challenge}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3">What I Did</h4>
                  <ul className="space-y-2">
                    {caseStudy.achievements.map((item, idx) => (
                      <li key={idx} className="text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  {caseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full">
                      <span className="font-bold text-blue-600">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {caseStudy.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;