"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Code, Brain, Lock, ExternalLink, ChevronRight, Zap, Cloud, Bot, Key, Puzzle, Globe, Chrome, Webhook, Database, ShieldCheck } from "lucide-react";
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
      icon: <Cloud className="h-6 w-6" />,
      title: "API Middleware",
      description: "Drop-in middleware solution for any AI service integration."
    },
    {
      icon: <Chrome className="h-6 w-6" />,
      title: "Browser Extensions",
      description: "Chrome extension and VS Code plugin for developer workflows."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Red Team Mode",
      description: "Advanced testing environment with adversarial prompt cases."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Live Chat Protection",
      description: "Real-time moderation for AI-powered chat applications."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              PromptGuardian
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your real-time AI firewall for secure and reliable LLM applications.
              Detect, explain, and fix prompt injections instantly.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="https://your-app-url.com" target="_blank">
                <Button size="lg" className="gap-2">
                  Try PromptGuardian <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="gap-2">
                Learn More <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features Section */}
      <div className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            Comprehensive Protection for Your AI Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-card hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Threat Detection</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">0.1s</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Real-time Protection</div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Features Section */}
      <div className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Advanced Capabilities</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            PromptGuardian provides enterprise-grade security features to protect your AI applications
            from sophisticated prompt injection attacks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detailedFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-start p-6">
                <div className="rounded-lg p-3 bg-primary/10 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Future Enhancements Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Future Roadmap</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            We're constantly evolving to stay ahead of emerging threats and provide better tools
            for AI security.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {futureEnhancements.map((feature, index) => (
              <Card key={index} className="p-6 border-dashed">
                <div className="mb-4 text-muted-foreground">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Secure Your AI Applications?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing community of developers building secure AI applications.
          </p>
          <Link href="https://your-app-url.com" target="_blank">
            <Button variant="secondary" size="lg" className="gap-2">
              Get Started Now <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}