"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Shield, Code, Brain, Lock, ExternalLink, ChevronRight,
  Zap, Cloud, Bot, Key, Puzzle, Globe, Chrome, Webhook,
  Database, ShieldCheck
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Real-time Protection",
      description: "Detect and prevent prompt injection attacks as they happen with our advanced AI firewall."
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Smart Analysis",
      description: "Dynamic risk scoring from 0-100 with detailed explanations of potential threats."
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Safe Rewrites",
      description: "Automatically rewrite harmful prompts while preserving the original intent."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Developer Friendly",
      description: "Easy integration with existing LLM workflows and popular AI services."
    }
  ];

  const detailedFeatures = [
    {
      icon: <Bot className="h-6 w-6 text-primary" />,
      title: "Multi-LLM Support",
      description: "Compatible with OpenAI, Cohere, Anthropic, and other major LLM providers."
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Context-Aware Detection",
      description: "Analyzes multi-turn conversations to catch sophisticated manipulation attempts."
    },
    {
      icon: <Key className="h-6 w-6 text-primary" />,
      title: "Advanced Security",
      description: "Identifies DAN attacks, system overrides, and nested prompt injections."
    },
    {
      icon: <Webhook className="h-6 w-6 text-primary" />,
      title: "Audit Logging",
      description: "Comprehensive logging and export capabilities for security compliance."
    }
  ];

  const futureEnhancements = [
    {
      icon: <Cloud className="h-6 w-6 text-primary" />,
      title: "API Middleware",
      description: "Drop-in middleware solution for any AI service integration."
    },
    {
      icon: <Chrome className="h-6 w-6 text-primary" />,
      title: "Browser Extensions",
      description: "Chrome extension and VS Code plugin for developer workflows."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Red Team Mode",
      description: "Advanced testing environment with adversarial prompt cases."
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Live Chat Protection",
      description: "Real-time moderation for AI-powered chat applications."
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40 text-center bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat rounded-xl shadow-lg"
      >
        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">PromptGuardian</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
            Your real-time AI firewall for secure and reliable LLM applications. Detect, explain, and fix prompt injections instantly.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="https://localhost:3000" target="_blank">
              <Button size="lg" className="gap-2">
                Try PromptGuardian <ExternalLink className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>


      {/* Core Features */}
      <section className="py-24 bg-gray-200">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl font-bold text-center mb-16">Comprehensive Protection for Your AI Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeIn}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 text-center bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            ["100%", "Threat Detection"],
            ["0.1s", "Response Time"],
            ["24/7", "Real-time Protection"]
          ].map(([value, label], idx) => (
            <motion.div key={idx} variants={fadeIn} initial="hidden" whileInView="show" custom={idx}>
              <div className="text-5xl font-bold text-primary mb-2">{value}</div>
              <div className="text-gray-600">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-24 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="learnmore" className="text-4xl font-bold mb-6">Advanced Capabilities</h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            PromptGuardian provides enterprise-grade security features to protect your AI applications from sophisticated prompt injection attacks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {detailedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                custom={index}
                initial="hidden"
                whileInView="show"
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow"
              >
                <div className="rounded-lg p-3 bg-primary/10 mb-4 w-fit">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Enhancements */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Future Roadmap</h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            We're constantly evolving to stay ahead of emerging threats and provide better tools for AI security.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {futureEnhancements.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                custom={index}
                initial="hidden"
                whileInView="show"
                className="p-6 border border-gray-200 rounded-xl bg-white shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your AI Applications?</h2>
          <Link href="https://localhost:3000" target="_blank">
            <Button variant="secondary" size="lg" className="gap-2">
              Get Started Now <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
