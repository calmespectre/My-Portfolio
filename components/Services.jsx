import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web Applications',
      description: 'Full-stack apps from idea to launch. React frontends + Python/Django backends.',
      icon: '🌐'
    },
    {
      title: 'APIs & Databases',
      description: 'RESTful APIs, SQL databases, and system integrations that scale.',
      icon: '⚙️'
    },
    {
      title: 'CI/CD & Deployment',
      description: 'Automated testing and deployment pipelines so your code ships safely.',
      icon: '🚀'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How I Can Help</h2>
          <p className="text-xl text-gray-600">What I Build</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="text-center p-8 rounded-2xl hover:bg-gray-50 transition">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;