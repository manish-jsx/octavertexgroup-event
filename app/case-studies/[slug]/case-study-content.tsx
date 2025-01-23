// app/case-studies/[slug]/case-study-content.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Clock, 
  Users, 
  TrendingUp, 
  TrendingDown,
  ChevronRight
} from 'lucide-react';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CaseStudy, Metric } from '@/lib/case-studies';

interface Props {
  study: CaseStudy;
}

const MetricCard = ({ metric }: { metric: Metric }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <Card className="bg-white/5 backdrop-blur-md border-white/10">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-400 mb-1">{metric.label}</p>
            <h4 className="text-3xl font-bold mb-2">{metric.value}</h4>
            <p className="text-sm text-gray-300">{metric.description}</p>
          </div>
          {metric.trend && (
            <div className={`p-2 rounded-full ${
              metric.trend === 'up' ? 'bg-green-500/20' : 'bg-red-500/20'
            }`}>
              {metric.trend === 'up' ? (
                <TrendingUp className="w-5 h-5 text-green-400" />
              ) : (
                <TrendingDown className="w-5 h-5 text-red-400" />
              )}
            </div>
          )}
        </div>
        {metric.percentage && (
          <div className="mt-4">
            <Progress value={metric.percentage} className="h-2" />
          </div>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

export default function CaseStudyContent({ study }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={study.headerImage}
            alt={study.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <Image
                src={study.logoImage}
                alt={study.client}
                width={120}
                height={120}
                className="mx-auto"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {study.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300"
            >
              {study.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Client', value: study.client },
            { label: 'Industry', value: study.industry },
            { label: 'Duration', value: study.duration },
            { label: 'Team Size', value: `${study.teamSize} specialists` }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white/5 backdrop-blur-md rounded-lg"
            >
              <p className="text-gray-400 mb-2">{item.label}</p>
              <p className="text-xl font-bold">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {study.overview}
          </p>
        </motion.div>
      </section>

      {/* Challenges */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-12 text-center">Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {study.challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4">{challenge.title}</h3>
              <p className="text-gray-300 mb-4">{challenge.description}</p>
              {challenge.impact && (
                <p className="text-blue-400 font-medium">{challenge.impact}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <p className="text-lg text-gray-300 mb-8">
              {study.solution.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
              {study.solution.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <ChevronRight className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {study.solution.techStack && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {study.solution.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-12 text-center">Development Process</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-500/20" />
          {study.process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}
            >
              <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <Image
                  src={step.image}
                  alt={step.title}
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} flex flex-col justify-center`}>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300 mb-4">{step.description}</p>
                {step.tools && (
                  <div className="flex flex-wrap gap-2 justify-start">
                    {step.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outcomes & Metrics */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Impact & Results</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {study.outcomes.summary}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {study.outcomes.metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-lg p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src={study.testimonial.image}
                alt={study.testimonial.author}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <p className="text-xl italic mb-4">"{study.testimonial.quote}"</p>
              <div>
                <p className="font-bold">{study.testimonial.author}</p>
                <p className="text-gray-400">
                  {study.testimonial.role}, {study.testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Technologies Used */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Technologies Used</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {study.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-lg text-gray-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Next Project */}
      {study.nextProject && (
        <section className="relative h-[40vh] mt-20">
          <div className="absolute inset-0">
            <Image
              src={study.nextProject.image}
              alt={study.nextProject.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-gray-400 mb-4">Next Case Study</p>
              <h3 className="text-3xl font-bold mb-6">{study.nextProject.title}</h3>
              <Link href={`/case-studies/${study.nextProject.slug}`}>
                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md border-white/20"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}